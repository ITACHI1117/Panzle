import React from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CurvedUnderline from "./CurvedUnderLine";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      title: "Best Software developer in market!",
      quote:
        "They turned our vision into a working AI product in just 8 weeks. Fast, focused, and incredibly smart.",
      author: "Amina D.",
      role: "CEO at SmartHire",
      avatar: "/images/Amina.webp",
      initials: "AD",
    },
    {
      rating: 5,
      title: "Best Software developer in market!",
      quote:
        "They turned our vision into a working AI product in just 8 weeks. Fast, focused, and incredibly smart.",
      author: "Amina D.",
      role: "CEO at SmartHire",
      avatar: "/images/Amina.webp",
      initials: "AD",
    },
    {
      rating: 5,
      title: "Best Software developer in market!",
      quote:
        "They turned our vision into a working AI product in just 8 weeks. Fast, focused, and incredibly smart.",
      author: "Amina D.",
      role: "CEO at SmartHire",
      avatar: "/images/Amina.webp",
      initials: "AD",
    },
    {
      rating: 5,
      title: "Best Software developer in market!",
      quote:
        "They turned our vision into a working AI product in just 8 weeks. Fast, focused, and incredibly smart.",
      author: "Amina D.",
      role: "CEO at SmartHire",
      avatar: "/images/Amina.webp",
      initials: "AD",
    },
    {
      rating: 5,
      title: "Best Software developer in market!",
      quote:
        "They turned our vision into a working AI product in just 8 weeks. Fast, focused, and incredibly smart.",
      author: "Amina D.",
      role: "CEO at SmartHire",
      avatar: "/images/Amina.webp",
      initials: "AD",
    },
    {
      rating: 5,
      title: "Best Software developer in market!",
      quote:
        "They turned our vision into a working AI product in just 8 weeks. Fast, focused, and incredibly smart.",
      author: "Amina D.",
      role: "CEO at SmartHire",
      avatar: "/images/Amina.webp",
      initials: "AD",
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
                  <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white text-xs">
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
