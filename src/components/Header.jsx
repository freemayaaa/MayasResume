import { useState } from 'react';
import { Container } from './common/Container';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Summary', id: 'summary' },
    { label: 'Skills', id: 'skills' },
    { label: 'Work', id: 'work' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const downloadPDF = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 bg-gray-800 shadow-softer z-50 border-b border-gray-700">
      <Container>
        <div className="flex justify-between items-center py-5">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-serif font-bold text-primary hover:text-blue-400 transition-colors">
            Maya
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 items-center">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={downloadPDF}
              className="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm"
            >
              Download PDF
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-700">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={downloadPDF}
              className="block w-full text-left px-4 py-3 text-primary hover:bg-gray-700 transition-colors font-medium border-t border-gray-700"
            >
              📥 Download PDF
            </button>
          </nav>
        )}
      </Container>
    </header>
  );
}
