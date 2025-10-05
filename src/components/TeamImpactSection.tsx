"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
// import CurvedUnderline from "./CurvedUnderLine";
import Image from "next/image";

export default function TeamImpactSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    {
      number: 40,
      suffix: "+",
      description: "successful projects delivered globally",
    },
    {
      number: 7,
      suffix: "+",
      description: "years building custom tech products",
    },
    {
      number: 5,
      suffix: "",
      description: "Industries deployed wit AI Powered software",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold mb-2">
                Small Team.
              </h2>
              <h2 className="text-4xl sm:text-5xl font-bold relative inline-block">
                Big Impact.
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500"></span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              {
                "  At Panzle, We're a software and AI agency focused on helping startups and businesses harness technology to drive growth. Whether you're building from scratch or enhancing an existing system, we bring technical expertise and a passion for innovation."
              }
            </p>

            {/* Stats */}
            <div ref={ref} className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-5xl sm:text-6xl font-bold text-foreground flex-shrink-0">
                    {inView ? (
                      <>
                        <CountUp
                          start={0}
                          end={stat.number}
                          duration={2.5}
                          separator=","
                        />
                        {stat.suffix}
                      </>
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <div className="flex items-center gap-2 pt-4">
                    <span className="text-orange-500 text-2xl">•</span>
                    <p className="text-muted-foreground text-base sm:text-lg">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Team Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left Image */}
            <div className="aspect-[3/4] border-4 border-red-500 overflow-hidden">
              <Image
                src="/images/team1.webp"
                quality={90}
                width={400}
                height={533}
                alt="team image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right Image */}
            <div className="aspect-[3/4] border-4 border-red-500 overflow-hidden">
              <Image
                src="/images/team2.webp"
                quality={90}
                width={400}
                height={533}
                alt="team image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="aspect-[3/4] border-4 border-red-500 overflow-hidden">
              <Image
                src="/images/team3.webp"
                quality={90}
                width={400}
                height={533}
                alt="team image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="aspect-[3/4] border-4 border-red-500 overflow-hidden">
              <Image
                src="/images/team4.webp"
                quality={90}
                width={400}
                height={533}
                alt="team image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
