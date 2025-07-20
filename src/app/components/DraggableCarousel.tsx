'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  link?: string;
}

interface DraggableCarouselProps {
  services: Service[];
  gradientColors?: string;
}

const DraggableCarousel: React.FC<DraggableCarouselProps> = ({ 
  services, 
  gradientColors = "from-[#2d6389]/40 via-[#348992]/30 to-[#d73c77]/40" 
}) => {
  const constraintsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const x = useMotionValue(0);
  const controls = useAnimation();
  
  // Calculate appropriate dimensions for infinite scroll
  const cardWidth = 340; // 320px width + 20px gap
  const duplicateServices = [...services, ...services, ...services]; // Triple for smoother infinite effect
  const singleSetWidth = services.length * cardWidth;
  
  // Optimized drag constraints for infinite scroll
  const dragConstraints = { left: -singleSetWidth * 1.5, right: cardWidth };

  // Enhanced auto-scroll with infinite loop
  useEffect(() => {
    if (!isDragging && !isHovering) {
      const startInfiniteScroll = async () => {
        // Start from the middle set to allow backward dragging
        x.set(-singleSetWidth);
        
        const scrollSpeed = 30; // pixels per second - much faster
        const duration = singleSetWidth / scrollSpeed;
        
        while (!isDragging && !isHovering) {
          await controls.start({
            x: -singleSetWidth * 2,
            transition: {
              duration: duration,
              ease: "linear"
            }
          });
          
          // Reset position instantly for seamless loop
          x.set(-singleSetWidth);
        }
      };
      
      startInfiniteScroll();
    } else {
      controls.stop();
    }
  }, [isDragging, isHovering, controls, x, singleSetWidth]);

  // Handle drag end to maintain infinite scroll position
  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = x.get();
    
    // Reset position if user dragged too far in either direction
    if (currentX > 0) {
      x.set(-singleSetWidth + currentX);
    } else if (currentX < -singleSetWidth * 2) {
      x.set(-singleSetWidth + (currentX + singleSetWidth * 2));
    }
  };

  return (
    <motion.div 
      className="relative overflow-hidden rounded-3xl select-none"
      ref={constraintsRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Draggable carousel container */}
      <motion.div 
        className="flex gap-5 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.05}
        dragMomentum={false}
        whileDrag={{ cursor: "grabbing" }}
        animate={controls}
        style={{ x }}
        onDragStart={() => {
          setIsDragging(true);
          controls.stop();
        }}
        onDragEnd={handleDragEnd}
        onPointerDown={(e) => {
          e.preventDefault();
        }}
      >
        {/* Triple set of services for smooth infinite scroll */}
        {duplicateServices.map((service, index) => (
          <motion.div
            key={`service-${index}-${service.title}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: (index % services.length) * 0.1 }}
            viewport={{ once: true }}
            className="group flex-shrink-0 w-80"
            whileHover={{ y: -8 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 h-full border border-gray-100 group-hover:border-[#348992]/30">
              {/* Service Image with Enhanced Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${gradientColors} transition-all duration-700 group-hover:scale-105`}
                  style={{
                    backgroundImage: `url('${service.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4">
                  <motion.div 
                    className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#348992] shadow-lg border border-white/30"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                
                {/* Service Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[#348992] font-medium text-sm group-hover:text-[#2d6389] transition-colors duration-300">
                    Learn more
                  </span>
                  
                  <div className="w-8 h-8 bg-gray-100 group-hover:bg-[#348992] rounded-lg flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 lg:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 lg:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

    </motion.div>
  );
};

export default DraggableCarousel;
