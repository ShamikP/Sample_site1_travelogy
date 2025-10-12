import { Heart, Award, Shield, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Travelogy India</h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about transforming your travel aspirations into unforgettable journeys
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Travelogy India, we believe that travel should be accessible to everyone. We specialize in
              crafting well-planned, affordable domestic and international tours that cater to all types of
              travelers - from adventure enthusiasts to those seeking luxury escapes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're exploring the majestic Himalayas, discovering hidden gems in Tirthan Valley,
              or experiencing the vibrant culture of Malaysia, we ensure every trip is meticulously planned
              and executed with care.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="h-12 w-12 text-coral-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Passion Driven</h4>
              <p className="text-gray-600">We love what we do and it shows in every trip</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Award className="h-12 w-12 text-sky-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Excellence</h4>
              <p className="text-gray-600">Award-winning service and experiences</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-coral-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Trust & Safety</h4>
              <p className="text-gray-600">Your safety is our top priority</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Compass className="h-12 w-12 text-sky-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Expert Guides</h4>
              <p className="text-gray-600">Experienced local guides for authentic experiences</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">Budget Friendly</div>
              <p className="text-sky-100">Affordable packages without compromising quality</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Customizable</div>
              <p className="text-sky-100">Tailor-made itineraries to suit your preferences</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7 Support</div>
              <p className="text-sky-100">Round-the-clock assistance throughout your journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
