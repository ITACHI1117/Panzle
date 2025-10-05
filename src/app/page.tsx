import ContactFormSection from "@/components/ContactFormSection";
import HeroSection from "@/components/HeroSection";
import CoreValueSection from "@/components/OurCoreValue";
import ServicesSection from "@/components/OurServices";
import TeamImpactSection from "@/components/TeamImpactSection";
import TestimonialsSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CoreValueSection />
      <TeamImpactSection />
      <TestimonialsSection />
      <ContactFormSection />
    </>
  );
}
