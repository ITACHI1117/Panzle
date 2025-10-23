"use client";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HeroSection() {
  const router = useRouter();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          className="space-y-8 items-center md:items-start flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl text-center md:text-left font-black leading-tight font-plus">
              AI-Driven
              <br />
              <motion.span
                className="bg-gradient-to-l from-[#FD4D4D] via-[#F47C5B] to-[#E7C770] bg-clip-text text-transparent inline-block"
                initial={{ backgroundPosition: "200% center" }}
                animate={{ backgroundPosition: "0% center" }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ backgroundSize: "200% auto" }}
              >
                Software
              </motion.span>
              <br />
              Solutions Built for
              <br />
              the Future
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-md md:text-lg max-w-lg text-center md:text-left font-Inter"
          >
            We blend custom software development with artificial intelligence to
            help businesses automate, scale, and innovate faster.
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => router.push("#contact")}
              className="bg-primary cursor-pointer font-plus text-primary-foreground hover:bg-primary/90 px-8 py-6 text-md md:text-lg"
            >
              Book a Strategy Call
            </Button>
          </motion.div>

          {/* Review Section */}
          <motion.div
            variants={itemVariants}
            className="pt-1 space-y-4 flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <motion.div
                    key={star}
                    custom={index}
                    variants={starVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.h3
              className="font-bold text-xl font-plus"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              Best Software agency in market!
            </motion.h3>

            <motion.p
              className="text-muted-foreground text-center md:text-left italic md:max-w-md font-Inter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              {`"They turned our vision into a working AI product in just 8 weeks. Fast, focused, and incredibly smart."`}
            </motion.p>

            <motion.div
              className="flex items-center gap-3 pt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar>
                  <AvatarImage src="/images/Amina.webp" alt="Amina D." />
                  <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white">
                    AD
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <div>
                <p className="font-bold text-foreground font-plus">
                  Amina D., CEO at SmartHire
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          className="relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/PanzleHeroImage.webp"
              alt="AI Robot"
              width={800}
              height={1000}
              className="rounded-lg"
            />
          </motion.div>

          {/* Optional: Floating animation for the image */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* This creates a subtle floating effect */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
