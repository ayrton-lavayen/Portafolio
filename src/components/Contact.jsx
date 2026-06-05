import React from 'react';
import { Mail, Phone, Calendar, Link2 } from 'lucide-react';
import profilePhoto from '../../public/uploads/deee9444-be8a-49f7-9258-49715e10c3a5.png';

export default function Contact() {
  return (
    <section 
      id="contacto" 
      className="section-padding py-12 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center mb-10 md:mb-16 tracking-tight">
          ¡Hablemos!
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Contact Details */}
          <div className="space-y-8">
            {/* Email Contact */}
            <div>
              <p className="text-muted-foreground text-sm mb-2 font-medium">
                Correo electrónico
              </p>
              
              <a 
                href="mailto:hi.ayrtonlavayen@gmail.com"
                className="inline-flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors duration-300 text-foreground"
              >
                <Mail size={20} className="text-foreground" />
                hi.ayrtonlavayen@gmail.com
              </a>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed max-w-sm text-lg">
              ¿Tienes un proyecto en mente? Me gustaría escucharlo y ayudarte a construir algo increíble.
            </p>

            {/* CTA Buttons (WhatsApp and Calendar) */}
            <div className="flex flex-col gap-4 w-full">
              <a 
                href="https://api.whatsapp.com/send?phone=593963206929"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-opacity duration-300 text-base py-[15px] px-[30px] border-foreground bg-inherit text-foreground border-2"
              >
                <i className="ti ti-brand-whatsapp text-[20px]" />
                Escribir por WhatsApp
              </a>
              
              <a 
                href="https://calendar.app.google/eYtjNB2j6cwEYJt4A"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground font-medium transition-colors duration-300 text-base text-background bg-foreground px-[30px] py-[15px] hover:bg-foreground/90"
              >
                <Calendar size={16} />
                Agendar llamada
              </a>
            </div>

            {/* LinkedIn Connection */}
            <div className="space-y-4 pt-4 border-t border-border">
              <p className="leading-relaxed max-w-sm text-lg text-muted-foreground">
                Abierto a conectar con colaboradores en áreas similares, para compartir ideas y crear proyectos juntos. ¡Será un gusto!
              </p>
              
              <a 
                href="https://www.linkedin.com/in/ayrtonlavayen/"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 text-primary-foreground text-sm md:text-base bg-primary py-[20px] px-[20px] hover:bg-primary/95 shadow-sm"
              >
                <i className="ti ti-brand-linkedin text-[20px]" />
                Conectar en LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative">
            {/* Background Blur Blob */}
            <div className="purple-blur w-[200px] h-[200px] md:w-[300px] md:h-[300px] absolute -bottom-10 -right-10 opacity-30 blur-[100px]" />
            
            {/* Profile Image Container */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-md ml-auto border border-border/20 shadow-md">
              <img 
                alt="Ayrton Lavayen" 
                className="w-full h-full object-cover"
                src={profilePhoto}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
