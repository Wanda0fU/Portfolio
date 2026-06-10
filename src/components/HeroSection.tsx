import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import heroBanner from "../assets/hero-banner.jpg";
import profilePic from "../assets/download.jpg";

const quotes = [
  "In life, there's no such thing as staying where you are. If you are not actively growing, you are inevitably falling behind.",
  "Security is not a product, but a process.",
  "First, solve the problem. Then, write the code.",
  "The only way to do great work is to love what you do."
];

export const HeroSection = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setText(quotes[randomIndex]);
  }, []);

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5, // Wait a bit before starting
        staggerChildren: 0.04, // Speed of typing (lower is faster)
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-end pb-12 overflow-hidden">
      {/* Banner Background */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Cosmic banner"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 rounded-full border-4 border-foreground/20 overflow-hidden mb-6 shadow-lg bg-background"
        >
          <img 
            src={profilePic} 
            alt="Mohammed Ighijjou" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex gap-4 mb-6"
        >
          <a
            href="https://github.com/Wanda0fU"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-ighijjou-37b73731b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Name & Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-2"
        >
          Mohammed Ighijjou
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-muted-foreground text-lg mb-6"
        >
          Junior Software Engineer & Security Researcher
        </motion.p>

        {/* --- Random Typing Quote --- */}
        <motion.blockquote
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-muted-foreground text-sm italic min-h-[40px]" // min-h prevents layout shift
        >
          "
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
          "
        </motion.blockquote>
      </div>
    </section>
  );
};