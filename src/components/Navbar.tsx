import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img
              src="/503284595_18345201733080286_2211317365510170768_n.jpg"
              alt="Travelogy India"
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-sky-500 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-sky-500 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('tours')} className="text-gray-700 hover:text-sky-500 transition-colors font-medium">
              Tours
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-sky-500 transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-sky-500 transition-colors font-medium">
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-sky-500 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-500 rounded-md">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-500 rounded-md">
              About
            </button>
            <button onClick={() => scrollToSection('tours')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-500 rounded-md">
              Tours
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-500 rounded-md">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-500 rounded-md">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
