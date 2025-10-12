import { Calendar, MapPin, Users, Star } from 'lucide-react';

interface Tour {
  id: number;
  name: string;
  location: string;
  duration: string;
  price: string;
  date: string;
  type: 'domestic' | 'international';
  image: string;
  rating: number;
  highlights: string[];
}

const tours: Tour[] = [
  {
    id: 1,
    name: 'Malaysia Delight',
    location: 'Malaysia',
    duration: '7 Days',
    price: 'Starting from ₹45,000',
    date: '29 Nov 2025',
    type: 'international',
    image: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    highlights: ['Twin Towers', 'Genting Highlands', 'Cultural Tours']
  },
  {
    id: 2,
    name: 'Kuala Lumpur Escape',
    location: 'Kuala Lumpur, Malaysia',
    duration: '4D/3N',
    price: 'Starting from ₹35,000',
    date: 'Multiple Dates',
    type: 'international',
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    highlights: ['City Tour', 'Shopping Paradise', 'Street Food']
  },
  {
    id: 3,
    name: 'Tirthan Valley Adventure',
    location: 'Himachal Pradesh, India',
    duration: '5D/4N',
    price: 'Starting from ₹12,000',
    date: 'Multiple Dates',
    type: 'domestic',
    image: 'https://images.pexels.com/photos/1242764/pexels-photo-1242764.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    highlights: ['River Rafting', 'Camping', 'Nature Trails']
  },
  {
    id: 4,
    name: 'Tungnath Chandrashila Trek',
    location: 'Uttarakhand, India',
    duration: '6D/5N',
    price: 'Starting from ₹15,000',
    date: 'Multiple Dates',
    type: 'domestic',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    highlights: ['Highest Shiva Temple', 'Snow Trek', 'Sunrise Views']
  },
  {
    id: 5,
    name: 'Zanskar Budget Trip',
    location: 'Ladakh, India',
    duration: '8D/7N',
    price: 'Starting from ₹18,000',
    date: '15 August',
    type: 'domestic',
    image: 'https://images.pexels.com/photos/1058771/pexels-photo-1058771.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5.0,
    highlights: ['Frozen River Trek', 'Monasteries', 'Local Culture']
  },
  {
    id: 6,
    name: 'Zanskar Luxury Trip',
    location: 'Ladakh, India',
    duration: '10D/9N',
    price: 'Starting from ₹35,000',
    date: 'Multiple Dates',
    type: 'domestic',
    image: 'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5.0,
    highlights: ['Premium Stay', 'Private Transport', 'Exclusive Tours']
  }
];

export default function Tours() {
  const domesticTours = tours.filter(tour => tour.type === 'domestic');
  const internationalTours = tours.filter(tour => tour.type === 'international');

  const handleBookNow = (tourName: string) => {
    const message = `Hi! I'm interested in booking the ${tourName}. Can you provide more details?`;
    window.open(`https://wa.me/917678296843?text=${encodeURIComponent(message)}`, '_blank');
  };

  const TourCard = ({ tour }: { tour: Tour }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img src={tour.image} alt={tour.name} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-4 right-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {tour.type === 'domestic' ? 'Domestic' : 'International'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{tour.name}</h3>
        <div className="flex items-center text-yellow-500 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.floor(tour.rating) ? 'fill-current' : ''}`} />
          ))}
          <span className="ml-2 text-gray-600 text-sm">({tour.rating})</span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-sky-500" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2 text-sky-500" />
            <span>{tour.duration} • {tour.date}</span>
          </div>
        </div>
        <div className="border-t pt-4 mb-4">
          <p className="text-sm text-gray-600 font-semibold mb-2">Highlights:</p>
          <div className="flex flex-wrap gap-2">
            {tour.highlights.map((highlight, index) => (
              <span key={index} className="bg-sky-50 text-sky-700 px-2 py-1 rounded-full text-xs">
                {highlight}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-sky-600">{tour.price}</p>
            <p className="text-xs text-gray-500">per person</p>
          </div>
          <button
            onClick={() => handleBookNow(tour.name)}
            className="bg-coral-500 hover:bg-coral-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Tours</h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of incredible destinations and experiences
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <MapPin className="h-8 w-8 text-coral-500 mr-3" />
            International Tours
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <MapPin className="h-8 w-8 text-sky-500 mr-3" />
            Domestic Tours - India
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <Users className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-xl mb-6">We offer custom tour packages tailored to your preferences!</p>
          <button
            onClick={() => window.open('https://wa.me/917678296843?text=Hi! I would like to discuss a custom tour package.', '_blank')}
            className="bg-white text-sky-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Request Custom Tour
          </button>
        </div>
      </div>
    </section>
  );
}
