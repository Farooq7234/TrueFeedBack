"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TextAnimate } from "./magicui/text-animate";


export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden px-4">
      {/* Heading Section */}
      <div className="mb-10 text-center max-w-2xl">
        <TextAnimate className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          What People Say About TrueFeedback
        </TextAnimate>
        <TextAnimate className="text-gray-600 dark:text-gray-300">
          Real, honest, and anonymous feedback from users who experienced the platform.
        </TextAnimate>
      </div>

      {/* Infinite Scrolling Testimonials */}
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "TrueFeedback gave me the courage to speak my mind at work. Anonymity made all the difference.",
    name: "Anonymous",
    title: "Employee, Tech Startup",
  },
  {
    quote:
      "Simple, effective, and powerful. Our team communication improved after using TrueFeedback.",
    name: "Anonymous",
    title: "Team Lead",
  },
  {
    quote:
      "I never thought giving feedback could be this easy. No fear, just honesty.",
    name: "Anonymous",
    title: "College Student",
  },
  {
    quote:
      "We implemented TrueFeedback during our event and got insights we’d have never received otherwise.",
    name: "Anonymous",
    title: "Event Organizer",
  },
  {
    quote:
      "The experience was smooth. Felt safe and heard without revealing my identity.",
    name: "Anonymous",
    title: "User",
  },
];
