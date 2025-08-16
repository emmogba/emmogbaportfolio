import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappNumber = '+2349021483189';
  const message = encodeURIComponent(
    "Hi! I'm interested in discussing a project opportunity with you. I saw your portfolio and would like to schedule a consultation."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const isProjectsVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isProjectsVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      {/* Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isExpanded ? (
          // Expanded Card
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Let's Connect!</h3>
                  <p className="text-sm text-gray-600">Book a consultation</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-700 mb-4 text-sm">
              Ready to bring your project to life? Let's discuss your ideas and how I can help you achieve your goals.
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start WhatsApp Chat</span>
            </button>
            
            <p className="text-xs text-gray-500 mt-2 text-center">
              Usually responds within a few hours
            </p>
          </div>
        ) : (
          // Collapsed Button
          <button
            onClick={() => setIsExpanded(true)}
            className="group relative bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
          >
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 animation-delay-75" />
            
            {/* Icon */}
            <MessageCircle className="w-6 h-6 relative z-10" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Book a Consultation
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
            </div>
          </button>
        )}
      </div>
    </>
  );
};