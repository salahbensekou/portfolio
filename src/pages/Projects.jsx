import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import test from '../assets/image.png'
const projectsData = [
  {
    id: 1,
    title: "Application E-commerce",
    description: "Plateforme de vente en ligne avec panier et paiement sécurisé",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: test,
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Réseau Social",
    description: "Plateforme de partage de posts avec système d'amis et notifications",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "WebSockets"],
    image: "/images/social-network.jpg",
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Gestion de Tâches",
    description: "Application de productivité avec tableau Kanban et calendrier",
    technologies: ["React", "Redux", "Express", "PostgreSQL"],
    image: "/images/task-manager.jpg",
    demoLink: "#",
    codeLink: "#"
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
      <div className="h-48 overflow-hidden rounded-t-xl relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-opacity" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.demoLink}
            className="flex items-center text-yellow-600 hover:text-yellow-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EyeIcon className="w-5 h-5 mr-2" />
            Démo
          </a>
          <a
            href={project.codeLink}
            className="flex items-center text-gray-600 hover:text-yellow-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeBracketIcon className="w-5 h-5 mr-2" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Mes Projets
          <span className="block mt-2 text-2xl text-yellow-500">Réalisations récentes</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}