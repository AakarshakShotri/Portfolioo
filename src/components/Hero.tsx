"use client";

import { siteMeta } from "@/data/site";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="pt-8 sm:pt-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Section */}
          <div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {siteMeta.name}
            </motion.h1>
            <p className="mt-2 text-lg text-[var(--muted-text)]">
              {siteMeta.valueProposition}
            </p>

            {/* Contact & Social Links */}
            <div className="mt-4 flex flex-wrap gap-5 text-[var(--muted-text)] text-lg">
              <a
                href="https://github.com/Aakarshak1-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--accent)]"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aakarshak-shotri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--accent)]"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="mailto:shotriaakarshak@gmail.com"
                className="flex items-center gap-2 hover:text-[var(--accent)]"
              >
                <FaEnvelope /> Email
              </a>
              <a
                href="tel:+919770581596"
                className="flex items-center gap-2 hover:text-[var(--accent)]"
              >
                <FaPhone /> +91 97705 81596
              </a>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="hidden md:flex justify-center md:justify-end">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--accent-weak)] shadow mr-13">
              <Image
                src="/image.jpeg"
                alt="Headshot"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
