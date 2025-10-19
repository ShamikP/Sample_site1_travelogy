import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Youtube } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'm ${formData.name}.\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919618165352?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey? Contact us today and let's plan your next adventure!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <a href="tel:+919618165352" className="text-gray-600 hover:text-sky-600 transition-colors">
                    +91 96181 65352
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <a href="mailto:tourrabbit456@gmail.com" className="text-gray-600 hover:text-sky-600 transition-colors">
                    tourrabbit456@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">Serving travelers across India</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Follow Us</h4>
              <p className="mb-6">Stay updated with our latest tours and travel tips!</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/tour__rabbit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your dream trip..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-coral-500 hover:bg-coral-600 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
