"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TechSphere = dynamic(
  () => import("./TechSphere"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10">
      <div className="flex-1 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold leading-tight"
        >
          Hi, I'm
          <span className="gradient-text"> Harry</span>
        </motion.h1>

        <p className="text-xl mt-6 text-gray-300 max-w-xl">
          Full-Stack Web Developer & AI Enthusiast.
        </p>
      </div>

      <div className="w-full md:w-[500px] h-[500px]">
        <TechSphere />
      </div>
    </section>
  );
}
