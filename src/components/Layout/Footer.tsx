"use client";
import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Column */}
          <div className="flex items-start">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image
                src="/images/PanzleFooterLogo.png"
                width={150}
                height={150}
                alt="panzle logo"
                className="w-32 sm:w-40 lg:w-48 h-auto"
              />
            </div>
          </div>

          {/* About US Column */}
          <div className="flex items-center">
            <a
              href="#about"
              className="font-semibold text-lg hover:text-gray-300 transition-colors font-plus"
            >
              About US
            </a>
          </div>

          {/* Our services Column */}
          <div className="flex items-center">
            <a
              href="#services"
              className="font-semibold text-lg hover:text-gray-300 transition-colors font-plus"
            >
              Our services
            </a>
          </div>

          {/* Contact Column */}
          <div className="flex items-center">
            <a
              href="#contact"
              className="font-semibold text-lg hover:text-gray-300 transition-colors font-plus"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright and Links */}
            <div className="text-gray-400 text-sm">
              <p>© 2025 Panzle. All rights reserved.</p>
              <p className="mt-1">
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                {" | "}
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/panzle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/panzle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/panzle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
