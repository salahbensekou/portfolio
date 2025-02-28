import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, ServerIcon, BookOpenIcon, CpuChipIcon, BriefcaseIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import React from 'react';
const skillsData = [
  {
    title: 'Développement mobile',
    icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
    color: 'border-blue-500',
    items: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Java/Xml']
  },
  {
    title: 'Développement Web',
    icon: <CodeBracketIcon className="w-8 h-8" />,
    color: 'border-green-500',
    items: ['PHP', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Base de données',
    icon: <ServerIcon className="w-8 h-8" />,
    color: 'border-purple-500',
    items: ['Firestore', 'Oracle', 'MySQL', 'SQL', 'SQLite', 'Talend']
  },
  {
    title: 'Environnements de développement',
    icon: <CpuChipIcon className="w-8 h-8" />,
    color: 'border-red-500',
    items: ['VS Code', 'Eclipse', 'CodeBlocks', 'Android Studio']
  },
  {
    title: 'Programmation',
    icon: <CommandLineIcon className="w-8 h-8" />,
    color: 'border-yellow-500',
    items: ['Java', 'Python', 'C', 'PHP', 'SQL']
  },
  {
    title: 'Modélisation',
    icon: <BookOpenIcon className="w-8 h-8" />,
    color: 'border-pink-500',
    items: ['UML', 'MERISE']
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="min-h-screen py-12 px-4 md:px-8 bg-gradient-to-b from-gray-200 to-gray-100">
      <div className="max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl  font-bold text-gray-800 mb-12 text-center relative"
        >
        Compétences
        <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-2 left-1/2 w-1/3 h-1 bg-yellow-500 transform -translate-x-1/2 rounded-full"
        />
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              whileHover={{ scale: 1.03 }}
            >
              <div className={`border-l-4 ${skill.color} pl-4 mb-4 flex items-center gap-3`}>
                {skill.icon}
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                    <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, backgroundColor: "#f59e0b", color: "white" }}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors cursor-default"
                    >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;