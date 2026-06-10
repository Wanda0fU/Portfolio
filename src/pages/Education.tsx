import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Navbar } from "../components/Navbar";

// --- Import Images ---
import oscpImage from "../assets/OSCP (2).png";
import aPlusImage from "../assets/A+.png";
import netPlusImage from "../assets/Net+.png";
import secPlusImage from "../assets/Sec+.png";

// --- Data Section ---

const educationData = [
  {
    type: "University",
    degree: "LICENCE SYSTÈMES INFORMATIQUES EMBARQUÉS",
    institution: "Faculté des Sciences Appliquées-Ait Melloul (FSSAM)",
    location: "Morocco",
    period: "2024 - 2027",
    achievements: [
      "Deep dive into advanced statistics, numerical analysis, and mathematical modeling for data science.",
      "Mastered core software engineering principles, concurrent programming, and high-performance data structures.",
      "Explored the integration of smart automated systems, embedded electronics, and real-time processing."
    ]
  },
  {
    type: "Formation Professionnelle",
    degree: "Diplôme TS. Développement Informatique",
    institution: "Institut Libre des Etudes Informatiques & Commerciales (ILEIC)",
    location: "Morocco",
    period: "2024 - 2026",
    achievements: [
      "Focus on structured programming techniques, mathematical applications for IT, and information system modeling.",
      "First introduction to object-oriented programming (OOP) and database design concepts.",
      "Gained initial workplace experience through a first-year technical support internship.",
      "Advanced focus on Client-Server programming, dynamic web application development, and database management systems (DBMS).",
      "Studied full-stack deployment, IT project management basics, and introductory network architecture.",
      "Completed a comprehensive final graduation design project and a secondary professional integration internship."
    ]
  }
];

const certificationsData = [
  {
    title: "OSCP",
    fullName: "Offensive Security Certified Professional",
    description: "Advanced penetration testing certification focusing on hands-on offensive security skills.",
    image: oscpImage
  },
  {
    title: "CompTIA A+",
    fullName: "CompTIA A+ Certified",
    description: "Foundational IT skills across devices, operating systems, and basic networking.",
    image: aPlusImage
  },
  {
    title: "CompTIA Network+",
    fullName: "CompTIA Network+ Certified",
    description: "Design, configure, manage, and troubleshoot wired and wireless networks.",
    image: netPlusImage
  },
  {
    title: "CompTIA Security+",
    fullName: "CompTIA Security+ Certified",
    description: "Baseline skills for performing core security functions and pursuing an IT security career.",
    image: secPlusImage
  }

];

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">Education & Certifications</h1>
            <p className="text-muted-foreground">My academic journey and professional qualifications</p>
          </motion.div>

          {/* 1. Education Timeline Section */}
          <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12 mb-20">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full bg-background border-[3px] border-primary" />
                
                {/* Content Card */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Tag */}
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold text-foreground mb-4">
                    {edu.type}
                  </span>

                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-lg text-primary font-medium mb-4">
                    {edu.institution}
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Achievements List */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                       Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. Certifications Grid Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left shadow-sm hover:shadow-lg transition-all"
                >
                  {/* Image Placeholder area */}
                  <div className="w-24 h-24 shrink-0 flex items-center justify-center bg-white rounded-lg p-2 border border-border/50">
                     <img 
                       src={cert.image} 
                       alt={cert.title} 
                       className="w-full h-full object-contain"
                     />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                    <p className="text-sm font-medium text-primary mb-2">{cert.fullName}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default Education;