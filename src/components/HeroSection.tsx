"use client";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-black leading-tight font-plus">
              AI-Driven
              <br />
              <span className="bg-gradient-to-l from-[#FD4D4D] via-[#F47C5B] to-[#E7C770] bg-clip-text text-transparent">
                Software
              </span>
              <br />
              Solutions Built for
              <br />
              the Future
            </h1>
          </div>

          <p className="text-muted-foreground text-lg max-w-lg font-Inter">
            We blend custom software development with artificial intelligence to
            help businesses automate, scale, and innovate faster.
          </p>

          <Button
            onClick={() => router.push("#contact")}
            className="bg-primary cursor-pointer font-plus text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
          >
            Book a Strategy Call
          </Button>

          {/* Review Section */}
          <div className="pt-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="relative"></div>
            </div>

            <h3 className="font-bold text-xl font-plus">
              Best Software agency in market!
            </h3>

            <p className="text-muted-foreground italic max-w-md font-Inter">
              {`"They turned our vision into a working AI product in just 8 weeks. Fast, focused, and incredibly smart."`}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Avatar>
                <AvatarImage src="/images/Amina.webp" alt="Amina D." />
                <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white">
                  AD
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-foreground font-plus">
                  Amina D., CEO at SmartHire
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image Placeholder */}
        <div className="relative">
          <Image
            src="/images/PanzleHeroImage.webp"
            alt="AI Robot"
            width={800}
            height={1000}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
