// Firebase Contact Form Service
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import { sanitizeInput } from '../utils/security';

/**
 * Submit contact form to Firebase Firestore
 * @param {Object} formData - The form data (name, email, message)
 * @returns {Promise<Object>} - Result with success status and message
 */
export const submitContactForm = async (formData) => {
  try {
    // Sanitize inputs (already done in Contact.jsx but double-check)
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
      timestamp: serverTimestamp(),
      status: 'unread',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
      source: 'portfolio_website'
    };

    // Add document to Firestore
    const docRef = await addDoc(collection(db, 'contact_submissions'), sanitizedData);

    return {
      success: true,
      messageId: docRef.id,
      message: 'Your message has been sent successfully!'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // Return user-friendly error message
    let errorMessage = 'Failed to send message. Please try again.';
    
    if (error.code === 'permission-denied') {
      errorMessage = 'Permission denied. Please check Firebase security rules.';
    } else if (error.code === 'unavailable') {
      errorMessage = 'Service temporarily unavailable. Please try again later.';
    } else if (error.message.includes('network')) {
      errorMessage = 'Network error. Please check your internet connection.';
    }

    return {
      success: false,
      error: errorMessage,
      errorCode: error.code
    };
  }
};

/**
 * Send email notification (optional - requires Firebase Functions)
 * This would be implemented in Firebase Cloud Functions
 */
export const sendEmailNotification = async (submissionId) => {
  // This would be a Cloud Function trigger
  // For now, just a placeholder
  console.log('Email notification would be sent for submission:', submissionId);
};

export default {
  submitContactForm,
  sendEmailNotification
};