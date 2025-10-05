import React from "react";
import { Code2, Bot, Sparkles, Palette, Database } from "lucide-react";
import CurvedUnderline from "./CurvedUnderLine";

export default function CoreValueSection() {
  const services = [
    {
      icon: Code2,
      title: "Innovation",
      description:
        "We relentlessly pursue new ideas, technologies, and approaches to create impactful, future-ready solutions.",
    },
    {
      icon: Sparkles,
      title: "Empathy",
      description:
        "We listen deeply, understand others’ perspectives, and design with the human experience at the center.",
    },
    {
      icon: Bot,
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
      icon: Database,
      title: "Growth",
      description:
        "We commit to continuous learning, personal development, and evolving with our clients and industry.",
    },
    {
      icon: Database,
      title: "Integrity",
      description:
        "We act with honesty and responsibility, doing the right thing—even when it’s not the easiest.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 relative inline-block font-plus">
            Our Core Value
            <CurvedUnderline />
          </h2>
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
