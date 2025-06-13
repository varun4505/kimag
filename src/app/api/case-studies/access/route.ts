import { connectDB } from '@/lib/db';
import { CaseStudyAccess } from '@/models/caseStudy';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const accessRequestData = await req.json();

    const accessRequest = await CaseStudyAccess.create(accessRequestData);
    return NextResponse.json({ message: 'Access request submitted successfully', accessRequest });
  } catch (error) {
    console.error('Error creating access request:', error);
    return NextResponse.json({ error: 'Failed to submit access request' }, { status: 500 });
  }
}
