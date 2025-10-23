"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";

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
      description: "Industries deployed with AI Powered software",
    },
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Header with animation */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-2">
                Small Team.
              </h2>
              <h2 className="text-4xl sm:text-5xl font-bold relative inline-block">
                Big Impact.
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-400 to-red-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                />
              </h2>
            </motion.div>

            {/* Description with fade in */}
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {` At Panzle, We're a software and AI agency focused on helping
              startups and businesses harness technology to drive growth.
              Whether you're building from scratch or enhancing an existing
              system, we bring technical expertise and a passion for innovation.`}
            </motion.p>

            {/* Stats with enhanced animations */}
            <div ref={ref} className="space-y-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <motion.div
                    className="text-5xl sm:text-6xl font-bold text-foreground flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
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
                  </motion.div>
                  <div className="flex items-center gap-2 pt-4">
                    <motion.span
                      className="text-orange-500 text-2xl"
                      animate={
                        inView
                          ? {
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1,
                        delay: index * 0.2 + 1,
                      }}
                    >
                      •
                    </motion.span>
                    <p className="text-muted-foreground text-base sm:text-lg">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Team Images Grid with stagger animation */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((num, index) => (
              <motion.div
                key={num}
                custom={index}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 },
                }}
                className="aspect-[3/4] p-[4px] bg-gradient-to-r from-[#E7C770] via-[#F47C5B] to-[#FD4D4D] overflow-hidden"
              >
                <div className="bg-white w-full h-full rounded-[calc(theme(borderRadius.xl)-4px)] overflow-hidden">
                  <Image
                    src={`/images/team${num}.webp`}
                    quality={90}
                    width={400}
                    height={533}
                    alt="team image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
