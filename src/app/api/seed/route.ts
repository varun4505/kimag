import { connectDB } from '@/lib/db';
import { Appointment } from '@/models/appointment';
import { CaseStudyAccess } from '@/models/caseStudy';
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

    // Sample case study access requests
    const sampleAccessRequests = [
      {
        name: 'Sarah Johnson',
        email: 'sarah@techcorp.com',
        company: 'TechCorp Inc.',
        phone: '+1 (555) 123-4567',
        reason: 'Looking for inspiration for our upcoming e-commerce platform redesign. Particularly interested in conversion optimization strategies.',
        sector: 'technology',
        status: 'pending'
      },
      {
        name: 'Mike Chen',
        email: 'mike@startup.com',
        company: 'InnovateNow',
        reason: 'Need examples of successful branding campaigns for tech startups. Planning our brand launch and want to learn from your successes.',
        sector: 'technology',
        status: 'approved'
      },
      {
        name: 'Lisa Rodriguez',
        email: 'lisa@realestate.com',
        company: 'Premier Properties',
        phone: '+1 (555) 987-6543',
        reason: 'Research for client presentations. Need case studies showing ROI improvements through strategic design changes in real estate marketing.',
        sector: 'real-estate',
        status: 'pending'
      },
      {
        name: 'David Wilson',
        email: 'david@grandhotel.com',
        company: 'Grand Hotel Chain',
        reason: 'Looking for hospitality industry case studies to improve our brand positioning and customer experience strategies.',
        sector: 'hospitality',
        status: 'pending'
      }
    ];

    // Clear existing data (for demo purposes)
    await Appointment.deleteMany({});
    await CaseStudyAccess.deleteMany({});

    // Insert sample data
    await Appointment.insertMany(sampleAppointments);
    await CaseStudyAccess.insertMany(sampleAccessRequests);

    return NextResponse.json({ message: 'Sample data seeded successfully' });
  } catch (error) {
    console.error('Error seeding data:', error);
    return NextResponse.json({ error: 'Failed to seed data' }, { status: 500 });
  }
}
