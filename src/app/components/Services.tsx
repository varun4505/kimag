"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Star,
  Zap,
  Target,
  TrendingUp,
  Users,
  Lightbulb
} from "lucide-react";

// Main OurServices Component
export const OurServices = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string[];
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  // Service icons mapping
  const serviceIcons = [
    <Target className="w-8 h-8" key="target" />,
    <TrendingUp className="w-8 h-8" key="trending" />,
    <Users className="w-8 h-8" key="users" />,
    <Lightbulb className="w-8 h-8" key="lightbulb" />,
    <Star className="w-8 h-8" key="star" />,
    <Zap className="w-8 h-8" key="zap" />
  ];

  return (
    <section className={cn("py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden", className)}>
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
            <span className="text-sm font-medium text-[#348992]">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to elevate your brand and drive meaningful results
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="w-32 h-1 bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] mx-auto rounded-full mt-6"
          />
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {items.map((item, idx) => (
            <motion.a
              href={item.link}
              key={item.link}
              className="relative group block h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#2d6389]/20 via-[#348992]/20 to-[#d73c77]/20 block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <CardImage icon={serviceIcons[idx % serviceIcons.length]} />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  <ul className="list-none space-y-2">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#348992] to-[#d73c77] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardDescription>
                <CardCTA />
              </Card>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Enhanced Card Wrapper
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl h-full w-full p-2 overflow-hidden bg-white/80 backdrop-blur-xl border border-white/20 group-hover:border-[#348992]/30 relative z-20 shadow-lg group-hover:shadow-2xl transition-all duration-500",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-6 h-full flex flex-col">{children}</div>
      </div>
    </div>
  );
};

// Enhanced Card Image with Icon
export const CardImage = ({
  className,
  icon,
}: {
  className?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full h-48 bg-gradient-to-br from-[#2d6389]/10 via-[#348992]/10 to-[#d73c77]/10 rounded-2xl mb-6 flex items-center justify-center border border-gray-100/50 relative overflow-hidden group-hover:border-[#348992]/20 transition-all duration-300",
        className
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(52,137,146,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(215,60,119,0.1),transparent_50%)]"></div>
      
      {/* Icon container */}
      <motion.div 
        className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#348992] to-[#2d6389] rounded-2xl flex items-center justify-center text-white shadow-lg"
        whileHover={{ 
          scale: 1.1, 
          rotate: [0, -10, 10, 0],
          boxShadow: "0 20px 40px rgba(52, 137, 146, 0.3)"
        }}
        transition={{ duration: 0.3 }}
      >
        {icon || <Target className="w-8 h-8" />}
      </motion.div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-[#d73c77]/40 to-[#348992]/40 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-[#348992]/40 to-[#2d6389]/40 rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
};
// Enhanced Card Title
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-[#2d6389] font-bold tracking-wide text-xl mb-4 group-hover:text-[#348992] transition-colors duration-300",
        className
      )}
    >
      {children}
    </h4>
  );
};

// Enhanced Card Description
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "text-gray-600 tracking-wide leading-relaxed text-sm flex-grow",
        className
      )}
    >
      {children}
    </div>
  );
};

// New Card CTA Component
export const CardCTA = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[#348992] font-medium text-sm group-hover:text-[#2d6389] transition-colors duration-300",
        className
      )}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <span>Learn More</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
    </motion.div>
  );
};
