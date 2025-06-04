// components/GradientCard.tsx
"use client";
import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";


export type CardData = {
  image: string;
  title: string;
  industry: string;
  link: string;
};

type GradientCardProps = {
  data: CardData;
};

export function CaseStudiesCard({ data }: GradientCardProps) {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white">
      <img
        src={data.image}
        alt={data.title}
        height="400"
        width="400"
        className="object-contain"
      />
      <p className="text-base sm:text-xl text-black mt-4 mb-2">
        {data.title}
      </p>

      <p className="text-sm font-medium text-neutral-700">
        Industry: {data.industry}
      </p>

      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full px-4 py-2 text-white text-xs font-bold bg-black mt-4 inline-block"
      >
        Know more
      </a>
    </BackgroundGradient>
  );
}
