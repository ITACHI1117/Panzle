import React from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CurvedUnderline from "./CurvedUnderLine";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      title: "Great experience working with Panzle.",
      quote:
        "They were thorough with their detailed answers to my questions and were very friendly. Extremely knowledgeable with AI, RAG applications, and ML.",
      author: "James T",
      role: "AI Research Lead",
      avatar: "/images/James.webp",
      initials: "JT",
    },
    {
      rating: 5,
      title: "Panzle was great to work with",
      quote:
        "Fully engaged, enthusiastic, and brought fresh ideas to the project. Their broad skillset is a strong asset that should attract many employers.",
      author: "Michael O",
      role: "Product Manager",
      avatar: "/images/Michael.webp",
      initials: "MO",
    },
    {
      rating: 5,
      title: "Panzle demonstrated high-level expertise.",
      quote:
        "They swiftly improved the performance of our recommendation system. Thank you.",
      author: "Grace N",
      role: "Data Scientist",
      avatar: "/images/Grace.webp",
      initials: "GN",
    },
    {
      rating: 5,
      title:
        "Panzle is highly knowledgeable about the challenges AI projects face when it comes to data preparation.",
      quote:
        "Their insight into preprocessing data for AI readiness was extremely valuable, and their feedback helped us understand what is required to address these challenges",
      author: "David K",
      role: "CTO",
      avatar: "/images/David.webp",
      initials: "DK",
    },
    {
      rating: 5,
      title: "Panzle clearly knows their craft",
      quote:
        "After discussing my project, I gained a much better understanding and look forward to working with them going forward.",
      author: "Sophia L",
      role: "Founder",
      avatar: "/images/Sophia.webp",
      initials: "SL",
    },
    {
      rating: 5,
      title:
        "Panzle delivered excellent results on the ARIMA time-series model",
      quote: "A highly professional team I definitely recommend. Thank you.",
      author: "Emmanuel B",
      role: "Lead Analyst",
      avatar: "/images/Emmanuel.webp",
      initials: "EB",
    },
    {
      rating: 5,
      title:
        "Our conversational AI solution exceeded expectations thanks to Panzle",
      quote:
        "Our AI Solution was delivered on short notice, yet the quality exceeded expectations. I will continue to trust Panzle’s expertise in machine learning. Thank you.",
      author: "Linda M",
      role: "Operations Director",
      avatar: "/images/Linda.webp",
      initials: "LM",
    },
  ];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold relative inline-block">
            What Our Clients Are Saying
            <CurvedUnderline />
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-border p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-3 text-foreground font-plus">
                {testimonial.title}
              </h3>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-inter">
                {`"${testimonial.quote}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-400 text-white text-xs">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-sm text-foreground font-plus">
                    {testimonial.author}, {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
