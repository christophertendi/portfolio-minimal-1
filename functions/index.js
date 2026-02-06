// Firebase Cloud Function for Email Notifications
// Using Firebase Functions v2 syntax

const {onDocumentCreated} = require('firebase-functions/v2/firestore');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure your email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'chris.samuelten@gmail.com',
    pass: process.env.EMAIL_PASS
  }
});

/**
 * Trigger: When a new contact submission is created
 * Action: Send email notification to site owner
 */
exports.sendContactEmail = onDocumentCreated('contact_submissions/{submissionId}', async (event) => {
  const snap = event.data;
  const data = snap.data();
  const submissionId = event.params.submissionId;
  
  try {
    // Email to site owner (you)
    const mailOptions = {
      from: `Portfolio Contact Form <${process.env.EMAIL_USER || 'chris.samuelten@gmail.com'}>`,
      replyTo: data.email,
      to: 'chris.samuelten@gmail.com',
      subject: `🔔 New Contact: ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0a0a0a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; font-size: 12px; text-transform: uppercase; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #00d9ff; border-radius: 4px; }
            .footer { text-align: center; color: #888; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">📧 New Contact Form Submission</h1>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">From</div>
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value">
                  <a href="mailto:${data.email}" style="color: #00d9ff; text-decoration: none;">${data.email}</a>
                </div>
              </div>
              
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="field">
                <div class="label">Submitted</div>
                <div class="value">${data.timestamp.toDate().toLocaleString('en-US', { 
                  weekday: 'short', 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your portfolio contact form.</p>
              <p style="color: #bbb;">Submission ID: ${submissionId}</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    // Update document status
    await snap.ref.update({
      status: 'notified',
      notified_at: admin.firestore.FieldValue.serverTimestamp()
    });
    
    console.log('✅ Email sent successfully for submission:', submissionId);
    return { success: true };
    
  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    // Update document with error
    await snap.ref.update({
      status: 'notification_failed',
      error: error.message
    });
    
    throw error;
  }
});

/**
 * Auto-reply to the person who submitted the form
 */
exports.sendAutoReply = onDocumentCreated('contact_submissions/{submissionId}', async (event) => {
  const snap = event.data;
  const data = snap.data();
  
  try {
    const firstName = data.name.split(' ')[0];
    
    const mailOptions = {
      from: `Christopher Tendi <${process.env.EMAIL_USER || 'chris.samuelten@gmail.com'}>`,
      to: data.email,
      subject: 'Thank you for reaching out!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.7; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0a0a0a; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .message-quote { 
              border-left: 3px solid #00d9ff; 
              padding-left: 15px; 
              color: #666;
              background: white;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
              font-style: italic;
            }
            .footer { 
              text-align: center; 
              color: #888; 
              font-size: 12px; 
              margin-top: 30px; 
              padding-top: 20px; 
              border-top: 1px solid #ddd; 
            }
            .signature {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #f0f0f0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">Thank You! 🙏</h1>
            </div>
            
            <div class="content">
              <p style="font-size: 16px;">Hi <strong>${firstName}</strong>,</p>
              
              <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
              
              <div class="message-quote">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
              
              <p>I typically respond within <strong>24-48 hours</strong>. If your inquiry is urgent, you can also reach me directly at <a href="mailto:chris.samuelten@gmail.com" style="color: #00d9ff;">chris.samuelten@gmail.com</a>.</p>
              
              <div class="signature">
                <p style="margin: 5px 0;">Best regards,</p>
                <p style="margin: 5px 0;"><strong>Christopher Samuel Tendi</strong></p>
                <p style="margin: 5px 0; color: #666; font-size: 14px;">Full-Stack Developer & Product Management</p>
              </div>
            </div>
            
            <div class="footer">
              <p>This is an automated response from my portfolio.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Auto-reply sent to:', data.email);
    
  } catch (error) {
    console.error('❌ Error sending auto-reply:', error);
    // Don't throw - auto-reply failure shouldn't break the main notification
  }
});