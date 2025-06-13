import { connectDB } from '@/lib/db';
import { CaseStudy, CaseStudyAccess } from '@/models/caseStudy';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const token = req.nextUrl.searchParams.get('token');

    if (!token) {
      return NextResponse.json({ error: 'Access token required' }, { status: 401 });
    }

    // Verify JWT token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any;
    } catch (error) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // Check if the access request is still approved
    const accessRequest = await CaseStudyAccess.findById(decoded.accessRequestId);
    if (!accessRequest || accessRequest.status !== 'approved') {
      return NextResponse.json({ error: 'Access revoked or not found' }, { status: 403 });
    }

    // Fetch case studies (for now, we'll create some sample data)
    const sampleCaseStudies = [
      {
        _id: '1',
        title: 'E-commerce Platform Redesign',
        client: 'TechCorp Inc.',
        description: 'Complete redesign of an e-commerce platform that resulted in a 40% increase in conversions and 60% improvement in user engagement. We implemented a mobile-first approach with streamlined checkout process and personalized product recommendations.',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
        tags: ['E-commerce', 'UI/UX', 'Conversion Optimization'],
        projectUrl: 'https://techcorp.com',
        completedDate: new Date('2025-03-15').toISOString(),
        featured: true
      },
      {
        _id: '2',
        title: 'Brand Identity for FinTech Startup',
        client: 'SecureBank',
        description: 'Created a complete brand identity from scratch for a fintech startup, including logo design, color palette, typography, and brand guidelines. The brand successfully launched and raised $2M in Series A funding.',
        imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
        tags: ['Branding', 'Logo Design', 'FinTech'],
        completedDate: new Date('2025-02-28').toISOString(),
        featured: false
      },
      {
        _id: '3',
        title: 'SaaS Dashboard Optimization',
        client: 'DataFlow Solutions',
        description: 'Redesigned a complex SaaS dashboard to improve user experience and reduce churn rate by 25%. Implemented data visualization best practices and intuitive navigation patterns.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
        tags: ['SaaS', 'Dashboard', 'Data Visualization'],
        projectUrl: 'https://dataflow.com',
        completedDate: new Date('2025-01-20').toISOString(),
        featured: true
      },
      {
        _id: '4',
        title: 'Restaurant Chain Mobile App',
        client: 'Flavor Town',
        description: 'Developed a mobile app for a restaurant chain that increased online orders by 150% and improved customer retention through loyalty program integration and seamless ordering experience.',
        imageUrl: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=400',
        tags: ['Mobile App', 'Food & Beverage', 'Loyalty Program'],
        completedDate: new Date('2025-04-10').toISOString(),
        featured: false
      },
      {
        _id: '5',
        title: 'Healthcare Platform UI Overhaul',
        client: 'MedConnect',
        description: 'Redesigned a healthcare management platform to improve accessibility and user experience for both patients and healthcare providers. Achieved 99% accessibility compliance and reduced task completion time by 35%.',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
        tags: ['Healthcare', 'Accessibility', 'Platform Design'],
        projectUrl: 'https://medconnect.com',
        completedDate: new Date('2025-05-05').toISOString(),
        featured: true
      },
      {
        _id: '6',
        title: 'Educational Platform Gamification',
        client: 'LearnSmart',
        description: 'Added gamification elements to an educational platform, resulting in 80% increase in course completion rates and 90% improvement in student engagement metrics.',
        imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
        tags: ['Education', 'Gamification', 'Engagement'],
        completedDate: new Date('2025-03-30').toISOString(),
        featured: false
      }
    ];

    return NextResponse.json(sampleCaseStudies);
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return NextResponse.json({ error: 'Failed to fetch case studies' }, { status: 500 });
  }
}
