import { connectDB } from '@/lib/db';
import { CaseStudyAccess } from '@/models/caseStudy';
import { sendCaseStudyAccessEmail } from '@/lib/mail';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const accessRequests = await CaseStudyAccess.find({})
      .sort({ createdAt: -1 })
      .limit(50); // Limit to recent 50 access requests

    return NextResponse.json(accessRequests);
  } catch (error) {
    console.error('Error fetching access requests:', error);
    return NextResponse.json({ error: 'Failed to fetch access requests' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();
    const { id, status } = await req.json();

    if (!id || !status || !['approved', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    const accessRequest = await CaseStudyAccess.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!accessRequest) {
      return NextResponse.json({ error: 'Access request not found' }, { status: 404 });
    }

    // Send email if approved
    if (status === 'approved') {
      try {
        // Get sector-specific Google Drive link
        const getSectorLink = (sector: string) => {
          const sectorLinks = {
            'hospitality': process.env.CASE_STUDY_HOSPITALITY_LINK,
            'real-estate': process.env.CASE_STUDY_REAL_ESTATE_LINK,
            'healthcare': process.env.CASE_STUDY_HEALTHCARE_LINK,
            'technology': process.env.CASE_STUDY_TECHNOLOGY_LINK,
            'retail': process.env.CASE_STUDY_RETAIL_LINK,
            'finance': process.env.CASE_STUDY_FINANCE_LINK,
            'education': process.env.CASE_STUDY_EDUCATION_LINK,
            'other': process.env.CASE_STUDY_OTHER_LINK
          };
          
          return sectorLinks[sector as keyof typeof sectorLinks] || process.env.CASE_STUDY_OTHER_LINK || 'https://drive.google.com/drive/folders/default-folder';
        };

        const caseStudyLink = getSectorLink(accessRequest.sector);
        
        await sendCaseStudyAccessEmail({
          email: accessRequest.email,
          name: accessRequest.name,
          caseStudyLink,
          sector: accessRequest.sector
        });

        console.log(`Case study access email sent to ${accessRequest.email} for ${accessRequest.sector} sector`);
      } catch (emailError) {
        console.error('Error sending case study access email:', emailError);
        // Don't fail the request if email fails, just log it
      }
    }

    return NextResponse.json({ 
      message: `Access request ${status} successfully${status === 'approved' ? ' and email sent' : ''}`, 
      accessRequest 
    });
  } catch (error) {
    console.error('Error updating access request:', error);
    return NextResponse.json({ error: 'Failed to update access request' }, { status: 500 });
  }
}
