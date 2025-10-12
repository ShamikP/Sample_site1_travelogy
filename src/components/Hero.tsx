import { MapPin, Users } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Turning Your Travel Dreams
            <br />
            <span className="text-coral-400">into Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow">
            Affordable, curated trips across India and the world
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('tours')}
              className="bg-coral-500 hover:bg-coral-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Explore Tours
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-gray-100 text-sky-600 font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
              <MapPin className="h-12 w-12 text-sky-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">50+ Destinations</h3>
              <p className="text-gray-600">Explore incredible places across India and abroad</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
              <Users className="h-12 w-12 text-coral-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">2000+ Happy Travelers</h3>
              <p className="text-gray-600">Join our community of adventure seekers</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">Quality trips tailored to your dreams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
