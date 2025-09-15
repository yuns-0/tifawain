import { ref, reactive, computed } from 'vue'
import type { ZodSchema } from 'zod'
import { validateForm } from '~/utils/schema'

export interface FormState<T> {
  data: T
  errors: Record<string, string[]>
  isSubmitting: boolean
  isSubmitted: boolean
  isValid: boolean
}

export function useForm<T extends Record<string, any>>(
  schema: ZodSchema<T>,
  initialData: T
) {
  const formState = reactive<FormState<T>>({
    data: { ...initialData },
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
    isValid: false
  })

  // Validate form data
  const validate = () => {
    const result = validateForm(schema, formState.data)
    formState.errors = result.errors || {}
    formState.isValid = result.success
    return result.success
  }

  // Update field value
  const updateField = (field: keyof T, value: any) => {
    formState.data[field] = value
    
    // Clear field error when user starts typing
    if (formState.errors[field as string]) {
      delete formState.errors[field as string]
    }
    
    // Revalidate
    validate()
  }

  // Set field error
  const setFieldError = (field: keyof T, error: string) => {
    formState.errors[field as string] = [error]
  }

  // Clear field error
  const clearFieldError = (field: keyof T) => {
    delete formState.errors[field as string]
  }

  // Clear all errors
  const clearErrors = () => {
    formState.errors = {}
  }

  // Reset form
  const resetForm = () => {
    formState.data = { ...initialData }
    formState.errors = {}
    formState.isSubmitting = false
    formState.isSubmitted = false
    formState.isValid = false
  }

  // Submit form
  const submitForm = async (submitFn: (data: T) => Promise<any>) => {
    if (!validate()) {
      return { success: false, errors: formState.errors }
    }

    formState.isSubmitting = true
    formState.errors = {}

    try {
      const result = await submitFn(formState.data)
      formState.isSubmitted = true
      return { success: true, data: result }
    } catch (error: any) {
      if (error.errors) {
        formState.errors = error.errors
      } else {
        formState.errors = { general: [error.message || 'An error occurred'] }
      }
      return { success: false, errors: formState.errors }
    } finally {
      formState.isSubmitting = false
    }
  }

  // Get field error
  const getFieldError = (field: keyof T) => {
    return formState.errors[field as string]?.[0] || ''
  }

  // Check if field has error
  const hasFieldError = (field: keyof T) => {
    return !!formState.errors[field as string]
  }

  // Computed properties
  const hasErrors = computed(() => Object.keys(formState.errors).length > 0)
  const canSubmit = computed(() => formState.isValid && !formState.isSubmitting)

  return {
    formState: readonly(formState),
    validate,
    updateField,
    setFieldError,
    clearFieldError,
    clearErrors,
    resetForm,
    submitForm,
    getFieldError,
    hasFieldError,
    hasErrors,
    canSubmit
  }
}

// Form field composable for individual fields
export function useFormField<T>(
  formState: FormState<T>,
  field: keyof T,
  updateField: (field: keyof T, value: any) => void
) {
  const value = computed(() => formState.data[field])
  const error = computed(() => formState.errors[field as string]?.[0] || '')
  const hasError = computed(() => !!formState.errors[field as string])

  const update = (newValue: any) => {
    updateField(field, newValue)
  }

  return {
    value,
    error,
    hasError,
    update
  }
}
