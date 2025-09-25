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
                There’s nothing remarkable or romantic how the way we met, 
                it’s typical of the modern world. Our first meeting however, 
                and early dates were less typical of modern day. 
                Thanks to lockdown we embarked on an old fashioned courtship, 
                “stepping out” together every weekend; no restaurants, no cafe, 
                no bars, just walks. The January snow the perfect back drop for 
                getting to know each other and snowball fights that 
                marked the beginning of something special. We’d been “stepping out” 
                for five months before we were finally able to sit in a restaurant 
                together and by then it was a done deal.
                Over the last four years we’ve created so many amazing memories; 
                14 plane journeys, walked 20 fells, been to three Glastobury’s and had one proposal.
              </p>
            </div>
            <div className="">
              {/*Meeting Image*/}
              <ImageWithFallback
                src="./image1.png"
                alt="Frank and Alison's first year together. Forur pictures including selfies in Buttermere, at a wwaterfall, Lyzzick hall, and Ingleton"
                className="h-full h-64 object-cover">
              </ImageWithFallback>
            </div>
          </div>


          {/* The Engagement */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="">
             {/*Engagement Image*/}
              <ImageWithFallback
                src="./image2.png"
                alt="Frank and Alison since the enagagement, four pictures inluding Claife Viewing Station, Coniston, Harrison Stickle, and Horsforth in the snow"
                className="h-full h-64 object-cover">
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
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
}