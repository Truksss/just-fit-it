"use client"

import Header from "@/components/Header";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-300 pt-32">
      <Header />
        <div className="flex justify-center items-center">
          <motion.div className="text-5xl sm:text-md lg:text-xl">  
            <LayoutTextFlip
            text="Your"
            words={["Fitness", "Journey", "Buddy"]}
            />
          </motion.div>
        </div>
  </div> 
  );
}
