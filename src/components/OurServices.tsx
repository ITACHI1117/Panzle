"use client";
import React from "react";
import { Code2, Bot, Sparkles, Palette, Database } from "lucide-react";
import CurvedUnderline from "./CurvedUnderLine";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "From web platforms to mobile apps, we build tailored solutions that solve real business problems.",
    },
    {
      icon: Sparkles,
      title: "AI Integration & Automation",
      description:
        "Automate processes and unlock insights with machine learning, natural language processing, and predictive analytics.",
    },
    {
      icon: Bot,
      title: "Chatbot & Virtual Assistant Development",
      description:
        "Deploy intelligent bots for support, sales, and internal operations using GPT and other LLMs.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Design isn't just about looks. We create intuitive interfaces that boost user engagement and retention.",
    },
    {
      icon: Database,
      title: "Data Engineering & APIs",
      description:
        "Connect systems, manage big data, and build secure, scalable backends that power your product.",
    },
    {
      icon: Database,
      title: "Data Engineering & APIs",
      description:
        "Connect systems, manage big data, and build secure, scalable backends that power your product.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 relative inline-block font-plus">
            What We Do Best
            <CurvedUnderline />
          </h2>
          <motion.p
            className="text-muted-foreground mt-6 text-lg font-plus"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(251, 146, 60, 0.05)",
                  transition: { duration: 0.3 },
                }}
                className={`text-center group p-10 bg-transparent border-0 border-t-0 ${
                  index == 0
                    ? "md:border-l-0"
                    : index == 3
                    ? "md:border-l-0"
                    : "md:border-l-2"
                }  ${
                  index >= 3 && "md:border-t-2"
                } hover:border-orange-400/50 transition-all duration-300 hover:shadow-md relative overflow-hidden`}
              >
                {/* Icon with animation */}
                <motion.div
                  className="mx-auto mb-4 w-12 h-12 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
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

                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: "none" }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
