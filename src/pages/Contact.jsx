import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { UserCircleIcon, EnvelopeIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
const API_KEY = import.meta.env.VITE_API_KEY;export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialisation de AOS pour les animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Fonction de soumission du formulaire
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", API_KEY); // Clé API Web3Forms

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Succès!",
          text: "Message sent successfully!",
          icon: "success",
          confirmButtonColor: "#f59e0b",
        });
        event.target.reset(); // Réinitialiser le formulaire
      } else {
        Swal.fire({
          title: "Erreur!",
          text: "An error occurred. Please try again.",
          icon: "error",
          confirmButtonColor: "#f59e0b",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Erreur!",
        text: "Unable to contact the server.",
        icon: "error",
        confirmButtonColor: "#f59e0b",
      });
    } finally {
      setIsSubmitting(false); // Réinitialiser l'état de soumission
    }
  };

  return (
    <section className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-gray-200 to-gray-100">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Titre avec animation et soulignement */}
        <h1 
          data-aos="fade-up" 
          className="text-4xl font-bold text-gray-800 mb-12 text-center relative"
        >
          Contact
          <span className="absolute -bottom-4 left-1/2 w-24 h-1 bg-yellow-500 transform -translate-x-1/2 rounded-full" />
        </h1>

        {/* Formulaire */}
        <form 
          onSubmit={onSubmit} 
          data-aos="fade-up" 
          className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Champ Nom */}
          <div className="relative mb-6">
            <UserCircleIcon className="w-6 h-6 absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
              placeholder="Your name"
              required
            />
          </div>

          {/* Champ Email */}
          <div className="relative mb-6">
            <EnvelopeIcon className="w-6 h-6 absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
              placeholder="example@email.com"
              required
            />
          </div>

          {/* Champ Message */}
          <div className="relative mb-6">
            <ChatBubbleLeftEllipsisIcon className="w-6 h-6 absolute left-3 top-13 transform -translate-y-1/2 text-gray-400" />
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Sending...
              </span>
            ) : (
              "Send message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}