import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/919618165352?text=Hi! I would like to know more about your tours.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </button>
  );
}
