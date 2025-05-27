import { Dispatch, SetStateAction } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

type Header = {
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Header({
  scrollToSection,
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
}: Header) {
  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-red-500/30 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/logo.png"
                alt="MB Exchange Logo"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-red-500/5 rounded-lg"></div>
            </div>
            <span className="text-2xl font-bold text-white">MB Exchange</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'features', label: 'Features' },
              { id: 'why-us', label: 'Why Us' },
              { id: 'testimonials', label: 'Reviews' },
              { id: 'contact', label: 'Contact' },
              { id: 'faq', label: 'FAQ' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-gray-300 hover:text-white transition-all duration-300 py-2 ${
                  activeSection === item.id ? 'text-red-400' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 animate-fade-in"></div>
                )}
              </button>
            ))}
            <Button
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 transform hover:scale-105 transition-all duration-200 p-6"
              onClick={() => scrollToSection('home')}
            >
              Download Now
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {[
                { id: 'features', label: 'Features' },
                { id: 'why-us', label: 'Why Us' },
                { id: 'testimonials', label: 'Reviews' },
                { id: 'contact', label: 'Contact' },
                { id: 'faq', label: 'FAQ' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-red-400 transition-colors text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-gradient-to-r from-red-600 to-red-700 text-white w-full mt-4"
                onClick={() => scrollToSection('home')}
              >
                Download Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
