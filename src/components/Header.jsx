import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" }
];

import logo1 from '../../public/uploads/d252b019-aff6-46b0-bb87-7ce54540c5c6.png';
import logo2 from '../../public/uploads/fea7b05c-6a84-42e0-bde4-26ff4098ff2d.png';

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.replace("#", ""));
      let currentSection = sections[0];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-background/0"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-[30px] md:px-0">
          {/* Logo */}
          <img 
            alt="Vayen logo" 
            className="h-8 w-auto md:h-11 object-contain cursor-pointer"
            src={logo1}
            onClick={() => handleNavClick("#inicio")}
          />
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-foreground absolute left-1/2 -translate-x-1/2 py-[5px] px-[5px]">
            {navItems.map(item => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-5 py-2.5 rounded-full text-[15px] font-bold transition-all duration-300 ${
                    isActive 
                      ? "bg-background text-foreground" 
                      : "text-background hover:text-background/80"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Button */}
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors duration-300 px-[22px] py-[15px] text-base"
            href="https://api.whatsapp.com/send?phone=593963206929"
          >
            <Phone size={18} />
            Escribir por WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Content */}
      <div className={`fixed top-0 bottom-0 left-0 z-[70] w-[280px] bg-background shadow-2xl transition-transform duration-300 transform ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col h-full p-6 relative">
          {/* Close button inside Drawer */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full border border-border flex items-center justify-center hover:bg-muted"
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>

          {/* Mobile Logo */}
          <div className="mb-8 mt-2">
            <img 
              alt="Vayen logo" 
              className="w-10 h-10 object-contain"
              src={logo2}
            />
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-1 flex-1">
            {navItems.map(item => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                    isActive 
                      ? "bg-foreground text-background" 
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Call To Action */}
          <a 
            href="https://api.whatsapp.com/send?phone=593963206929"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors duration-300 px-5 py-3.5 mt-auto"
          >
            <Phone size={18} />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
