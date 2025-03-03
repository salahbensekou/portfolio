import React, { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";

function Footer() {

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "bensekousalah1@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 10000); // Affiche le message pendant 10 secondes
    });
  };
          
  return (
    <footer className="relative w-full overflow-hidden mt-20 bg-gray-100">
      {/* SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 344"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 258L60 229.333C120 200.667 240 143.333 360 150.5C480 157.667 600 229.333 720 229.333C840 229.333 960 157.667 1080 107.5C1200 57.3333 1320 28.6667 1380 14.3333L1440 0V344H1380C1320 344 1200 344 1080 344C960 344 840 344 720 344C600 344 480 344 360 344C240 344 120 344 60 344H0V258Z"
            fill="#FDC435"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 py-10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's stay in touch</h2>
          <p className="mb-6 text-gray-600">Do you have a project or a question? Feel free to contact me!</p>

{/* Social Links */}
<div className="flex flex-col items-center space-y-3">
  <div className="flex justify-center space-x-6">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/salaheddine-ben-sekou-6a4bb22a0/"
      aria-label="LinkedIn Profile"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-700 transition-colors duration-200 p-2 rounded-full hover:bg-blue-50/20" /* Fond transparent */
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/salahbensekou"
      aria-label="GitHub Profile"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100/20" /* Fond transparent */
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>

    {/* Email Copy */}
    <a
      onClick={handleCopyEmail}
      aria-label="Copy Email Address"
      className="text-gray-600 hover:text-red-600 transition-colors duration-200 p-2 rounded-full hover:bg-red-50/20" /* Fond transparent */
    >
      <MdOutlineEmail className="w-6 h-6" />
    </a>
  </div>

  {/* Email Feedback */}
  {copied && (
    <div 
      role="alert"
      className="text-sm text-gray-600 font-medium animate-fade-in"
    >
      bensekousalah1@gmail.com copied !
    </div>
  )}

</div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 mt-4">
            &copy; {new Date().getFullYear()} Salaheddine Ben Sekou. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
