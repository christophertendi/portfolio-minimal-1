// Security Utilities for Portfolio Website

/**
 * Sanitize user input to prevent XSS attacks
 * Removes potentially dangerous HTML tags and scripts
 */
export const sanitizeInput = (input) => {
  if (!input || typeof input !== 'string') return '';
  
  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');
  
  // Remove script-related content
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove event handlers
  sanitized = sanitized.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
  
  // Remove javascript: protocols
  sanitized = sanitized.replace(/javascript:/gi, '');
  
  // Encode special characters
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
  
  return sanitized.trim();
};

/**
 * Validate email format
 */
export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validate name (no special characters except spaces, hyphens, apostrophes)
 */
export const validateName = (name) => {
  if (!name || typeof name !== 'string') return false;
  
  const nameRegex = /^[a-zA-Z\s'-]{1,100}$/;
  return nameRegex.test(name);
};

/**
 * Validate message length and content
 */
export const validateMessage = (message) => {
  if (!message || typeof message !== 'string') return false;
  
  // Check length (min 10 chars, max 5000 chars)
  if (message.length < 10 || message.length > 5000) return false;
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /<iframe/i,
    /<embed/i,
    /<object/i,
  ];
  
  return !suspiciousPatterns.some(pattern => pattern.test(message));
};

/**
 * Rate limiting helper (simple client-side implementation)
 */
export class RateLimiter {
  constructor(maxAttempts = 3, timeWindow = 60000) {
    this.maxAttempts = maxAttempts;
    this.timeWindow = timeWindow;
    this.attempts = [];
  }
  
  canAttempt() {
    const now = Date.now();
    
    // Remove old attempts outside the time window
    this.attempts = this.attempts.filter(
      timestamp => now - timestamp < this.timeWindow
    );
    
    // Check if under the limit
    if (this.attempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Record this attempt
    this.attempts.push(now);
    return true;
  }
  
  getRemainingTime() {
    if (this.attempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...this.attempts);
    const elapsed = Date.now() - oldestAttempt;
    const remaining = this.timeWindow - elapsed;
    
    return Math.max(0, Math.ceil(remaining / 1000));
  }
}

/**
 * Detect and prevent common injection patterns
 */
export const detectInjection = (input) => {
  if (!input || typeof input !== 'string') return false;
  
  const injectionPatterns = [
    // SQL Injection
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION)\b)/i,
    // XSS
    /<script[^>]*>[\s\S]*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=\s*["'][^"']*["']/gi,
    // Command Injection
    /[;&|`$(){}[\]]/,
    // Path Traversal
    /\.\.[\/\\]/,
  ];
  
  return injectionPatterns.some(pattern => pattern.test(input));
};

/**
 * Secure localStorage wrapper with encryption simulation
 */
export const secureStorage = {
  set(key, value) {
    try {
      // In production, consider actual encryption
      const data = JSON.stringify(value);
      const encoded = btoa(data); // Base64 encoding as basic obfuscation
      localStorage.setItem(key, encoded);
      return true;
    } catch (error) {
      console.error('Storage error:', error);
      return false;
    }
  },
  
  get(key) {
    try {
      const encoded = localStorage.getItem(key);
      if (!encoded) return null;
      
      const data = atob(encoded);
      return JSON.parse(data);
    } catch (error) {
      console.error('Storage retrieval error:', error);
      return null;
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Storage removal error:', error);
      return false;
    }
  }
};

/**
 * Generate Content Security Policy nonce
 */
export const generateNonce = () => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Secure form submission helper
 */
export const secureFormSubmit = (formData, rateLimiter) => {
  // Check rate limiting
  if (!rateLimiter.canAttempt()) {
    const remainingTime = rateLimiter.getRemainingTime();
    return {
      success: false,
      error: `Too many attempts. Please wait ${remainingTime} seconds.`
    };
  }
  
  // Validate and sanitize all fields
  const sanitizedData = {};
  let hasErrors = false;
  const errors = {};
  
  // Validate name
  if (!validateName(formData.name)) {
    errors.name = 'Invalid name format';
    hasErrors = true;
  } else {
    sanitizedData.name = sanitizeInput(formData.name);
  }
  
  // Validate email
  if (!validateEmail(formData.email)) {
    errors.email = 'Invalid email address';
    hasErrors = true;
  } else {
    sanitizedData.email = sanitizeInput(formData.email);
  }
  
  // Validate message
  if (!validateMessage(formData.message)) {
    errors.message = 'Message must be between 10 and 5000 characters';
    hasErrors = true;
  } else {
    sanitizedData.message = sanitizeInput(formData.message);
  }
  
  // Check for injection attempts
  if (Object.values(formData).some(detectInjection)) {
    return {
      success: false,
      error: 'Invalid input detected. Please try again.'
    };
  }
  
  if (hasErrors) {
    return {
      success: false,
      errors
    };
  }
  
  return {
    success: true,
    data: sanitizedData
  };
};

/**
 * CSRF Token Generator (for future API integrations)
 */
export const generateCSRFToken = () => {
  const token = generateNonce();
  secureStorage.set('csrf_token', token);
  return token;
};

/**
 * Validate CSRF Token
 */
export const validateCSRFToken = (token) => {
  const storedToken = secureStorage.get('csrf_token');
  return token && storedToken && token === storedToken;
};

export default {
  sanitizeInput,
  validateEmail,
  validateName,
  validateMessage,
  detectInjection,
  RateLimiter,
  secureStorage,
  generateNonce,
  secureFormSubmit,
  generateCSRFToken,
  validateCSRFToken
};
