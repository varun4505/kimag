import { connectDB } from '@/lib/db';
import { Appointment } from '@/models/appointment';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  await connectDB();
  const id = req.nextUrl.searchParams.get('id');
  const action = req.nextUrl.searchParams.get('action');
  const who = req.nextUrl.searchParams.get('who');

  if (!id || !action || !who) return new NextResponse('Missing params', { status: 400 });

  const appointment = await Appointment.findById(id);
  if (!appointment) return new NextResponse('Appointment not found', { status: 404 });

  if (appointment.status !== 'pending') {
    return new NextResponse(`<h2>Appointment already ${appointment.status}</h2>`, { headers: { 'Content-Type': 'text/html' } });
  }

  if (appointment.approver !== who) {
    return new NextResponse('<h2>You are not authorized to act on this request.</h2>', { headers: { 'Content-Type': 'text/html' } });
  }

  if (action === 'approve') {
    const conflict = await Appointment.findOne({
      _id: { $ne: id },
      status: 'approved',
      approver: who,
      startTime: { $lt: appointment.endTime },
      endTime: { $gt: appointment.startTime },
    });

    if (conflict) {
      return new NextResponse('<h2>Conflict with another appointment.</h2>', { headers: { 'Content-Type': 'text/html' } });
    }

    appointment.status = 'approved';
  } else if (action === 'reject') {
    appointment.status = 'rejected';
  }

  await appointment.save();
  return new NextResponse(`<h2>Appointment ${appointment.status} by ${who}</h2>`, { headers: { 'Content-Type': 'text/html' } });
}