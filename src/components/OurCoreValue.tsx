"use client";
import React from "react";
import { Code2, Bot, Sparkles, Palette, Database, Heart } from "lucide-react";
import CurvedUnderline from "./CurvedUnderLine";
import { motion } from "framer-motion";

export default function CoreValueSection() {
  const services = [
    {
      icon: Code2,
      title: "Innovation",
      description:
        "We relentlessly pursue new ideas, technologies, and approaches to create impactful, future-ready solutions.",
    },
    {
      icon: Heart,
      title: "Empathy",
      description:
        "We listen deeply, understand others' perspectives, and design with the human experience at the center.",
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description:
        "We uphold the highest standards in our work, consistently striving to deliver outstanding quality and results.",
    },
    {
      icon: Palette,
      title: "Transparency",
      description:
        "We communicate openly and honestly, building trust through clarity and accountability.",
    },
    {
      icon: Bot,
      title: "Growth",
      description:
        "We commit to continuous learning, personal development, and evolving with our clients and industry.",
    },
    {
      icon: Database,
      title: "Integrity",
      description:
        "We act with honesty and responsibility, doing the right thing—even when it's not the easiest.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 relative inline-block font-plus">
            Our Core Values
            <CurvedUnderline />
          </h2>
        </motion.div>

        {/* Services Grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className={`text-center group p-10 bg-transparent border-0 border-t-0 ${
                  index == 0
                    ? "md:border-l-0"
                    : index == 3
                    ? "md:border-l-0"
                    : "md:border-l-2"
                }  ${
                  index >= 3 && "md:border-t-2"
                } hover:border-orange-400/50 transition-all duration-300 hover:shadow-md relative`}
              >
                {/* Animated Icon */}
                <motion.div
                  className="mx-auto mb-4 w-12 h-12 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.4 },
                  }}
                >
                  <Icon className="w-8 h-8 text-orange-500" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold font-plus mb-4 text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed font-Inter">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
