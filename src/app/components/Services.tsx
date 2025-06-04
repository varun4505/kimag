"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

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

  return (
    <div className={cn("py-16 mt-5", className)}>
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2d6389] mb-4">Our Services</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77] mx-auto rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 mx- md:mx-10">
        {items.map((item, idx) => (
          <a
            href={item.link}
            key={item.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
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
              <CardImage />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
  <ul className="list-disc list-inside space-y-1">
    {item.description.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
</CardDescription>

            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

// Card Wrapper
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
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-200 group-hover:border-[#2d6389] relative z-20 shadow-sm group-hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// Card Image Placeholder
export const CardImage = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full h-48 bg-gradient-to-br from-[#2d6389]/10 via-[#348992]/10 to-[#d73c77]/10 rounded-lg mb-4 flex items-center justify-center border border-gray-100",
        className
      )}
    >
      <div className="text-gray-400 text-sm font-medium">Image Placeholder</div>
    </div>
  );
};

// Card Title
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
        "text-[#2d6389] font-bold tracking-wide mt-4 text-lg",
        className
      )}
    >
      {children}
    </h4>
  );
};

// Card Description
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-gray-600 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
