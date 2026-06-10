import { motion } from "framer-motion";
import { Languages, BookOpen, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

// --- 1. TERMINAL COMPONENT ---
const TerminalSkills = () => {
  const skills = [
    "npm install react",
    "python3 security_scan.py",
    "docker-compose up -d",
    "git commit -m 'Fixed bug'",
    "nmap -sV 192.168.1.1"
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % skills.length;
      const fullText = skills[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); 
      } 
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, skills]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-8 bg-secondary/80 border-b border-border flex items-center px-4 gap-2 rounded-t-xl">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="ml-2 text-xs text-muted-foreground font-mono">skills.sh</div>
      </div>
      
      <div className="flex-1 bg-secondary/30 p-4 font-mono text-sm md:text-base rounded-b-xl overflow-hidden flex items-center">
        <div className="w-full">
          <span className="text-green-500 mr-2">➜</span>
          <span className="text-blue-400 mr-2">~</span>
          <span className="text-foreground">{text}</span>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-5 bg-foreground ml-1 align-middle"
          />
        </div>
      </div>
    </div>
  );
};

// --- 2. SIGNATURE COMPONENT ---
const Signature = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 relative">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');`}
      </style>
      <svg
        width="400"
        height="150"
        viewBox="0 0 400 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[350px] text-foreground"
      >
        <defs>
          <clipPath id="write-mask">
            <motion.rect
              x="0"
              y="0"
              height="100%"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </clipPath>
        </defs>
        <g clipPath="url(#write-mask)">
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="currentColor" 
            style={{ fontFamily: "'Dancing Script', cursive", fontSize: "58px", fontWeight: "700" }}
          >
            Mohamed Ighijjou
          </text>
        </g>
        <motion.path
          d="M 40,95 C 150,110 250,110 360,90"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
};

// --- 3. MAIN EXPORT ---
const languages = ["Arabic", "English", "French"];

export const AboutBentoGrid = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Biography Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-bento md:row-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Biography</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Since childhood, I have been curious about how websites and applications work behind the scenes. 
              This curiosity led me to choose IT as my field, and over time, I developed a strong passion for 
              software development and security research.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              I specialize in building efficient and secure web applications while exploring vulnerabilities 
              and strengthening digital systems. My goal is to contribute to making the digital world safer 
              while creating impactful software solutions.
            </p>
          </motion.div>

          {/* Languages Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-bento"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Languages className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang}
                  className="px-4 py-2 rounded-full bg-secondary border border-border text-center font-medium"
                >
                  {lang}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Terminal Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-bento min-h-[200px] flex flex-col p-0 overflow-hidden"
          >
             <TerminalSkills />
          </motion.div>

          {/* Signature Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-bento md:col-span-2 flex items-center justify-center py-8"
          >
            <div className="w-full flex justify-center">
              <Signature />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// FIX: Default export added to resolve errors in Home.tsx and Index.tsx
export default AboutBentoGrid;