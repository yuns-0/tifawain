export interface FilterOption {
  value: string
  label: string
  count?: number
}

export interface FilterState {
  category?: string
  tags?: string[]
  search?: string
  sort?: string
  page?: number
}

export function createFilterOptions(items: any[], key: string): FilterOption[] {
  const counts = items.reduce((acc, item) => {
    const value = item[key]
    if (Array.isArray(value)) {
      value.forEach(v => {
        acc[v] = (acc[v] || 0) + 1
      })
    } else if (value) {
      acc[value] = (acc[value] || 0) + 1
    }
    return acc
  }, {} as Record<string, number>)

  return Object.entries(counts)
    .map(([value, count]) => ({
      value,
      label: formatLabel(value),
      count
    }))
    .sort((a, b) => b.count! - a.count!)
}

export function formatLabel(value: string): string {
  return value
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function filterItems<T extends Record<string, any>>(
  items: T[],
  filters: FilterState
): T[] {
  let filtered = [...items]

  // Search filter
  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    filtered = filtered.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchLower)
      )
    )
  }

  // Category filter
  if (filters.category) {
    filtered = filtered.filter(item => item.category === filters.category)
  }

  // Tags filter
  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter(item =>
      filters.tags!.some(tag => 
        Array.isArray(item.tags) ? item.tags.includes(tag) : item.tags === tag
      )
    )
  }

  // Sort
  if (filters.sort) {
    filtered = sortItems(filtered, filters.sort)
  }

  return filtered
}

export function sortItems<T extends Record<string, any>>(
  items: T[],
  sortBy: string
): T[] {
  const [field, direction] = sortBy.split(':')
  const isDesc = direction === 'desc'

  return [...items].sort((a, b) => {
    let aVal = a[field]
    let bVal = b[field]

    // Handle dates
    if (field.includes('date') || field.includes('time')) {
      aVal = new Date(aVal).getTime()
      bVal = new Date(bVal).getTime()
    }

    // Handle numbers
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return isDesc ? bVal - aVal : aVal - bVal
    }

    // Handle strings
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return isDesc 
        ? bVal.localeCompare(aVal)
        : aVal.localeCompare(bVal)
    }

    return 0
  })
}

export function paginateItems<T>(
  items: T[],
  page: number = 1,
  perPage: number = 12
): { items: T[]; pagination: PaginationInfo } {
  const total = items.length
  const totalPages = Math.ceil(total / perPage)
  const startIndex = (page - 1) * perPage
  const endIndex = startIndex + perPage

  return {
    items: items.slice(startIndex, endIndex),
    pagination: {
      page,
      perPage,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
      nextPage: page < totalPages ? page + 1 : null,
      prevPage: page > 1 ? page - 1 : null
    }
  }
}

export interface PaginationInfo {
  page: number
  perPage: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
  nextPage: number | null
  prevPage: number | null
}

export function createPaginationLinks(
  pagination: PaginationInfo,
  baseUrl: string
): Array<{ label: string; url: string | null; active: boolean }> {
  const links = []

  // Previous page
  links.push({
    label: 'Previous',
    url: pagination.hasPrev ? `${baseUrl}?page=${pagination.prevPage}` : null,
    active: false
  })

  // Page numbers
  const startPage = Math.max(1, pagination.page - 2)
  const endPage = Math.min(pagination.totalPages, pagination.page + 2)

  for (let i = startPage; i <= endPage; i++) {
    links.push({
      label: i.toString(),
      url: i === pagination.page ? null : `${baseUrl}?page=${i}`,
      active: i === pagination.page
    })
  }

  // Next page
  links.push({
    label: 'Next',
    url: pagination.hasNext ? `${baseUrl}?page=${pagination.nextPage}` : null,
    active: false
  })

  return links
}

export function parseQueryFilters(query: Record<string, any>): FilterState {
  return {
    category: query.category || undefined,
    tags: query.tags ? (Array.isArray(query.tags) ? query.tags : [query.tags]) : undefined,
    search: query.search || undefined,
    sort: query.sort || 'date:desc',
    page: query.page ? parseInt(query.page) : 1
  }
}

export function serializeFilters(filters: FilterState): Record<string, string> {
  const params: Record<string, string> = {}

  if (filters.category) params.category = filters.category
  if (filters.tags && filters.tags.length > 0) params.tags = filters.tags.join(',')
  if (filters.search) params.search = filters.search
  if (filters.sort) params.sort = filters.sort
  if (filters.page && filters.page > 1) params.page = filters.page.toString()

  return params
}

export function createSearchSuggestions(
  items: any[],
  searchTerm: string,
  maxSuggestions: number = 5
): string[] {
  if (!searchTerm || searchTerm.length < 2) return []

  const suggestions = new Set<string>()
  const searchLower = searchTerm.toLowerCase()

  items.forEach(item => {
    Object.values(item).forEach(value => {
      if (typeof value === 'string') {
        const words = value.toLowerCase().split(/\s+/)
        words.forEach(word => {
          if (word.startsWith(searchLower) && word !== searchLower) {
            suggestions.add(word)
          }
        })
      }
    })
  })

  return Array.from(suggestions)
    .slice(0, maxSuggestions)
    .sort()
}

export function highlightSearchTerm(text: string, searchTerm: string): string {
  if (!searchTerm) return text

  const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi')
  return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">$1</mark>')
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
