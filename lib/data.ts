import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaJava, FaPython, FaAngular, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaDocker, FaGitAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiSpringboot, SiFastapi, SiFlask, SiMongodb, SiMysql, SiNeo4J, SiKubernetes, SiApachekafka, SiElasticsearch, SiJunit5 } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import defaultImage from "@/public/Profile.jpg";
// Import your project images here when you add them
// For example:
// import reviewBarImg from "@/public/projects/reviewbar.jpg";
// import workoutBuddyImg from "@/public/projects/workout-buddy.jpg";
// import noteItImg from "@/public/projects/note-it.jpg";
// import uniShareImg from "@/public/projects/uni-share.jpg";
// import localLibraryImg from "@/public/projects/local-library.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc(Hons) in Information Technology",
    location: "SLIIT",
    description:
      "Currently pursuing my degree on software engineering and artificial intelligence.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2021 - Present",
  },
  {
    title: "Associate Software Engineer",
    location: "Zafer (AI)",
    description:
      "Contributing as a core member of the AI and R&D teams, focused on the design, development, and deployment of production-grade AI features. Key projects includes: AI Summarizer, Document Chat, AI Search, AI AutoFill, AI Insights, and the implementation of MCP (Multi-Component Pipeline) and A2A (Agent-to-Agent) protocols. Led backend development initiatives using Python (FastAPI) and Java (Spring Boot) within a microservices-based architecture. Collaborated across teams to build scalable, intelligent features, integrating AI/ML capabilities into enterprise-grade software solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2024 - Present",
  },
  {
    title: "Intern Software Engineer",
    location: "ZorroSign Inc",
    description:
      "Collaborated with cross-functional teams to deliver production-ready code across multiple services. Enhanced the Notification Service, achieving a 90% increase in code coverage through comprehensive testing and refactoring. Contributed to the development of the AI-powered Document Autofill feature, integrating intelligent data extraction and pre-filling capabilities. Designed and implemented a full-stack IoT Device Management solution, handling real-time device data and control using modern web technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Oct 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Software User Interface Personalization through User Feedback and User Behavior",
    description: "University Final Year Research Project (Group, In-progress)",
    tags: ["Python", "RAG", "Lang Chain", "React js"],
    githubUrl: "https://github.com/IT21324406",
    isResearch: true,
  },
  {
    title: "Laundry Service Management Mobile Application",
    description: "Individual Project",
    tags: ["Java", "Google Firebase", "Android Studio"],
    githubUrl: "https://github.com/IT21324406",
  },
  {
    title: "Income Expense Management Mobile Application",
    description: "Group Project",
    tags: ["Kotlin", "SQLite DB", "Android Studio"],
    githubUrl: "https://github.com/IT21324406",
  },
  {
    title: "Vehicle Service Station Web Application",
    description: "Group Project",
    tags: ["ReactJS", "ExpressJS", "NodeJS", "MySQL"],
    githubUrl: "https://github.com/IT21324406",
  },
  {
    title: "Pharmacy Management System",
    description: "Group Project",
    tags: ["Java", "MySQL"],
    githubUrl: "https://github.com/IT21324406",
  }
] as const;

export const skillsData = [
  {
    name: "Java Spring Boot",
    icon: SiSpringboot,
    category: "Backend"
  },
  {
    name: "Python FastAPI",
    icon: SiFastapi,
    category: "Backend"
  },
  {
    name: "Python FlaskAPI",
    icon: SiFlask,
    category: "Backend"
  },
  {
    name: "Angular",
    icon: FaAngular,
    category: "Frontend"
  },
  {
    name: "HTML/CSS/JS",
    icon: FaHtml5,
    category: "Frontend"
  },
  {
    name: "LLM",
    icon: TbBrandVscode,
    category: "AI/ML"
  },
  {
    name: "RAG",
    icon: TbBrandVscode,
    category: "AI/ML"
  },
  {
    name: "MCP Protocol",
    icon: TbBrandVscode,
    category: "AI/ML"
  },
  {
    name: "A2A Protocol",
    icon: TbBrandVscode,
    category: "AI/ML"
  },
  {
    name: "Prompt Engineering",
    icon: TbBrandVscode,
    category: "AI/ML"
  },
  {
    name: "Microservices",
    icon: FaDocker,
    category: "Architecture"
  },
  {
    name: "RESTful API",
    icon: FaDatabase,
    category: "Architecture"
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database"
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database"
  },
  {
    name: "VectorDB",
    icon: FaDatabase,
    category: "Database"
  },
  {
    name: "Neo4j",
    icon: SiNeo4J,
    category: "Database"
  },
  {
    name: "Git",
    icon: FaGitAlt,
    category: "Tools"
  },
  {
    name: "Docker",
    icon: FaDocker,
    category: "Tools"
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    category: "Tools"
  },
  {
    name: "Apache Kafka",
    icon: SiApachekafka,
    category: "Tools"
  },
  {
    name: "ELK Stack",
    icon: SiElasticsearch,
    category: "Tools"
  },
  {
    name: "Unit Testing",
    icon: SiJunit5,
    category: "Testing"
  },
  {
    name: "Agile/Scrum",
    icon: TbBrandVscode,
    category: "Methodology"
  }
] as const;
