import { contactFormSchema, validateForm, createRateLimit } from '~/utils/schema'

// Rate limiting configuration
const rateLimit = createRateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5 // 5 requests per window
})

export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(event) || 'unknown'
    
    // Check rate limit
    if (!rateLimit(clientIP)) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Too Many Requests'
      })
    }

    // Parse request body
    const body = await readBody(event)
    
    // Validate form data
    const validation = validateForm(contactFormSchema, body)
    
    if (!validation.success) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation Error',
        data: validation.errors
      })
    }

    const formData = validation.data!

    // Log the submission (in production, you'd send emails, save to database, etc.)
    console.log('Contact form submission:', {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      budget: formData.budget,
      timeline: formData.timeline,
      interest: formData.interest,
      message: formData.message,
      timestamp: new Date().toISOString(),
      ip: clientIP
    })

    // In a real application, you would:
    // 1. Send email notifications
    // 2. Save to database
    // 3. Integrate with CRM
    // 4. Send auto-responder emails
    
    // Simulate email sending
    await sendContactEmail(formData)
    
    // Send auto-responder
    await sendAutoResponder(formData.email, formData.name)

    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
    }

  } catch (error: any) {
    console.error('Contact form error:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error'
    })
  }
})

// Email sending functions (mock implementations)
async function sendContactEmail(formData: any) {
  // In production, use a service like Resend, SendGrid, or Nodemailer
  const config = useRuntimeConfig()
  
  console.log('Sending contact email to team...')
  console.log('Email service configuration:', {
    smtpHost: config.smtpHost,
    smtpUser: config.smtpUser,
    resendApiKey: config.resendApiKey ? '***configured***' : 'not configured'
  })
  
  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  console.log('Contact email sent successfully')
}

async function sendAutoResponder(email: string, name: string) {
  console.log(`Sending auto-responder to ${email} (${name})...`)
  
  // Simulate auto-responder sending
  await new Promise(resolve => setTimeout(resolve, 500))
  
  console.log('Auto-responder sent successfully')
}
