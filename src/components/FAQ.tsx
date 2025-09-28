import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "I can’t make the wedding, will it be streamed?",
      answer: "Yes. We know that travelling to Windermere isn’t possible for everyone and we completely understand. We’re working out the best channel to use, so those who can’t make it can watch remotely. Just add your email address to your RVSP form and we’ll make sure we send the details when it’s set up."
    },
    {
      question: "What time should I arrive?",
      answer: "Please be in your seats by 1:00pm, the ceremony will start at 1:30pm. We ask evening guests to arrive at 7:30pm."
    },
    {
     question: "How do I get to/from Cragwood Country House Hotel?",
     answer: "The easiest way to get to Cragwood Country House is by car and is a 10 minutes drive north from Windermere town center.\n\nThe nearest railway station is Windermere station, about 4 miles away.\n\nLocal taxi companies include:\nLakes Taxis (015394 48000),\nWindermere Taxis (015394 46464),\nAmber Taxis (015394 68681),\nAce Taxi Windermere (015394 45445),\nWe recommend pre-booking taxis ASAP especially return journeys with it being a bank holiday weekend.\n\nYou can also get to Cragwood via Bus (555 or 599) the nearest stop is Brockhole which is next door to Cragwood Country House.\nThe 599 service is daytime only, the 555 bus is the main bus line\nThe last bus heading towards Grassmere and Ambleside (North) is at 22:36,\nThe last bus heading towards Kendal and Windermere (South) is at 23:24,\nYou can use the Stagecoach app for live bus tracking."
    }, 
    {
     question: "Is there parking available?",
     answer: "Cragwood Country House Hotel has complimentary parking for all our guests. The venue is easily accessible by car. We recommend car sharing where possible."
    }, 
    {
     question: "Can I book a room in the hotel?",
     answer: "Cragwood Country House is a beautiful hotel but small, with just 22 rooms. While we would love to have all our guests stay with us in the hotel we've prioritised our day guests and allocated rooms on this basis and have been in touch with them already. If you’re not sure if we’ve allocated you a room please get in touch."
    },
     {
     question: "I have a room, what do I need to do?",
     answer: "No need to contact the hotel, all bookings are allocated by us. If you have specific accomodation needs or you would like to pay for your room in instalments please get in touch with us. Note: Any remaining balance for your room is due on check-out."
    },
     {
     question: "What are the check-in and check-out times?",
     answer: "Check in is 3pm on the Friday, rooms will be ready for the Saturday. Check out is 11am, a late check out of 12pm carries an additional cost and can be arranged at check-in."
    },
     {
     question: "What other accommodation options are available?",
     answer: "Cragwood Country House is 2.5 miles from Windermere railway station, 2.6 miles from Troutbeck and 2.7 miles from Ambleside town centre so there are plenty of Bed & Breakfasts, AirBNBs, cottages etc available.\nPlease bear in mind that the wedding takes place on May bank holiday weekend which will affect availability so book soon if you have not done so already."
    },
     {
     question: "Can I camp on site?",
     answer: "There are plenty of campsites in the area. Camper vans are welcome in the hotel car park but bear in mind there will be no electrical hook up. There is a breakfast option available at £15 per head if required. Please get in touch with us directly if you would like to book breakfast or have any questions."
    },
     {
     question: "Will there be food for evening guests?",
     answer: "Yes. We’ll be serving mini fish and chips. If you have any dietary requirements please let us know when you RSVP. "
    },
     {
     question: "Will dietary requirements be catered for?",
     answer: "Absolutely. There’s a space on the RSVP form for you to let us know about and dietary requirements."
    },
     {
     question: "What time does it all end?",
     answer: "Don't remind us! But yes it will end, the last song will finish at midnight with last orders at the bar 12:45am."
    },
     {
     question: "Is there a dress code?",
     answer: "We have a just few asks for our day guests:\nMen should be in shirts, jackets, and ties\nPlease no jeans or trainers\nAny tattoos to be covered up where possible"
    },
     {
     question: "Should I bring a gift or wedding present?",
     answer: "Your presence is the greatest gift! If you'd like to gift something, we would greatly appreciate contributions to our honeymoon fund. We'll try set up a way to do that soon."
    },
     {
     question: "Can I bring a plus one?",
     answer: "We've allocated all plus-ones already, based on our venue capacity, and addressed our invitations accordingly. If you're unsure, please check your invitation or contact us directly."
    },
     {
     question: "Can children attend?",
     answer: "Sadly not. We've decided to keep our wedding child-free to create a more relaxed atmosphere for everyone. We hope you understand and can still celebrate with us."
    },
     {
     question: "Will the ceremony be outside?",
     answer: "The ceremony will be indoors. We hope to be able to make the most of Cragwood's beautiful grounds after the ceremony - weather permitting (it is the lakes after all). "
    },
     {
     question: "Can I bring confetti?",
     answer: "Confetti will be provided. If you would like to bring your own please make sure it is biodegradable."
    },
     {
     question: "Can I bring my own alcohol?",
     answer: "If you would like to bring a bottle of wine etc to enjoy in your room during your stay you are welcome to do so. However, it must be consumed in your room, any drinks found being consumed outside your room that has not been purchased in the hotel (or the appropriate corkage paid) will incur a fine of £1,000 which you will be liable to pay. If you intend on bringing alcohol to consume outside your room (e.g. a special toast) please let us know so we can make any necessary arrangments."},
     {
     question: "Can I smoke and vape on the premises?",
     answer: "Smoking and vaping are not permitted inside the hotel or outside the front of the hotel/garden. We will make arrangements for a smoking area and let you know where this is. Please be mindful of our none smoking/vaping guests. "
    },
     {
     question: "What will the the weather be like, what should I wear?",
     answer: "May in the Lake District is usually lovely! Expect temperatures around 15-18°C though showers are likely. We alo recommend bringing a light jacket or wrap for the evening"
    }
  ];

  return (
    <div className="min-h-screen bg-oat px-4 py-8">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="font-dancing text-4xl md:text-5xl text-charcoal-800 mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto rounded-full"></div>
          <p className="text-charcoal-600 mt-6">
            Everything you need to know about our special day
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-2xl px-6 py-2 bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-50 hover:to-rose-50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="text-charcoal-800">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2">
                  <p className="text-charcoal-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gradient-to-r from-mint-50 to-emerald-50 rounded-2xl p-8">
          <h2 className="text-2xl text-charcoal-800 mb-4">Still Have Questions?</h2>
          <p className="text-charcoal-600 mb-6">
            Don't hesitate to get in touch. We have a joint email address for any queries (but let's be honest Alison is running the show so expect a reply from her.)
          </p>
          <div className="space-y-2 text-charcoal-600">
            <p>Email: hipkinsey@gmail.com</p>
            <p>Phone: 07729 807 020</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
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