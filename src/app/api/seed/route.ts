import { connectDB } from '@/lib/db';
import { Appointment } from '@/models/appointment';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    await connectDB();

    // Sample appointments
    const sampleAppointments = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        startTime: new Date('2025-06-15T10:00:00'),
        endTime: new Date('2025-06-15T10:30:00'),
        status: 'pending',
        approver: 'kim@kimag.com'
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        startTime: new Date('2025-06-16T14:00:00'),
        endTime: new Date('2025-06-16T14:30:00'),
        status: 'approved',
        approver: 'kim@kimag.com'
      }
    ];
    // Clear existing data (for demo purposes)
    await Appointment.deleteMany({});

    // Insert sample data
    await Appointment.insertMany(sampleAppointments);
    return NextResponse.json({ message: 'Sample data seeded successfully' });
  } catch (error) {
    console.error('Error seeding data:', error);
    return NextResponse.json({ error: 'Failed to seed data' }, { status: 500 });
  }
}
