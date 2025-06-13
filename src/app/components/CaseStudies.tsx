// app/CaseStudies.tsx
import React from "react";

export default function CaseStudies() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#348992]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d73c77]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d6389] mb-4">
            <span className="bg-gradient-to-r from-[#d73c77] to-[#348992] bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-xl text-[#348992] max-w-2xl mx-auto leading-relaxed">
            Discover how our innovative solutions are transforming businesses across industries
          </p>
        </div>

        {/* Main content card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Hero section */}
            <div className="bg-gradient-to-r from-[#348992] to-[#d73c77] p-8 md:p-12 text-white text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Exclusive Industry Insights
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Access comprehensive case studies with real-world implementations, detailed analysis, 
                and measurable outcomes across multiple industries
              </p>
            </div>

            {/* Content body */}
            <div className="p-8 md:p-12">
              {/* Industry tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {[
                  'Hospitality', 'Healthcare', 'Technology', 'Finance', 
                  'Retail', 'Education', 'Real Estate', 'Manufacturing'
                ].map((industry) => (
                  <span 
                    key={industry}
                    className="px-4 py-2 bg-gradient-to-r from-[#348992]/10 to-[#d73c77]/10 text-[#2d6389] rounded-full text-sm font-medium border border-[#348992]/20 hover:shadow-md transition-all duration-300"
                  >
                    {industry}
                  </span>
                ))}
              </div>

              {/* Features grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#348992] to-[#2d6389] rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#2d6389] mb-3">Data-Driven Results</h4>
                  <p className="text-[#348992] leading-relaxed">Comprehensive analytics, performance metrics, and ROI measurements</p>
                </div>

                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#d73c77] to-[#348992] rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#2d6389] mb-3">Industry-Specific</h4>
                  <p className="text-[#348992] leading-relaxed">Tailored solutions and strategies designed for your specific sector</p>
                </div>

                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#348992] to-[#d73c77] rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#2d6389] mb-3">Implementation Guides</h4>
                  <p className="text-[#348992] leading-relaxed">Step-by-step strategic roadmaps and best practices</p>
                </div>
              </div>

              {/* Privacy notice */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-[#348992]/10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-[#348992] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#2d6389] mb-2">Confidential & Exclusive Access</h5>
                    <p className="text-[#348992] text-sm leading-relaxed">
                      Access requires approval to ensure client confidentiality and provide you with the most relevant, 
                      up-to-date case studies for your industry and business needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA section */}
              <div className="text-center">
                <a
                  href="/case-studies"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#348992] to-[#d73c77] text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>Request Access to Case Studies</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-[#348992]">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Quick approval</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sector-specific content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Confidential access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
