"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

type ProjectProps = {
  title: string;
  description?: string;
  tags: readonly string[];
  githubUrl: string;
  isResearch?: boolean;
};

export default function Project({
  title,
  description,
  tags,
  githubUrl,
  isResearch,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group mb-3 sm:mb-8 last:mb-0 w-full"
    >
      <section className="bg-gray-100 w-full border border-black/5 rounded-lg overflow-hidden p-6 hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          {description && (
            <p className="text-gray-700 dark:text-white/70 mb-4">
              {description}
            </p>
          )}
          <ul className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-2 mt-auto"
          >
            <a
              href={githubUrl}
              target="_blank"
              className="group/btn bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-white/20"
            >
              View on GitHub{" "}
              <FaGithub className="opacity-70 group-hover/btn:translate-x-1 transition" />
            </a>
            {isResearch && (
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                Research Project
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </span>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
