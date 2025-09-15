import { z } from 'zod'

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters').max(100, 'Company name must be less than 100 characters'),
  phone: z.string().optional(),
  budget: z.enum(['under-5k', '5k-15k', '15k-50k', '50k-plus', 'not-sure'], {
    errorMap: () => ({ message: 'Please select a budget range' })
  }),
  timeline: z.enum(['asap', '1-month', '2-3-months', '3-6-months', 'flexible'], {
    errorMap: () => ({ message: 'Please select a timeline' })
  }),
  interest: z.array(z.enum(['code-dev', 'branding', 'design', 'automation', 'social-media', 'ai-agents'])).min(1, 'Please select at least one service'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
  honeypot: z.string().max(0, 'Bot detected'), // Honeypot field
  consent: z.boolean().refine(val => val === true, 'You must agree to the privacy policy')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Job application schema
export const jobApplicationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  position: z.string().min(2, 'Please specify the position'),
  experience: z.enum(['entry', 'mid', 'senior', 'lead'], {
    errorMap: () => ({ message: 'Please select your experience level' })
  }),
  location: z.string().min(2, 'Please enter your location'),
  resume: z.string().optional(), // Base64 encoded file
  portfolio: z.string().url('Please enter a valid portfolio URL').optional().or(z.literal('')),
  coverLetter: z.string().min(50, 'Cover letter must be at least 50 characters').max(2000, 'Cover letter must be less than 2000 characters'),
  availability: z.enum(['immediate', '2-weeks', '1-month', 'flexible'], {
    errorMap: () => ({ message: 'Please select your availability' })
  }),
  salary: z.string().optional(),
  referral: z.string().optional(),
  honeypot: z.string().max(0, 'Bot detected'),
  consent: z.boolean().refine(val => val === true, 'You must agree to the privacy policy')
})

export type JobApplicationData = z.infer<typeof jobApplicationSchema>

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  interests: z.array(z.string()).optional(),
  honeypot: z.string().max(0, 'Bot detected')
})

export type NewsletterData = z.infer<typeof newsletterSchema>

// ROI Calculator schema
export const roiCalculatorSchema = z.object({
  hoursSaved: z.number().min(1, 'Hours saved must be at least 1').max(168, 'Hours saved cannot exceed 168 per week'),
  hourlyRate: z.number().min(10, 'Hourly rate must be at least $10').max(1000, 'Hourly rate cannot exceed $1000'),
  weeks: z.number().min(1, 'Weeks must be at least 1').max(52, 'Weeks cannot exceed 52'),
  platformCost: z.number().min(0, 'Platform cost cannot be negative').max(10000, 'Platform cost cannot exceed $10,000'),
  setupCost: z.number().min(0, 'Setup cost cannot be negative').max(50000, 'Setup cost cannot exceed $50,000')
})

export type RoiCalculatorData = z.infer<typeof roiCalculatorSchema>

// Prompt Generator schemas
export const automationBriefSchema = z.object({
  businessType: z.string().min(2, 'Please specify your business type'),
  currentProcess: z.string().min(10, 'Please describe your current process'),
  painPoints: z.string().min(10, 'Please describe your pain points'),
  goals: z.string().min(10, 'Please describe your goals'),
  tools: z.array(z.string()).optional(),
  budget: z.enum(['under-1k', '1k-5k', '5k-15k', '15k-plus'], {
    errorMap: () => ({ message: 'Please select a budget range' })
  })
})

export const brandingBriefSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  industry: z.string().min(2, 'Please specify your industry'),
  targetAudience: z.string().min(10, 'Please describe your target audience'),
  brandPersonality: z.array(z.string()).min(1, 'Please select at least one personality trait'),
  competitors: z.string().optional(),
  uniqueValue: z.string().min(10, 'Please describe your unique value proposition'),
  colorPreferences: z.array(z.string()).optional(),
  budget: z.enum(['under-5k', '5k-15k', '15k-50k', '50k-plus'], {
    errorMap: () => ({ message: 'Please select a budget range' })
  })
})

export const devBriefSchema = z.object({
  projectType: z.enum(['web-app', 'mobile-app', 'api', 'integration', 'ecommerce', 'other'], {
    errorMap: () => ({ message: 'Please select a project type' })
  }),
  description: z.string().min(20, 'Please provide a detailed description'),
  features: z.array(z.string()).min(1, 'Please list at least one feature'),
  techStack: z.array(z.string()).optional(),
  timeline: z.enum(['1-month', '2-3-months', '3-6-months', '6-plus-months'], {
    errorMap: () => ({ message: 'Please select a timeline' })
  }),
  budget: z.enum(['under-10k', '10k-25k', '25k-50k', '50k-plus'], {
    errorMap: () => ({ message: 'Please select a budget range' })
  }),
  maintenance: z.boolean().optional()
})

export type AutomationBriefData = z.infer<typeof automationBriefSchema>
export type BrandingBriefData = z.infer<typeof brandingBriefSchema>
export type DevBriefData = z.infer<typeof devBriefSchema>

// Validation helpers
export function validateForm<T>(schema: z.ZodSchema<T>, data: unknown): {
  success: boolean
  data?: T
  errors?: Record<string, string[]>
} {
  try {
    const validatedData = schema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {}
      error.errors.forEach(err => {
        const path = err.path.join('.')
        if (!errors[path]) {
          errors[path] = []
        }
        errors[path].push(err.message)
      })
      return { success: false, errors }
    }
    return { success: false, errors: { general: ['An unexpected error occurred'] } }
  }
}

// Sanitization helpers
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
}

export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization - in production, use a proper library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '')
}

// Rate limiting helpers
export interface RateLimitConfig {
  windowMs: number
  maxRequests: number
}

export function createRateLimit(config: RateLimitConfig) {
  const requests = new Map<string, { count: number; resetTime: number }>()
  
  return (identifier: string): boolean => {
    const now = Date.now()
    const windowStart = now - config.windowMs
    
    // Clean up old entries
    for (const [key, value] of requests.entries()) {
      if (value.resetTime < windowStart) {
        requests.delete(key)
      }
    }
    
    const current = requests.get(identifier)
    
    if (!current) {
      requests.set(identifier, { count: 1, resetTime: now })
      return true
    }
    
    if (current.resetTime < windowStart) {
      requests.set(identifier, { count: 1, resetTime: now })
      return true
    }
    
    if (current.count >= config.maxRequests) {
      return false
    }
    
    current.count++
    return true
  }
}
