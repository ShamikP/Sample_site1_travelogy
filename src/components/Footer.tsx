import { Mail, Phone, Instagram, Youtube, MapPin, Heart, Code } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/Tour Rabbit.jpg"
                alt="Travelogy India"
                className="h-16 w-auto mb-2"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Turning your travel dreams into reality with affordable and curated trips across India and the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tour__rabbit/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-2 rounded-full transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-all"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tours')}
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                >
                  Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-sky-400 transition-colors cursor-pointer">Malaysia</li>
              <li className="hover:text-sky-400 transition-colors cursor-pointer">Tirthan Valley</li>
              <li className="hover:text-sky-400 transition-colors cursor-pointer">Tungnath</li>
              <li className="hover:text-sky-400 transition-colors cursor-pointer">Zanskar</li>
              <li className="hover:text-sky-400 transition-colors cursor-pointer">Kuala Lumpur</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                <a href="tel:+91 9618165352" className="text-gray-400 hover:text-sky-400 transition-colors">
                  +91 9618165352
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                <a href="mailto:tourrabbit456@gmail.com" className="text-gray-400 hover:text-sky-400 transition-colors break-all">
                tourrabbit456@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Serving travelers across India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © Tour Rabbit Holidays. All rights reserved.
            </p>
            <div className="flex flex-col items-center md:items-end space-y-2">
              <p className="text-gray-400 text-sm flex items-center">
                Made for travelers
              </p>
              <p className="text-gray-500 text-xs flex items-center">
                <Code className="h-3 w-3 mr-1" /> <b>Built by CtrlAltBuild <i>Technologies</i></b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
