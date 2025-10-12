import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'Amazing experience with Travelogy India! The Tirthan Valley trip was perfectly organized. Every detail was taken care of, and our guide was knowledgeable and friendly. Highly recommend!',
    tour: 'Tirthan Valley Adventure'
  },
  {
    name: 'Rahul Verma',
    location: 'Delhi, India',
    rating: 5,
    text: 'The Zanskar trek was a dream come true! The team ensured our safety while giving us the adventure of a lifetime. Worth every penny!',
    tour: 'Zanskar Budget Trip'
  },
  {
    name: 'Sneha Patel',
    location: 'Bangalore, India',
    rating: 5,
    text: 'Our Malaysia tour was absolutely wonderful. From the Twin Towers to Genting Highlands, everything was well-planned. Thank you Travelogy India!',
    tour: 'Malaysia Delight'
  },
  {
    name: 'Amit Kumar',
    location: 'Pune, India',
    rating: 5,
    text: 'Best travel agency I have worked with! Professional, responsive, and they truly care about making your trip memorable. The Tungnath trek was breathtaking!',
    tour: 'Tungnath Chandrashila Trek'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from our happy travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-sky-200" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-sm text-sky-600 mt-1">{testimonial.tour}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Join thousands of happy travelers who trusted us with their dream vacations!
          </p>
        </div>
      </div>
    </section>
  );
}
