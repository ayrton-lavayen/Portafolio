import React, { useState, useEffect, useRef } from 'react';

const words = ["Modernos", "Creativos", "Responsivos", "Intuitivos", "Innovadores"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [subLength, setSubLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [blobs, setBlobs] = useState([
    { x: 10, y: 15, vx: 0.3, vy: 0.2, size: 400 },
    { x: 60, y: 50, vx: -0.25, vy: 0.35, size: 300 },
    { x: 35, y: 75, vx: 0.2, vy: -0.3, size: 350 }
  ]);
  
  const animationRef = useRef();

  // Floating background blobs animation loop
  useEffect(() => {
    const updateBlobs = () => {
      setBlobs(prevBlobs => 
        prevBlobs.map(blob => {
          let { x, y, vx, vy, size } = blob;
          x += vx;
          y += vy;
          
          if (x <= 0 || x >= 85) vx = -vx;
          if (y <= 0 || y >= 80) vy = -vy;
          
          return { x, y, vx, vy, size };
        })
      );
      animationRef.current = requestAnimationFrame(updateBlobs);
    };

    animationRef.current = requestAnimationFrame(updateBlobs);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Word typing / erasing animation logic
  useEffect(() => {
    const currentWord = words[wordIndex];
    
    // Typing delay is 100ms, deleting delay is 50ms
    const delay = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (subLength > 0) {
          setSubLength(subLength - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      } else {
        if (subLength < currentWord.length) {
          setSubLength(subLength + 1);
        } else {
          // Pause at full word for 1500ms, then start deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [subLength, isDeleting, wordIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex flex-col justify-center section-padding pb-12 md:pb-20 overflow-hidden py-[100px] md:py-[130px] pt-[120px] md:pt-[150px]"
    >
      {/* Dynamic Animated Blobs */}
      {blobs.map((blob, idx) => (
        <div
          key={idx}
          className="absolute rounded-full blur-[120px] pointer-events-none bg-primary"
          style={{
            width: blob.size,
            height: blob.size,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            opacity: 0.15,
            willChange: "transform",
            transition: "left 0.1s linear, top 0.1s linear"
          }}
        />
      ))}

      {/* Glassmorphic backdrop blur layer */}
      <div className="absolute inset-0 z-[1] backdrop-blur-[60px] bg-background/40" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-0 mt-6 md:mt-[50px] my-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-[35px]">
        {/* Text Area */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-display font-extrabold sm:text-5xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight mb-6 md:mb-8 text-5xl">
            Sitios Webs
            <br />
            <span className="text-primary">
              {words[wordIndex].substring(0, subLength)}
            </span>
            <span className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 animate-pulse align-baseline" />
          </h1>

          <div className="flex flex-col items-start gap-8 md:gap-[60px] my-8 md:my-[50px] mt-8 md:mt-[50px]">
            <p className="w-full text-muted-foreground leading-relaxed md:text-2xl text-lg">
              ¡Hola! Soy Ayrton ⚡ (sí, como Senna de la F1 🏁). Apasionado por la tecnología y enfocado en crear modernos sitios webs. Si necesitas un sitio web para tu negocio, emprendimiento o uso personal, cuéntame los detalles de tu proyecto. Te ayudaré con una estimación de tiempo y costo, sin vueltas y directo a la meta.
            </p>

            <button 
              onClick={scrollToProjects}
              className="flex items-center gap-2 font-medium border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors duration-300 text-sm md:text-base px-5 md:px-[25px] py-3 md:py-[15px] border-2"
            >
              Desplázate hacia abajo <span className="text-lg">↓</span>
            </button>
          </div>
        </div>

        {/* 3D Spline IFrame Container */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-sm border border-border/20 bg-card/10">
          <iframe 
            src="https://my.spline.design/3dcubes-DMowcjGBy8SkvmQRwfqB53kZ-DRJ/" 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            className="w-full h-full"
            title="Spline 3D cubes model"
          />
        </div>
      </div>
    </section>
  );
}
