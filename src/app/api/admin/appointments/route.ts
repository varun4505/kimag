import { connectDB } from '@/lib/db';
import { Appointment } from '@/models/appointment';
import { sendAppointmentStatusEmail } from '@/lib/mail';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const appointments = await Appointment.find({})
      .sort({ createdAt: -1 })
      .limit(50); // Limit to recent 50 appointments

    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();
    const { id, status } = await req.json();

    if (!id || !status || !['approved', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!appointment) {
      return NextResponse.json({ error: 'Appointment not found' }, { status: 404 });
    }

    // Send email notification to the user
    try {
      await sendAppointmentStatusEmail({
        email: appointment.email,
        name: appointment.name,
        status: status as 'approved' | 'rejected',
        date: appointment.date,
        time: appointment.time,
        service: appointment.service
      });
    } catch (emailError) {
      console.error('Error sending appointment status email:', emailError);
      // Don't fail the request if email fails, but log it
    }

    return NextResponse.json({ 
      message: `Appointment ${status} successfully and user notified via email`, 
      appointment 
    });
  } catch (error) {
    console.error('Error updating appointment:', error);
    return NextResponse.json({ error: 'Failed to update appointment' }, { status: 500 });
  }
}
