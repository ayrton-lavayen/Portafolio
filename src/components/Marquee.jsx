import React from 'react';
import { Star } from 'lucide-react';

const phrase = "construyendo experiencias digitales";
const repetitions = Array(8).fill(phrase);

export default function Marquee() {
  const renderItems = () => {
    return repetitions.map((text, idx) => (
      <span key={idx} className="flex items-center gap-4">
        <span className="font-display font-bold text-lg sm:text-2xl md:text-4xl uppercase tracking-wider">
          {text}
        </span>
        <Star className="text-primary fill-primary shrink-0" size={20} />
      </span>
    ));
  };

  return (
    <div className="bg-foreground text-background py-5 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee gap-4 w-max">
        <div className="flex items-center gap-4 shrink-0">
          {renderItems()}
        </div>
        <div className="flex items-center gap-4 shrink-0" aria-hidden="true">
          {renderItems()}
        </div>
      </div>
    </div>
  );
}
