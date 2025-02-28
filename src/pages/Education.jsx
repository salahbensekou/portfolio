import React from "react";
import { motion } from "framer-motion";

const educationData = [
  { title: "Baccalauréat en Science Mathématiques Option A", year: "2019 – 2020", description: "Lycée Mohamed 6 Alnif-Tinghir" },
  { title: "Bac+1 Sciences Mathématiques, Informatique et Application", year: "2020 – 2021", description: "Faculté Polydisciplinaire, Ouarzazate" },
  { title: "Baccalauréat en Science expérimental", year: "2020 – 2021", description: "Option Science Physique (Libre), Tinghir" },
  { title: "Diplôme d'Étude Universitaires Scientifiques et Techniques en Mathématique-Informatique-Physique", year: "2023 – 2024", description: "Faculté des Sciences et technique, Errachidia" },
  { title: "Licence En Sciences et Technique Genie Logiciel LSTGL", year: "2023 – 2024", description: "Faculté des Sciences et technique, Errachidia" },
  { title: "Licence fondamentale Sciences Mathématiques Informatique (En cours L3)", year: "2024", description: "Faculté Polydisciplinaire, Ouarzazate" },
  { title: "Master en Sciences et Technique Systèmes d'Information Décisionnel et Imagerie (En cours M1)", year: "2024", description: "Faculté des Sciences et technique, Errachidia" },
];

const TimelineItem = ({ title, year, description, isEven }) => (
  <motion.li 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative mb-10 w-full"
  >
    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
      <div className="relative flex items-center justify-center w-6 h-6">
        <div className="absolute w-5 h-5 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute w-6 h-6 bg-yellow-500 rounded-full animate-ping" />
      </div>
    </div>

    <div className={`flex ${isEven ? "justify-start" : "justify-end"} `}>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative w-full max-w-sm p-4"
      >
        <div className="bg-white border-l-4 border-yellow-500 shadow-lg rounded-lg p-6 space-y-2">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <div className="flex items-center text-sm text-yellow-600">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {year}
          </div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  </motion.li>
);

function Education() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-20 text-gray-800"
        >
          Parcours Académique
          <span className="block mt-2 text-2xl text-yellow-500">Mon chemin d'apprentissage</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg transform -translate-x-1/2 " />
          <ul className="space-y-20 md:space-y-32 max-w-4xl mx-auto">
            {educationData.map((item, index) => (
              <TimelineItem
                key={index}
                isEven={index % 2 === 0}
                {...item}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
