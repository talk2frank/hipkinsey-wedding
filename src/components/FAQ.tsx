import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "What time should I arrive?",
      answer: "If you are attending the ceremony please be in your seats for at 1pm ready for the ceremony to begin at 1.30pm."
    },
    {
      question: "What should I wear?",
      answer: "We don't have a strict dress code but we have a few asks: tattoos to be covered where possible, no trainers or jeans and that men wear shirt, tie and jacket if invited to the ceremony."
    },
    {
      question: "Is there parking available?",
      answer: "Yes! Cragwood Country House Hotel has complimentary parking for all wedding guests. The venue is easily accessible by car, and we recommend carpooling when possible."
    },
    {
      question: "Will there be food for dietary restrictions?",
      answer: "Absolutely! There' s a space on the RSVP form for you to let us know about any dietary requirements."
    },
    {
      question: "Can I bring a plus-one?",
      answer: "We've allocated plus-ones based on our venue capacity. If your invitation includes 'and guest,' then yes! If you're unsure, please check your invitation or contact us directly."
    },
    {
      question: "What other accommodation options are available?",
      answer: "Cragwood Country House is located 2.5 miles from Windermere railway station, 2.6 miles from Troutbeck and 2.7 miles from Ambleside town centre so there are plenty of Bed & Breakfasts, Air B&B's etc available. Please bear in mind that the wedding takes place on May Bank Holiday weekend which will affect availability. For those who have camper vans, you are able to use the car park at Cragwood but bear in mind there will be no electrical hook up or toilet block. There is a breakfast option available for you at £15 per head. Please get in touch with Frank or Alison if you'd like to arrange this."
    },
    {
      question: "Can I book a room in the hotel?",
      answer: "Cragwood Country House is a beautiful hotel but small with just 22 rooms. While we would love to have all our guests stay with us in the hotel we've prioritised our day guests and allocated rooms on this basis. Note: The hotel is blocked out for exclusive use on Saturday 23rd May so room allocation is through Frank and Alison. If you are staying in the hotel and have specific needs around accessibility etc or if you would like to pay for your room in instalments please get in touch with Frank and Alison directly. The balance for your room is due on check-out."
    },
    {
      question: "What are the check in and check out times?",
      answer: "Check in is 3pm, check out 11am, a late check out of 12pm can be arranged at an additional cost."
    },
    {
      question: "Bringing alcohol",
      answer: "If you would like to bring a bottle of wine etc to enjoy during your stay you are welcome to do this. However, it must be consumed in your room, any drinks found being consumed outside your room that has not been purchased in the hotel will incur a fine of £1,000 which you will be liable to pay."
    },
    {
      question: "What about confetti?",
      answer: "Confetti will be provided, if you would like to bring your own please ensure it is biodegradable."
    },
    {
      question: "Will there be transportation provided?",
      answer: "The ceremony and reception are both at the same venue, so no transportation between events is needed. For getting to and from the venue, we recommend driving or arranging taxis. We can provide local taxi company recommendations."
    },
    {
      question: "What are the local transport options?",
      answer: "Cragwood is about 10 minutes drive from Windermere town center. Local taxi companies include Lakes Taxis (015394 48000), Windermere Taxis (015394 46464), Amber Taxis (015394 68681), and Ace Taxi Windermere (015394 45445). We recommend pre-booking taxis ASAP especially return journeys with it being a bank holiday weekend. The nearest train station is Windermere station, about 4 miles away. You can also get to Cragwood via Bus, the nearest stop is Brockhole which is next door to Cragwood. Use the Stagecoach app for live tracking for Brockhole: 555 last bus heading towards Grassmere and Ambleside (North) 22:36, last buses heading towards Kendal and Windermere (South) 23:24, 599 also available during the day."
    },
    {
      question: "What about gifts?",
      answer: "Your presence is the greatest gift! If you'd like to give something, we've set up a small registry and would also greatly appreciate contributions to our honeymoon fund. Details will be shared closer to the date."
    },
    {
      question: "Will the ceremony be outdoors?",
      answer: "The ceremony will take place inside. However, we plan to take advantage of Cragwood's beautiful gardens and the stunning views of Lake Windermere after the ceremony - weather permitting."
    },
    {
      question: "Can children attend?",
      answer: "Absolutely not. We've decided to keep our wedding child-free to create a more relaxed atmosphere for everyone. We hope you understand and can still celebrate with us."
    },
    {
      question: "Is there a hashtag for photos?",
      answer: "Yes! Please use #HipkinseyWedding2026 when sharing photos on social media. We'd love to see the day through your eyes and collect all the wonderful memories!"
    },
    {
      question: "What's the weather like in May?",
      answer: "May in the Lake District is usually lovely! Expect temperatures around 15-18°C (60-65°F) with possible light showers. We recommend bringing a light jacket or wrap for the evening."
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
            onClick={() => window.open('#', '_blank')}
          >
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
}