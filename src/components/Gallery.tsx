import { Camera } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Mountain Peaks',
    location: 'Himalayas'
  },
  {
    url: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Beach Paradise',
    location: 'Malaysia'
  },
  {
    url: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Cultural Heritage',
    location: 'India'
  },
  {
    url: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Trek Adventures',
    location: 'Uttarakhand'
  },
  {
    url: 'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'City Lights',
    location: 'Kuala Lumpur'
  },
  {
    url: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Valley Views',
    location: 'Tirthan Valley'
  },
  {
    url: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Snow Adventures',
    location: 'Ladakh'
  },
  {
    url: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Sunset Views',
    location: 'Beach Destinations'
  },
  {
    url: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'River Rafting',
    location: 'Himachal Pradesh'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Travel Gallery</h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing memories from our incredible journeys around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Camera className="h-6 w-6 mb-2" />
                  <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Want to see more? Follow us on social media!</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/tour__rabbit/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all"
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
