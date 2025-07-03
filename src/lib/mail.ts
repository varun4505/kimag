import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendApprovalEmail({ id, approver }: { id: string; approver: string }) {
  const approveLink = `${process.env.BASE_URL}/api/appointments/approve?id=${id}&action=approve&who=${approver}`;
  const rejectLink = `${process.env.BASE_URL}/api/appointments/approve?id=${id}&action=reject&who=${approver}`;

  await transporter.sendMail({
    from: `Appointment System <${process.env.MAIL_USER}>`,
    to: approver,
    subject: 'Appointment Request - Please Approve or Reject',
    html: `<p>New appointment request.</p><a href="${approveLink}">✅ Approve</a><br/><a href="${rejectLink}">❌ Reject</a>`
  });
}

export async function sendAppointmentStatusEmail({ 
  email, 
  name, 
  status,
  date,
  time,
  service
}: { 
  email: string; 
  name: string; 
  status: 'approved' | 'rejected';
  date: string;
  time: string;
  service: string;
}) {
  const isApproved = status === 'approved';
  const statusColor = isApproved ? '#22c55e' : '#ef4444';
  const statusIcon = isApproved ? '✅' : '❌';
  const statusText = isApproved ? 'Confirmed' : 'Not Approved';
  
  await transporter.sendMail({
    from: `KIMAG Team <${process.env.MAIL_USER}>`,
    to: email,
    subject: `Appointment ${statusText} - ${service}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2d6389; margin: 0;">KIMAG</h1>
          <p style="color: #666; margin: 5px 0;">Creative Agency</p>
        </div>
        
        <div style="background: ${statusColor}; padding: 30px; border-radius: 15px; color: white; text-align: center; margin-bottom: 30px;">
          <h2 style="margin: 0 0 10px 0;">${statusIcon} Appointment ${statusText}</h2>
          <p style="margin: 0; opacity: 0.9;">Your appointment request has been ${status}</p>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9; border-radius: 10px; margin-bottom: 30px;">
          <h3 style="color: #2d6389; margin-top: 0;">Hi ${name},</h3>
          ${isApproved ? `
            <p style="color: #333; line-height: 1.6;">
              Great news! Your appointment has been confirmed. We're looking forward to meeting with you to discuss your project.
            </p>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #22c55e;">
              <h4 style="margin: 0 0 15px 0; color: #2d6389;">Appointment Details:</h4>
              <p style="margin: 5px 0; color: #333;"><strong>Service:</strong> ${service}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Date:</strong> ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Time:</strong> ${time}</p>
            </div>
            <p style="color: #333; line-height: 1.6; margin-top: 20px;">
              <strong>What to expect:</strong><br>
              • We'll discuss your project goals and requirements<br>
              • Review our portfolio and case studies relevant to your industry<br>
              • Provide initial recommendations and next steps<br>
              • Answer any questions you may have
            </p>
            <p style="color: #333; line-height: 1.6;">
              If you need to reschedule or have any questions, please don't hesitate to contact us.
            </p>
          ` : `
            <p style="color: #333; line-height: 1.6;">
              Thank you for your interest in KIMAG. Unfortunately, we're unable to accommodate your appointment request at this time due to scheduling constraints.
            </p>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #ef4444;">
              <h4 style="margin: 0 0 15px 0; color: #2d6389;">Requested Appointment:</h4>
              <p style="margin: 5px 0; color: #333;"><strong>Service:</strong> ${service}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Date:</strong> ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Time:</strong> ${time}</p>
            </div>
            <p style="color: #333; line-height: 1.6; margin-top: 20px;">
              We'd still love to work with you! Please feel free to book another appointment at a different time, or contact us directly to discuss alternative scheduling options.
            </p>
          `}
        </div>
        
        ${isApproved ? `
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.BASE_URL}/appointment" 
             style="display: inline-block; background: linear-gradient(135deg, #2d6389 0%, #348992 100%); 
                    color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; 
                    font-weight: bold; font-size: 16px;">
            📅 View Appointment Details
          </a>
        </div>
        ` : `
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.BASE_URL}/appointment" 
             style="display: inline-block; background: linear-gradient(135deg, #2d6389 0%, #348992 100%); 
                    color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; 
                    font-weight: bold; font-size: 16px;">
            📅 Book New Appointment
          </a>
        </div>
        `}
        
        <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
          <p>Need help or have questions? Reply to this email and we'll get back to you shortly.</p>
          <p style="margin-top: 20px;">
            Best regards,<br>
            <strong style="color: #2d6389;">The KIMAG Team</strong>
          </p>
        </div>
      </div>
    `
  });
}

