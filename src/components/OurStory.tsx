import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-oat px-4 py-8">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="font-dancing text-4xl md:text-5xl text-charcoal-800 mb-4">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto rounded-full"></div>
        </div>

        {/* Story Content */}
        <div className="space-y-12">
          {/* How We Met */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-charcoal-800 font-cormorant font-bold text-3xl">How We Met</h2>
              <p className="text-charcoal-600 leading-relaxed font-cormorant text-lg">
                The story of how we met is quite unremarkable and typical for this day and age. It's the timing of our first in person meeting that the romance begins. Thanks to lockdown it was an old fashioned courtship which entailed weeks of walking dates. The January snow the perfect backdrop for our first few meetings and a legendary snowball fight which was when we both knew this was something special (Alison by the lack of care about her hair looked and Frank by the killer shot that resulted in a piece of snow getting lodged in his ear). As the days got warmer, so did our hearts...
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {/*Meeting Image*/}
              <ImageWithFallback
                src="./walking.jpg"
                alt="Frank and Alison's hiking around Buttermere"
                className="w-full h-64 object-cover">
              </ImageWithFallback>
            </div>
          </div>

          {/* The Engagement */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg md:order-1">
             {/*Engagement Image*/}
              <ImageWithFallback
                src="./stainglass.jpg"
                alt="Alison looking out over Lake Windermere at Claife Viewing Station"
                className="w-full h-64 object-cover">
              </ImageWithFallback>
            </div>
            <div className="space-y-4 md:order-2">
              <h2 className="text-charcoal-800 font-cormorant font-bold text-3xl">The Engagement</h2>
              <p className="text-charcoal-600 leading-relaxed font-cormorant text-lg">
                The proposal was a real shock!
              </p>
            </div>
          </div>

          {/* Looking Forward */}
          <div className="text-center bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8">
            <h2 className="text-2xl text-charcoal-800 mb-4">Looking Forward</h2>
            <p className="text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
              We're so excited to celebrate this special day with all our family and friends. 
              The Lake District holds such a special place in our hearts, and we can't wait to 
              create new memories there with all the people we love most. Thank you for being 
              part of our journey!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-charcoal-600 mb-4">Ready to celebrate with us?</p>
          <button 
            className="font-cormorant bg-pink-200 hover:bg-pink-300 text-charcoal-800 px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-lg font-bold"
            onClick={() => window.open('#', '_blank')}
          >
            RSVP with us
          </button>
        </div>
      </div>
    </div>
  );
}