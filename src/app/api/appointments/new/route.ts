// app/api/appointments/new/route.ts

import { connectDB } from '@/lib/db';
import { Appointment } from '@/models/appointment';
import { sendApprovalEmail } from '@/lib/mail';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await connectDB();
  const { name, email, startTime, endTime, approver } = await req.json();

  // Check for conflicts for this approver
  const conflict = await Appointment.findOne({
    approver,
    status: 'approved',
    startTime: { $lt: new Date(endTime) },
    endTime: { $gt: new Date(startTime) },
  });

  if (conflict) {
    return NextResponse.json({ message: 'Time slot already booked for this approver.' }, { status: 400 });
  }

  const appointment = await Appointment.create({ name, email, startTime, endTime, approver });
  await sendApprovalEmail({ id: appointment._id.toString(), approver });

  return NextResponse.json({ message: 'Request sent to approver.' });
}
