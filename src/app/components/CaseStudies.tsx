// app/CaseStudies.tsx
import React from "react";
import { CardData, CaseStudiesCard } from "./CaseStudiesCard";

const items: CardData[] = [
  {
    image: "/jordans.webp",
    title: "Air Jordan 4 Retro Reimagined",
    industry: "Footwear",
    link: "https://example.com/jordans",
  },
  {
    image: "/macbook.jpg",
    title: "MacBook Pro M3",
    industry: "Consumer Electronics",
    link: "https://example.com/macbook",
  },
  // Add more items here
];

export default function CaseStudies() {
  return (
    <section className="w-full py-12 px-4 sm:px-8 lg:px-16 bg-white text-[#2d6389]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#d73c77]">
          Case Studies
        </h2>
        <p className="text-[#348992] mt-2 text-base">
          Explore how our solutions are transforming industries.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, idx) => (
          <CaseStudiesCard key={idx} data={item} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/case-studies"
          className="inline-block px-6 py-3 bg-[#348992] text-white text-sm font-semibold rounded-full hover:bg-[#2d6389] transition"
        >
          See more case studies
        </a>
      </div>
    </section>
  );
}
