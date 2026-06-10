import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "mohamed.ighijjou0@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Email",
      value: "mohamed.ighijjou0@gmail.com",
      href: "mailto:mohamed.ighijjou0@gmail.com",
      isEmail: true
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mohamed-ighijjou",
      href: "https://www.linkedin.com/in/mohamed-ighijjou-37b73731b/",
      isEmail: false
    },
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      value: "github.com/mohamed-ighijjou",
      href: "https://github.com/Wanda0fU",
      isEmail: false
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col justify-center px-4 pt-24 pb-12">
        <div className="container mx-auto max-w-4xl">
          
          {/* 1. Header Section (Pic 2 Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Me
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-8">
              The best way to reach me is through email. The funny looking thing is to prevent bots from scraping my email (or at least try to). Treat it like a normal '@' symbol.
            </p>
            
            {/* The "Bot Protected" Email Display */}
            <div className="inline-flex items-center gap-4 bg-secondary/50 p-4 rounded-lg border border-border/50">
              <span className="text-xl md:text-2xl font-mono text-foreground font-medium">
                mohamed.ighijjou0 <span className="text-primary">/[|@]/</span> gmail.com
              </span>
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-primary/10 rounded-full transition-colors relative group"
                title="Copy normal email"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                )}
              </button>
            </div>
          </motion.div>

          {/* 2. Grid Section (Pic 1 Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.isEmail ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex flex-col items-center text-center p-8 rounded-xl hover:bg-secondary/40 transition-colors group cursor-pointer"
              >
                <div className="mb-4 text-foreground group-hover:text-primary transition-colors transform group-hover:scale-110 duration-300">
                  {link.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {link.label}
                </h3>
                
                <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors text-sm md:text-base break-all">
                  {link.value}
                </span>
              </motion.a>
            ))}
          </div>

        </div>
      </main>
      
      {/* Footer copyright if needed */}
      <footer className="py-6 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Mohamed Ighijjou. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;