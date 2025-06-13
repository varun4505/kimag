import { connectDB } from '@/lib/db';
import { Appointment } from '@/models/appointment';
import { CaseStudyAccess } from '@/models/caseStudy';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    // Get appointment stats
    const appointmentStats = await Appointment.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Get case study access request stats
    const caseStudyStats = await CaseStudyAccess.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Format stats
    const formatStats = (stats: Array<{ _id: string; count: number }>) => {
      const result = { pending: 0, approved: 0, rejected: 0 };
      stats.forEach(stat => {
        result[stat._id as keyof typeof result] = stat.count;
      });
      return result;
    };

    return NextResponse.json({
      appointments: formatStats(appointmentStats),
      caseStudies: formatStats(caseStudyStats),
      total: {
        appointments: appointmentStats.reduce((sum, stat) => sum + stat.count, 0),
        caseStudies: caseStudyStats.reduce((sum, stat) => sum + stat.count, 0)
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
