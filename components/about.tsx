"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaCode, FaDatabase, FaBrain, FaServer } from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 text-gray-700 dark:text-gray-300 relative group"
      >
        <span className="absolute -left-4 top-0 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">👋</span>
        I am a passionate <span className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Software Engineer</span> with hands-on experience in building and deploying full-stack software solutions, including production-grade AI/ML features. With a strong foundation in system architecture and the complete software development life cycle (SDLC), I focus on delivering <span className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">clean, scalable, and maintainable code</span>. I'm known for my ability to adapt quickly to new technologies and contribute effectively in cross-functional teams.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center justify-center gap-2">
          <span className="inline-block animate-bounce">🎯</span>
          My technical expertise spans:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)" }}
            className="p-4 rounded-lg bg-white/5 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaCode className="text-blue-500 dark:text-blue-400" />
              <h4 className="font-medium text-gray-900 dark:text-white">Backend</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">Java (Spring Boot), Python (FastAPI, FlaskAPI)</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)" }}
            className="p-4 rounded-lg bg-white/5 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaServer className="text-green-500 dark:text-green-400" />
              <h4 className="font-medium text-gray-900 dark:text-white">Frontend</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">Angular</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)" }}
            className="p-4 rounded-lg bg-white/5 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaBrain className="text-purple-500 dark:text-purple-400" />
              <h4 className="font-medium text-gray-900 dark:text-white">AI/ML</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">RAG, LLMs, Prompt Engineering, Multi-Component Pipelines (MCP), Agent-to-Agent (A2A) systems, Vector Databases, and Knowledge Graphs</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)" }}
            className="p-4 rounded-lg bg-white/5 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaDatabase className="text-yellow-500 dark:text-yellow-400" />
              <h4 className="font-medium text-gray-900 dark:text-white">Architectures & Databases</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300">Microservices, RESTful API design, Relational and NoSQL databases</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-4 text-gray-700 dark:text-gray-300 relative group"
      >
        <span className="absolute -left-4 top-0 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">🎓</span>
        Currently, I'm pursuing my <span className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">BSc(Hons)In Information Technology, Computer Software Engineering</span> at <span className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Sri Lanka Institute of Information Technology (SLIIT)</span>, and I remain deeply curious about advancements in AI/ML and emerging technologies.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-700 dark:text-gray-300 relative group"
      >
        <span className="absolute -left-4 top-0 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">💡</span>
        Driven by a <span className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">user-centric approach</span> and a commitment to innovation, I strive to engineer impactful solutions in fast-paced, dynamic environments.
      </motion.p>
    </motion.section>
  );
}
