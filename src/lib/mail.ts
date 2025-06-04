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