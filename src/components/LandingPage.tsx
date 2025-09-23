import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-oat flex flex-col items-center justify-start md:justify-center px-4 pt-8 pb-4 md:py-8">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        {/* Welcome Text */}
        <p className="font-cormorant text-xl text-charcoal-600 mb-2">
          Welcome to
        </p>
        
        {/* Main Title */}
        <h1 className="font-great-vibes text-4xl md:text-6xl lg:text-7xl text-charcoal-800 mb-4">
          The Hipkinsey Wedding
        </h1>
        
        {/* Event Details */}
        <div className="space-y-3 mb-8">
          <p className="font-cormorant text-xl text-charcoal-700">23rd of May 2026</p>
          <p className="font-cormorant text-xl text-charcoal-600">
            Cragwood Country House Hotel, Windermere
          </p>
          <p className="font-cormorant text-xl text-charcoal-600">
            Ceremony at 1:30pm & Evening Reception at 7:30pm
          </p>
        </div>

        {/* Hero RSVP Button */}
        <div>
          <button 
            className="font-cormorant bg-pink-200 hover:bg-pink-300 text-charcoal-800 px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-lg font-bold"
            onClick={() => window.open('#', '_blank')}
          >
            RSVP with us
          </button>
        </div>
      </div>

      {/*Venue Image*/}
      <ImageWithFallback 
        src="/venue.png" 
        alt="Cragwood Country House Hotel illustration by Frank and Alison" 
        className="w-full max-w-2xl rounded-lg">
      </ImageWithFallback>

      
    </div>
  );
}