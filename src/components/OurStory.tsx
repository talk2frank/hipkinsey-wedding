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
          <div className="flex flex-col sm:flex-row md:gap-8 items-center w-full">
            <div className="space-y-4 sm:w-1/2">
              <h2 className="text-charcoal-800 font-cormorant font-bold text-3xl">How We Met</h2>
              <p className="text-charcoal-600 leading-relaxed font-cormorant text-lg">
                Snow threatened to derail our first date, and our second, and third come to that. 
                Thanks to lockdown there was nowhere to grab a quick coffee, 
                “a few drinks” or junk yard golf, designed to distract from how nervous and awkward first dates are. 
                We had no choice but to sit in our discomfort, on a more traditional courtship, 
                and spend our first few months outside; getting to know each other the old fashioned way. 
                It was on one of these snowy dates in January 2021 that a ferocious snowball fight changed everything 
                and I finally got to see Frank. As I launched my final, deafening (it landed in his ear) attack, 
                I realised this was someone who I was going to laugh with, have fun with, and be myself with. 
                I was right. Over the last four years we’ve created so many amazing memories; 14 plane journeys, 
                walked 20 fells, shed countless tears of laughter, survived three Glastobury’s, and had one proposal.
              </p>
            </div>
            <div className="sm:w-1/2">
              {/*Meeting Image*/}
              <ImageWithFallback
                src="./image1.png"
                alt="Frank and Alison's first year together. Forur pictures including selfies in Buttermere, at a wwaterfall, Lyzzick hall, and Ingleton"
                className="h-full h-64 object-contain">
              </ImageWithFallback>
            </div>
          </div>


          {/* The Engagement */}
          <div className="flex flex-col-reverse sm:flex-row md:gap-8 items-center w-full">
            <div className="sm:w-1/2">
             {/*Engagement Image*/}
              <ImageWithFallback
                src="./image2.png"
                alt="Frank and Alison since the enagagement, four pictures inluding Claife Viewing Station, Coniston, Harrison Stickle, and Horsforth in the snow"
                className="h-full h-64 object-contain">
              </ImageWithFallback>
            </div>
            <div className="space-y-4 sm:w-1/2">
              <h2 className="text-charcoal-800 font-cormorant font-bold text-3xl">The Engagement</h2>
              <p className="text-charcoal-600 leading-relaxed font-cormorant text-lg">
                It was a hot sunny day on the west bank of lake Windermere, she still hadn't guessed. I don't think. 
                I watched her gazing South, framed by the stain glass viewing point of Claife Viewing Station. 
                I remember thinking it would be the last time I'd look at her as 'my girlfriend', 
                and unless I'd drastically misjudged things, she'd soon be 'my fiance'. 
                It had been over 6 months since I'd asked her father for her hand, 
                2 months since I'd bought the ring, and what felt like a very long time waiting for the perfect moment. 
                This was it. Well, at least it would be...if I could work out how to open the box. 
                "I have a question to ask you... once I can get this box open". 
                I didn't get the chance to put the ring on her finger, it was out and on her hand in a flash. 
                Yes it was the perfect moment, and I knew there were more perfect moments to come... to be continued...
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
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdEKGsEr5HUDC_if_RIcEdsfb-kJR3B1JXQZQK37BIkxVEVRA/viewform?usp=dialog', '_blank')}
          >
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
}