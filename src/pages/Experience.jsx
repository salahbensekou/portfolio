import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Mise en place d’un SID pour l’Analyse du Tourisme dans la Région d’Errachidia et Midelt",
    year: "01/2025 – 02/2025",
    description: "Faculté des Sciences et technique, Errachidia, Morocco. Conception d’un Data Warehouse et d’un tableau de bord interactif en utilisant Talend (ETL), MySQL et Power BI pour analyser les flux touristiques et améliorer la prise de décision.",
  },
  {
    title: "ENQUÊTEUR DE TERRAIN – RGPH 2024",
    year: "08/2024 – 09/2024",
    description: "Recensement Général de la Population et de l'Habitat 2024 (RGPH), Alnif, Morocco. Participation au Recensement Général de la Population et de l’Habitat 2024, avec collecte et saisie de données démographiques sur le terrain, en assurant la fiabilité des informations recueillies.",
  },
  {
    title: "PROJET DE FIN D'ÉTUDE",
    year: "02/2024 – 06/2024",
    description: "Faculté des Sciences et technique, Errachidia, Morocco. Développement d'ALLONAS, une application mobile de réseau social basée sur la localisation, utilisant Flutter, Dart, Firestore, NodeJS et Riverpod.",
  },
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

function Experience() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-20 text-gray-800"
        >
          Expériences professionnelles
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg transform -translate-x-1/2 " />
          <ul className="space-y-20 md:space-y-32 max-w-4xl mx-auto">
            {experienceData.map((item, index) => (
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

export default Experience;