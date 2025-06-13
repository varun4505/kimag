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

export async function sendCaseStudyAccessEmail({ 
  email, 
  name, 
  caseStudyLink,
  sector
}: { 
  email: string; 
  name: string; 
  caseStudyLink: string;
  sector?: string;
}) {
  const getSectorDisplayName = (sector: string) => {
    const sectorNames = {
      'hospitality': 'Hospitality & Tourism',
      'real-estate': 'Real Estate & Property',
      'healthcare': 'Healthcare & Medical',
      'technology': 'Technology & Software',
      'retail': 'Retail & E-commerce',
      'finance': 'Finance & Banking',
      'education': 'Education & Training',
      'other': 'General'
    };
    return sectorNames[sector as keyof typeof sectorNames] || 'General';
  };

  const sectorDisplayName = sector ? getSectorDisplayName(sector) : 'General';

  await transporter.sendMail({
    from: `KIMAG Team <${process.env.MAIL_USER}>`,
    to: email,
    subject: `${sectorDisplayName} Case Studies - Access Approved`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2d6389; margin: 0;">KIMAG</h1>
          <p style="color: #666; margin: 5px 0;">Creative Agency</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #2d6389 0%, #348992 100%); padding: 30px; border-radius: 15px; color: white; text-align: center; margin-bottom: 30px;">
          <h2 style="margin: 0 0 10px 0;">🎉 Access Granted!</h2>
          <p style="margin: 0; opacity: 0.9;">Your ${sectorDisplayName} case study access request has been approved</p>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9; border-radius: 10px; margin-bottom: 30px;">
          <h3 style="color: #2d6389; margin-top: 0;">Hi ${name},</h3>
          <p style="color: #333; line-height: 1.6;">
            Great news! We've reviewed your request and are excited to share our exclusive <strong>${sectorDisplayName}</strong> case studies with you. 
            These detailed insights showcase our most successful projects and the strategies that drove exceptional results for our clients in your industry.
          </p>
          <p style="color: #333; line-height: 1.6;">
            You now have access to:
          </p>
          <ul style="color: #333; line-height: 1.6;">
            <li>Industry-specific project breakdowns and strategies</li>
            <li>Before/after comparisons with real metrics from ${sectorDisplayName.toLowerCase()} clients</li>
            <li>Behind-the-scenes creative processes tailored to your sector</li>
            <li>ROI data and performance insights relevant to your industry</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${caseStudyLink}" 
             style="display: inline-block; background: linear-gradient(135deg, #2d6389 0%, #348992 100%); 
                    color: white; text-decoration: none; padding: 15px 30px; border-radius: 8px; 
                    font-weight: bold; font-size: 16px;">
            🔓 Access ${sectorDisplayName} Case Studies
          </a>
        </div>
        
        <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
          <p>This link is exclusive to you and contains ${sectorDisplayName.toLowerCase()}-specific content. Please don't share it with others.</p>
          <p>Need help or looking for case studies from other sectors? Reply to this email and we'll be happy to assist.</p>
          <p style="margin-top: 20px;">
            Best regards,<br>
            <strong style="color: #2d6389;">The KIMAG Team</strong>
          </p>
        </div>
      </div>
    `
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