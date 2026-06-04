import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import ProjectModal from './ProjectModal';
import { getImageUrl } from '../utils/imageMapper';

const colorFallbacks = ["#7c3aed", "#1e293b", "#2563eb", "#f97316", "#059669", "#e11d48"];

export default function Projects() {
  const [limit, setLimit] = useState(4);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalBg, setModalBg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadMore = () => {
    setLimit(prevLimit => Math.min(prevLimit + 2, projectsData.length));
  };

  const openProjectDetails = (project, fallbackColor) => {
    setSelectedProject(project);
    setModalBg(project.bg_color || fallbackColor);
    setIsModalOpen(true);
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
    // Timeout to prevent visual jumps during transition
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section 
      id="proyectos" 
      className="section-padding py-12 md:py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-2">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-7xl mb-2 md:mb-3">
              Proyectos
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed text-base md:text-xl">
              Conoce los últimos proyectos donde he trabajado.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.slice(0, limit).map((project, idx) => {
            const fallbackColor = colorFallbacks[idx % colorFallbacks.length];
            const cardBgColor = project.bg_color || fallbackColor;
            
            return (
              <div 
                key={project.id}
                className="project-card group cursor-pointer"
                onClick={() => openProjectDetails(project, fallbackColor)}
                style={{
                  animationDelay: `${idx * 100}ms`
                }}
              >
                {/* Visual Image Container */}
                <div 
                  className="aspect-[4/3] rounded-2xl relative overflow-hidden transition-all duration-300"
                  style={{ backgroundColor: cardBgColor }}
                >
                  <img 
                    src={getImageUrl(project.image_url)} 
                    alt={project.title} 
                    className="absolute bottom-0 right-0 w-[95%] h-auto object-contain origin-bottom transition-transform duration-700 group-hover:scale-105 rounded-tl-lg"
                    loading="lazy"
                  />
                </div>
                
                {/* Text Info */}
                <div className="pt-4 pb-2">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {limit < projectsData.length && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={loadMore}
              className="rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity duration-300 py-[15px] text-lg px-[100px] shadow-sm"
            >
              Cargar más
            </button>
          </div>
        )}
      </div>

      {/* Slide-out Sidebar Drawer */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectDetails}
        gradient={modalBg}
      />
    </section>
  );
}