export async function sendContactFormEmail({ 
  name, 
  email, 
  phone, 
  subject, 
  message 
}: { 
  name: string; 
  email: string; 
  phone: string; 
  subject: string; 
  message: string; 
}) {
  // Admin email address - you can change this to your preferred email
  const adminEmail = process.env.ADMIN_EMAIL || process.env.MAIL_USER;
  
  await transporter.sendMail({
    from: `Contact Form <${process.env.MAIL_USER}>`,
    to: adminEmail,
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2d6389; margin: 0;">KIMAG</h1>
          <p style="color: #666; margin: 5px 0;">New Contact Form Submission</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #2d6389 0%, #348992 100%); padding: 30px; border-radius: 15px; color: white; text-align: center; margin-bottom: 30px;">
          <h2 style="margin: 0 0 10px 0;">📧 New Contact Message</h2>
          <p style="margin: 0; opacity: 0.9;">Someone has submitted a message through your website</p>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9; border-radius: 10px; margin-bottom: 30px;">
          <h3 style="color: #2d6389; margin-top: 0;">Contact Details:</h3>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #348992;">
            <p style="margin: 5px 0; color: #333;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #348992;">${email}</a></p>
            ${phone ? `<p style="margin: 5px 0; color: #333;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #348992;">${phone}</a></p>` : ''}
            <p style="margin: 5px 0; color: #333;"><strong>Subject:</strong> ${subject}</p>
          </div>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9; border-radius: 10px; margin-bottom: 30px;">
          <h3 style="color: #2d6389; margin-top: 0;">Message:</h3>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #d73c77;">
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="mailto:${email}?subject=Re: ${subject}" 
             style="display: inline-block; background: linear-gradient(135deg, #2d6389 0%, #348992 100%); 
                    color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; 
                    font-weight: bold; font-size: 16px;">
            ↩️ Reply to ${name}
          </a>
        </div>
        
        <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
          <p>This message was sent through the contact form on your KIMAG website.</p>
          <p>Submitted on: ${new Date().toLocaleString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</p>
        </div>
      </div>
    `
  });
}

export async function sendContactConfirmationEmail({ 
  name, 
  email, 
  subject 
}: { 
  name: string; 
  email: string; 
  subject: string; 
}) {
  await transporter.sendMail({
    from: `KIMAG Team <${process.env.MAIL_USER}>`,
    to: email,
    subject: `Thank you for contacting KIMAG - We received your message`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2d6389; margin: 0;">KIMAG</h1>
          <p style="color: #666; margin: 5px 0;">Creative Agency</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #2d6389 0%, #348992 100%); padding: 30px; border-radius: 15px; color: white; text-align: center; margin-bottom: 30px;">
          <h2 style="margin: 0 0 10px 0;">✅ Message Received!</h2>
          <p style="margin: 0; opacity: 0.9;">Thank you for reaching out to us</p>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9; border-radius: 10px; margin-bottom: 30px;">
          <h3 style="color: #2d6389; margin-top: 0;">Hi ${name},</h3>
          <p style="color: #333; line-height: 1.6;">
            Thank you for contacting KIMAG! We've successfully received your message regarding "<strong>${subject}</strong>" and our team will review it shortly.
          </p>
          <p style="color: #333; line-height: 1.6;">
            We typically respond to all inquiries within 24 hours during business days. If your message is urgent, please don't hesitate to call us directly at <strong>+91 7032939360</strong>.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #348992; margin: 20px 0;">
            <h4 style="margin: 0 0 15px 0; color: #2d6389;">What happens next?</h4>
            <ul style="color: #333; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Our team will review your message and requirements</li>
              <li>We'll prepare relevant information and solutions for your needs</li>
              <li>A team member will reach out to you with next steps</li>
              <li>We'll schedule a call or meeting if needed to discuss your project</li>
            </ul>
          </div>
          
          <p style="color: #333; line-height: 1.6;">
            In the meantime, feel free to explore our portfolio and case studies on our website to see how we've helped other businesses achieve their communication goals.
          </p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.BASE_URL || 'https://konnectionsimag.com'}" 
             style="display: inline-block; background: linear-gradient(135deg, #2d6389 0%, #348992 100%); 
                    color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; 
                    font-weight: bold; font-size: 16px;">
            🌐 Visit Our Website
          </a>
        </div>
        
        <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
          <p>This is an automated confirmation email. Please do not reply to this email.</p>
          <p>If you have additional questions, please contact us at <a href="mailto:info@konnections.co.in" style="color: #348992;">info@konnections.co.in</a></p>
          <p style="margin-top: 20px;">
            Best regards,<br>
            <strong style="color: #2d6389;">The KIMAG Team</strong>
          </p>
        </div>
      </div>
    `
  });
}