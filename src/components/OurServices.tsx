import React from "react";
import { Code2, Bot, Sparkles, Palette, Database } from "lucide-react";
import CurvedUnderline from "./CurvedUnderLine";

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

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 relative inline-block font-plus">
            What We Do Best
            <CurvedUnderline />
          </h2>
          <p className="text-muted-foreground mt-6 text-lg font-plus">
            Our Services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => {
            // const Icon = service.icon;
            return (
              <div
                key={index}
                className={`text-center group p-10 bg-transparent border-0 border-t-0 ${
                  index == 0
                    ? "md:border-l-0"
                    : index == 3
                    ? "md:border-l-0"
                    : "md:border-l-2"
                }  ${
                  index >= 3 && "md:border-t-2"
                } hover:border-orange-400/50 transition-all duration-300 hover:shadow-md`}
              >
                {/* Title */}
                <h3 className="text-xl font-bold font-plus mb-4 text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed font-Inter">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
