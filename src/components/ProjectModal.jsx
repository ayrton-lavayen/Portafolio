import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { getImageUrl } from '../utils/imageMapper';

export default function ProjectModal({ project, isOpen, onClose, gradient }) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer content sliding from the right */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-1/2 bg-background shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 md:p-12 lg:p-16">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl">
                {project.title}
              </h2>
              <p className="text-muted-foreground mt-1 text-base md:text-lg">
                {project.category} · {project.date}
              </p>
            </div>
            
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300 text-foreground"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Project Image Banner */}
          <div 
            className="aspect-[4/3] rounded-2xl relative overflow-hidden mb-10 border border-border/20 shadow-inner"
            style={{ backgroundColor: gradient || project.bg_color || '#7c3aed' }}
          >
            <img 
              src={getImageUrl(project.image_url)} 
              alt={project.title} 
              className="absolute bottom-0 right-0 w-[95%] h-auto object-contain rounded-tl-lg"
            />
          </div>

          {/* Details */}
          <div className="w-full">
            <h3 className="font-display font-semibold mb-4 text-xl">
              Sobre el proyecto
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-8 text-base whitespace-pre-line">
              {project.description}
            </p>

            {project.project_url && (
              <a 
                href={project.project_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full justify-center inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors duration-300 text-base py-[18px] px-[30px]"
              >
                <ExternalLink size={18} />
                Ver proyecto
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
