"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  Star,
  Target,
  Shield,
  TrendingUp,
  Smartphone,
  Building,
  Settings
} from "lucide-react";

// Main OurServices Component
export const OurServices = ({
  items,
  industries,
  className,
}: {
  items: {
    title: string;
    description: string[];
    link: string;
  }[];
  industries?: {
    title: string;
    sectors: string[];
  }[];
  className?: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Drag functionality
  const constraintsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const x = useMotionValue(0);
  const controls = useAnimation();

  // Service icons mapping
  const serviceIcons = [
    <Target className="w-8 h-8" key="target" />,
    <Shield className="w-8 h-8" key="shield" />,
    <TrendingUp className="w-8 h-8" key="trending" />,
    <Smartphone className="w-8 h-8" key="smartphone" />,
    <Building className="w-8 h-8" key="building" />,
    <Settings className="w-8 h-8" key="settings" />
  ];

  // Service images mapping with relevant online images
  const serviceImages = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center", // Public Relations - Meeting/Communication
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center", // Crisis Management - Business emergency
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",  // Financial Communications - Finance/charts
    "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop&crop=center", // Digital Media - Social media strategy/content creation
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&crop=center", // Corporate Communications - Office/business
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center"  // Specialized Services - Consulting/strategy
  ];

  // Convert items to services format for consistency
  const services = items.map((item, index) => ({
    title: item.title,
    description: item.description[0], // Use first description as main tagline
    image: serviceImages[index % serviceImages.length],
    icon: serviceIcons[index % serviceIcons.length],
    link: item.link,
    features: item.description.slice(0, 3) // Show only top 3 features
  }));
  
  // Calculate appropriate drag constraints based on content width
  const cardWidth = 336; // 320px + 16px gap
  const totalWidth = services.length * cardWidth;
  const dragConstraints = { left: -totalWidth, right: 0 };

  // Navigation functions
  const scrollLeft = () => {
    controls.start({
      x: Math.min(x.get() + cardWidth * 1, 0),
      transition: { duration: 0.5, ease: "easeOut" }
    });
  };

  const scrollRight = () => {
    controls.start({
      x: Math.max(x.get() - cardWidth * 1, -totalWidth),
      transition: { duration: 0.5, ease: "easeOut" }
    });
  };

  // Auto-scroll effect with infinite loop
  useEffect(() => {
    if (!isDragging && !isHovering) {
      const autoScroll = async () => {
        // Start from 0 and animate to negative totalWidth
        await controls.start({
          x: -totalWidth,
          transition: {
            duration: services.length * 6, // Adjust speed as needed
            ease: "linear"
          }
        });
        
        // Reset position instantly to create seamless loop
        controls.set({ x: 0 });
        
        // Recursively call autoScroll to continue the loop
        autoScroll();
      };
      autoScroll();
    } else {
      controls.stop();
    }
  }, [isDragging, isHovering, controls, totalWidth, services.length]);

  return (
    <section className={cn("py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden", className)} id="ourservies">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#348992]/10 to-[#d73c77]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#d73c77]/8 to-[#348992]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/3 to-pink-400/3 rounded-full blur-2xl"></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Enhanced Section Heading */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#348992]/10 to-[#d73c77]/10 rounded-full mb-6 border border-[#348992]/20">
            <Sparkles className="w-4 h-4 text-[#348992]" />
            <span className="text-sm font-medium text-[#348992]">OUR EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive communication solutions for your business
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="w-24 h-1.5 bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] mx-auto rounded-full mt-6"
          />
        </motion.div>
        {/* Enhanced Services Carousel - Draggable & Smooth */}
        <motion.div 
          variants={itemVariants}
          className="relative overflow-hidden rounded-3xl select-none"
          ref={constraintsRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-4 z-20 flex items-center">
            <motion.button
              onClick={scrollLeft}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center text-[#348992] hover:bg-white hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </motion.button>
          </div>
          
          <div className="absolute inset-y-0 right-4 z-20 flex items-center">
            <motion.button
              onClick={scrollRight}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 flex items-center justify-center text-[#348992] hover:bg-white hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </motion.button>
          </div>
          {/* Draggable carousel container */}
          <motion.div 
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            dragMomentum={true}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            whileDrag={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragStart={() => {
              setIsDragging(true);
              setHasDragged(false);
              controls.stop();
            }}
            onDrag={() => {
              setHasDragged(true);
            }}
            onDragEnd={() => {
              setIsDragging(false);
              // Reset hasDragged after a small delay to allow click prevention
              setTimeout(() => setHasDragged(false), 100);
            }}
            onPointerDown={(e) => {
              // Ensure dragging works even when starting on images
              e.preventDefault();
            }}
          >
            {/* First set of services */}
            {services.map((service, index) => (
              <motion.div
                key={`first-${service.title}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group cursor-pointer flex-shrink-0 w-80"
                whileHover={{ y: -8 }}
              >
                <Link 
                  href={service.link}
                  onClick={(e) => {
                    if (hasDragged) {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 h-full border border-gray-100 group-hover:border-[#348992]/30">
                    {/* Service Image with Enhanced Overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-[#2d6389]/40 via-[#348992]/30 to-[#d73c77]/40 transition-all duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      
                      {/* Floating Icon */}
                      <div className="absolute top-4 right-4">
                        <motion.div 
                          className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#348992] shadow-xl"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        >
                          {service.icon}
                        </motion.div>
                      </div>
                      
                      {/* Main Title - Smaller */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Professional Footer with CTA */}
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[#348992] font-medium text-sm group-hover:text-[#2d6389] transition-colors duration-300">
                          Learn more
                        </span>
                        
                        <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#348992] rounded-lg flex items-center justify-center transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            
            {/* Second set for seamless loop */}
            {services.map((service) => (
              <motion.div
                key={`second-${service.title}`}
                className="group cursor-pointer flex-shrink-0 w-80"
                whileHover={{ y: -8 }}
              >
                <Link 
                  href={service.link}
                  onClick={(e) => {
                    if (hasDragged) {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 h-full border border-gray-100 group-hover:border-[#348992]/30">
                    {/* Service Image with Enhanced Overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-[#2d6389]/40 via-[#348992]/30 to-[#d73c77]/40 transition-all duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      
                      {/* Floating Icon */}
                      <div className="absolute top-4 right-4">
                        <motion.div 
                          className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#348992] shadow-xl"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        >
                          {service.icon}
                        </motion.div>
                      </div>
                      
                      {/* Main Title - Smaller */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {service.title}
                        </h3>
                        </div>
                    </div>
                    
                    {/* Professional Footer with CTA */}
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[#348992] font-medium text-sm group-hover:text-[#2d6389] transition-colors duration-300">
                          Learn more
                        </span>
                        
                        <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#348992] rounded-lg flex items-center justify-center transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for fade effect - smaller on mobile, larger on desktop */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 lg:w-20 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 lg:w-20 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10"></div>
          

        </motion.div>

        {/* Industry Verticals Section */}
        {industries && industries.length > 0 && (
          <motion.div 
            variants={itemVariants}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d73c77]/15 to-[#348992]/15 rounded-full mb-6 border border-[#d73c77]/30">
                <Star className="w-4 h-4 text-[#d73c77]" />
                <span className="text-sm font-bold text-[#d73c77]">INDUSTRIES</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-[#d73c77] via-[#348992] to-[#2d6389] bg-clip-text text-transparent">
                  We Serve
                </span>
              </h3>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="w-20 h-1 bg-gradient-to-r from-[#d73c77] via-[#348992] to-[#2d6389] mx-auto rounded-full mt-4"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, idx) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 group hover:border-[#348992]/30"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d73c77] to-[#348992] rounded-xl flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg transition-all duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-[#2d6389] group-hover:text-[#348992] transition-colors duration-300">
                      {industry.title}
                    </h4>
                  </div>
                  
                  {/* Show only top 4-5 sectors to reduce clutter */}
                  <div className="space-y-3">
                    {industry.sectors.slice(0, 5).map((sector, sectorIdx) => (
                      <div 
                        key={sectorIdx}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-[#348992]/5 hover:to-[#d73c77]/5 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-[#348992] to-[#d73c77] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm font-medium">{sector}</span>
                      </div>
                    ))}
                    {industry.sectors.length > 5 && (
                      <div className="pt-2 border-t border-gray-100">
                        <span className="text-xs text-[#348992] font-semibold">
                          +{industry.sectors.length - 5} more sectors
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default OurServices;