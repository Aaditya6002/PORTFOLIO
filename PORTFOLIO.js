import React, { useState, useEffect, useMemo } from 'react';
import {
  Code,
  Cpu,
  Database,
  Terminal,
  Briefcase,
  GraduationCap,
  Sparkles,
  Award,
  Layers,
  Search,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  User,
  Sliders,
  Download,
  Upload,
  RefreshCw,
  X,
  CheckCircle,
  ChevronRight,
  Monitor,
  Layout,
  Palette,
  Cloud,
  Globe,
  Plus,
  Trash2,
  Copy,
  Check
} from 'lucide-react';
const initialData = {
  profile: {
    name: "Aaditya Raj",
    title: "Computer Engineering Student | Software & AI Developer | Graphic Designer",
    tagline: "Building intelligent web systems, machine learning models, and intuitive digital experiences.",
    location: "Pune, Maharashtra, India",
    email: "aadityaraj.dev@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com/in",
    education: {
      degree: "Bachelor of Engineering (BE) in Computer Engineering",
      institution: "Bharati Vidyapeeth's College of Engineering, Lavale",
      university: "Savitribai Phule Pune University (SPPU)",
      year: "2023 - 2027 (Expected)",
      gpa: "8.8 / 10.0"
    },
    bio: "Passionate Computer Engineering undergrad with strong skills spanning full-stack web architectures, AI/ML pipelines, subnetting/networking, and graphic design. Actively involved in campus technical communities and hackathons."
  },
  stats: {
    projectsCount: "12+",
    techSkillsCount: "25+",
    certificationsCount: "6",
    hackathonsCount: "4+"
  },
  skills: [
    { name: "Python", category: "Languages", level: 90, primary: true },
    { name: "JavaScript (ES6+)", category: "Languages", level: 85, primary: true },
    { name: "C / C++", category: "Languages", level: 80, primary: false },
    { name: "SQL", category: "Languages", level: 82, primary: false },
    { name: "Java", category: "Languages", level: 75, primary: false },
    
    { name: "React.js", category: "Web & Frameworks", level: 88, primary: true },
    { name: "Tailwind CSS", category: "Web & Frameworks", level: 92, primary: true },
    { name: "Node.js & Express", category: "Web & Frameworks", level: 80, primary: true },
    { name: "HTML5 / CSS3", category: "Web & Frameworks", level: 95, primary: false },
    
    { name: "Machine Learning", category: "AI / ML & Data", level: 85, primary: true },
    { name: "Deep Learning & NLP", category: "AI / ML & Data", level: 78, primary: true },
    { name: "Generative AI", category: "AI / ML & Data", level: 82, primary: true },
    { name: "Data Analytics", category: "AI / ML & Data", level: 80, primary: false },
    { name: "Tableau Cloud", category: "AI / ML & Data", level: 75, primary: false },
    { name: "Docker", category: "Cloud & Tools", level: 75, primary: false },
    { name: "Git & GitHub", category: "Cloud & Tools", level: 90, primary: true },
    { name: "Linux / CLI", category: "Cloud & Tools", level: 85, primary: false },
    { name: "Cisco Packet Tracer", category: "Cloud & Tools", level: 80, primary: false },
    
    { name: "UI/UX & Typography", category: "Creative & Design", level: 88, primary: true },
    { name: "Graphic Design", category: "Creative & Design", level: 90, primary: true },
    { name: "Adobe Express & Firefly", category: "Creative & Design", level: 85, primary: false },
    { name: "Storyboarding", category: "Creative & Design", level: 80, primary: false }
  ],
  projects: [
    {
      id: "prop-manage",
      title: "Property & Rent Management System",
      category: "Full Stack / Python",
      summary: "End-to-end property tracking, tenant allocation, automated invoice calculation, and database management.",
      description: "A comprehensive system engineered to manage residential and commercial properties, track lease agreements, automatically compute rent roll, generate monthly statements, and provide analytics on vacancy rates.",
      tech: ["Python", "SQL / SQLite", "Custom GUI / Tkinter", "Data Analytics"],
      highlights: [
        "Architected relational DB schema for multi-tenant property hierarchies.",
        "Integrated dynamic invoice PDF/receipt export engine.",
        "Built modular backend logic for rapid data queries and search filters."
      ],
      github: "https://github.com",
      demo: "",
      featured: true
    },
    {
      id: "net-sim",
      title: "Subnetting & Network Architecture Simulation",
      category: "Networking & Security",
      summary: "VLSM network topology design, static/dynamic routing, and local DNS Lookup configuration in Cisco Packet Tracer.",
      description: "Designed multi-router network topologies implementing Variable Length Subnet Masking (VLSM) to optimize IP address allocation. Configured DHCP, DNS servers, and dynamic routing protocols to mimic enterprise infrastructure.",
      tech: ["Cisco Packet Tracer", "Networking Protocols", "IPv4 / Subnetting", "DNS / DHCP"],
      highlights: [
        "Configured subnet tables reducing IP waste by over 35%.",
        "Simulated end-to-end packet ICMP traversals and DNS resolution setups.",
        "Created comprehensive documentation and diagnostic test runs."
      ],
      github: "https://github.com",
      demo: "",
      featured: true
    },
    {
      id: "exoskeleton",
      title: "Bio-Mechanical Exoskeleton Suit Concept Pitch",
      category: "Hardware & AI Pitch",
      summary: "Innovative conceptual design & commercial pitch for ergonomic motor-assisted ergonomic support suits.",
      description: "Developed a technical concept and business pitch for a lower-cost ergonomic powered exoskeleton geared towards industrial warehouse workers and rehabilitative mobility assistance.",
      tech: ["UI/UX Design", "Storyboarding", "CAD Concept", "Pitch Presentation"],
      highlights: [
        "Formulated technical specifications and load distribution calculations.",
        "Created high-fidelity visual diagrams, user storyboards, and market pitch pitchdeck.",
        "Presented solution framework during innovation pitch competitions."
      ],
      github: "",
      demo: "",
      featured: true
    },
    {
      id: "forage-tech",
      title: "Deloitte Australia Tech Consulting Simulation",
      category: "AI & Consulting",
      summary: "Virtual software engineering and AI architecture simulation completed via Forage platform.",
      description: "Engaged in hands-on practical tasks involving software architecture design, client requirement analysis, and proposed AI integration strategies for enterprise client digital transformations.",
      tech: ["Generative AI", "Data Analysis", "System Design", "Technical Writing"],
      highlights: [
        "Evaluated model feasibility for automated client ticket routing.",
        "Prepared structural diagrams and functional specs for proposed modules."
      ],
      github: "https://github.com",
      demo: "",
      featured: false
    }
  ],
  experience: [
    {
      role: "Internshala Student Partner (ISP)",
      organization: "Internshala (BVCOEL Representative)",
      period: "2024 - Present",
      type: "Leadership & Community",
      description: "Representing Internshala at BVCOEL, organizing online workshops, driving student skill development initiatives, and fostering peer growth in tech skills."
    },
    {
      role: "Technical Core Member",
      organization: "BV CodeVerse (Campus Tech Club)",
      period: "2023 - Present",
      type: "Technical Club",
      description: "Co-organizing coding sessions, mentoring junior students in programming fundamentals, and designing promotional graphics and UI branding for club events."
    },
    {
      role: "Participant / Contributor",
      organization: "ICRAES 2026 & DeepTech Hackathon",
      period: "2025 - 2026",
      type: "Events & Research",
      description: "Active involvement in upcoming engineering conferences and AI-centric hackathons showcasing prototype implementations."
    }
  ],
  certifications: [
    { title: "Generative AI Fundamentals & Applications", issuer: "Coursera / IBM", year: "2024" },
    { title: "Deloitte Australia Tech Consulting Certificate", issuer: "Forage", year: "2024" },
    { title: "Networking Essentials & Packet Tracer", issuer: "Cisco Networking Academy", year: "2024" },
    { title: "Python for Data Science & AI", issuer: "Cognitive Class", year: "2023" }
  ]
};
export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('aaditya_portfolio_data');
    return saved ? JSON.parse(saved) : initialData;
  });
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projectSearch, setProjectSearch] = useState('');
  const [projectFilter, setProjectFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [copied, setCopied] = useState(false);
  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('aaditya_portfolio_data', JSON.stringify(data));
  }, [data]);
}
