import React from "react";
import { motion } from "framer-motion";
import image from "../assets/image.png";
import Profile from "../assets/Profile.png";
import { IoCloudDownloadOutline } from "react-icons/io5";

function Home() {

  const handleDownload = () => {
    const cvLink = document.createElement('a');
    cvLink.href = '/CV_Salah.pdf'; // Chemin vers le fichier dans le dossier public
    cvLink.download = 'CV_Salah.pdf'; // Nom du fichier téléchargé
    cvLink.click();
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-6 md:p-20">
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Titre du poste */}
        <motion.span
          className="text-[#fdc435] text-xl font-bold uppercase tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          UI/UX Designer
        </motion.span>

        {/* Titre principal */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hello, my name is <br />
          <span className="text-[#fdc435]">Salaheddine Ben Sekou</span>
        </motion.h1>

        {/* Texte descriptif */}
        <motion.p
          className="text-gray-600 text-lg md:text-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Short text with details about you, what you do or your professional career.
          You can add more information on the about page.
        </motion.p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <motion.a
            className="flex px-6 gap-2 py-3 bg-[#fdc435] justify-center text-black text-lg font-medium rounded-lg shadow-md hover:bg-[#e0b02e] transition"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
          >
            <p className="">CV</p> <IoCloudDownloadOutline className="my-auto" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/salaheddine-ben-sekou-6a4bb22a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-black text-black text-lg font-medium rounded-lg hover:bg-black hover:text-white transition"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        className="w-full flex justify-center md:justify-end mt-10 md:mt-0 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image d'arrière-plan */}
        <img
          src={image}
          alt="Background"
          className="absolute w-[90%] md:w-[70%] lg:w-[60%] h-auto max-w-[500px] object-contain"
        />

        {/* Image de profil */}
        <motion.img
          src={Profile}
          alt="Profile"
          className="relative w-[65%] md:w-[45%] lg:w-[35%] h-auto max-w-[300px] rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

    </div>
  );
}

export default Home;
