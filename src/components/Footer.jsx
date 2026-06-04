import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section-padding py-8 border-t border-border bg-background relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p className="text-muted-foreground text-center sm:text-left text-base w-full">
          &copy; {currentYear} Ayrton Lavayen
        </p>
      </div>
    </footer>
  );
}
