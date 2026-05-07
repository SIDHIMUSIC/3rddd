"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TechSphere = dynamic(
  () => import("./TechSphere"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 pt-32 gap-10">

      <div className="flex-1 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I'm
          <span className="gradient-text"> Harry</span>
        </motion.h1>

        <p className="text-lg md:text-2xl mt-6 text-gray-300 max-w-2xl">
          Full-Stack Web Developer & AI Enthusiast.
        </p>
      </div>

      <div className="w-[280px] h-[280px] md:w-[500px] md:h-[500px]">
        <TechSphere />
      </div>

    </section>
  );
}
