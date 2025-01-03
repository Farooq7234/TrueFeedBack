"use client";

import { ArrowRight, Mail } from "lucide-react"; // Assuming you have an icon for messages
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import SparklesText from "@/components/magicui/sparkles-text";
import messages from "@/messages.json";
import testimonials from "@/testimonials.json";
import { Spotlight } from "@/components/ui/spotlight";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function Home() {
  const faqs = [
    {
      question: "Is my identity truly anonymous when I send feedback?",
      answer:
        "Yes, we prioritize your privacy, so no identifying information is stored or shared when you send feedback.",
    },
    {
      question: "How do I share my feedback link?",
      answer:
        "Simply generate a link on our platform and share it with anyone via email, social media, or messaging apps..",
    },
    {
      question: "Can I respond to the feedback I receive?",
      answer:
        "Currently, feedback is one-way and anonymous, so responses aren’t possible. However, we may add reply options in future updates.",
    },
    {
      question:
        "Is there a limit to the number of feedback entries I can receive?",
      answer:
        "No, there’s no limit! You can receive as much feedback as you like without restrictions..",
    },
    {
      question: "How do I know when new feedback is received?",
      answer:
        "We send real-time notifications (email or app-based, depending on your settings) so you’ll know immediately when feedback is submitted.",
    },
  ];

  return (
    <>
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center  text-white overflow-hidden">
        <section className="px-4 text-center flex flex-col justify-center items-center  min-h-screen w-full">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="gray"
        />
          <SparklesText
            className="text-3xl md:text-5xl"
            text="Dive into the World of Anonymous Feedback"
          />
          <p className="text-base md:text-lg py-5">
            True Feedback - Where your identity remains a secret.
          </p>
          <HoverBorderGradient
            containerClassName="rounded-full my-5"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
          >
            <Link href={"/sign-up"} className="text-lg">
              Register
            </Link>
            <ArrowRight />
          </HoverBorderGradient>

         
          <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full max-w-lg md:max-w-xl"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-left">{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4 ">
                    <Mail className="flex-shrink-0 " />
                    <div>
                      <p>{message.content}</p>
                      <p className="text-xs text-left text-muted-foreground">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        
        </section>

        {/* Carousel for Messages */}
        

        <section className="py-10 bg-black w-full">
          <VelocityScroll
            text="True FeedBack"
            default_velocity={5}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-5xl md:leading-[5rem]"
          />
        </section>

        <section className=" pt-10 bg-black w-full ">
          <div>
            <h2 className="text-center text-3xl md:text-4xl mb-20 font-bold">
              Key Features
            </h2>
            <div className="flex-col gap-10 md:gap-0 flex md:flex-row justify-around items-center">
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  1. Generate a Link
                </span>
              </NeonGradientCard>{" "}
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  2. Share it
                </span>
              </NeonGradientCard>{" "}
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  3. Receive Feedback
                </span>
              </NeonGradientCard>
            </div>
          </div>
        </section>

        <section className=" py-20 bg-black px-5 w-full">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-10 bg-[#000] sm:py-20 px-5 w-full">
          <h2 className="text-center text-3xl md:text-4xl mb-20 font-bold">
            Testimonials
          </h2>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </section>
      </main>

      {/* Footer */}
      <hr />
      <footer className="text-center bg-[#000] p-4 md:p-10 pb-12  text-white">
        © 2024 True Feedback. All rights reserved.
      </footer>
    </>
  );
}
