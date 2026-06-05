import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section-padding py-8 border-t border-border bg-background relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground text-base">
          &copy; {currentYear} Ayrton Lavayen
        </p>
      </div>
    </footer>
  );
}
