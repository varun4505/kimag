'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { useSearchParams } from 'next/navigation';

interface CaseStudy {
  _id: string;
  title: string;
  client: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  projectUrl?: string;
  completedDate: string;
  featured: boolean;
}

export default function CaseStudyViewerPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      fetchCaseStudies();
    } else {
      setError('Invalid access token');
      setLoading(false);
    }
  }, [token]);

  const fetchCaseStudies = async () => {
    try {
      const response = await fetch(`/api/case-studies/view?token=${token}`);
      if (response.ok) {
        const data = await response.json();
        setCaseStudies(data);
      } else {
        setError('Access denied or token expired');
      }
    } catch (error) {
      console.error('Error fetching case studies:', error);
      setError('Failed to load case studies');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#348992]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <Navbar />
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <a 
            href="/case-studies"
            className="bg-gradient-to-r from-[#2d6389] to-[#348992] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
          >
            Request Access
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      <div className="pt-32 pb-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 px-6"
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-[#2d6389]/10 via-[#348992]/10 to-[#d73c77]/10 backdrop-blur-xl border border-white/30 rounded-full shadow-lg">
            <span className="text-[#2d6389] font-semibold text-sm tracking-wider uppercase">
              Exclusive Access
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-gray-800">
            Our <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">Case Studies</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive insights into our most successful projects, strategies, and results.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="max-w-7xl mx-auto px-6">
          {caseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No case studies available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {study.imageUrl && (
                    <div className="h-48 bg-gradient-to-br from-[#2d6389]/10 to-[#348992]/10 flex items-center justify-center">
                      <img 
                        src={study.imageUrl} 
                        alt={study.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="w-full h-full flex items-center justify-center text-[#348992]">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{study.title}</h3>
                      {study.featured && (
                        <span className="bg-gradient-to-r from-[#d73c77] to-[#2d6389] text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <p className="text-[#348992] font-medium mb-3">Client: {study.client}</p>
                    <p className="text-gray-600 mb-4 line-clamp-3">{study.description}</p>
                    
                    {study.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>
                        {new Date(study.completedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short' 
                        })}
                      </span>
                      {study.projectUrl && (
                        <a 
                          href={study.projectUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#348992] hover:text-[#2d6389] transition-colors"
                        >
                          View Project →
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 px-6"
        >
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Inspired by what you see?</h3>
            <p className="text-gray-600 mb-6">
              Ready to create your own success story? Let's discuss how we can help you achieve similar results for your business.
            </p>
            <a 
              href="/appointment"
              className="inline-block bg-gradient-to-r from-[#2d6389] to-[#348992] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Book a Consultation
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
