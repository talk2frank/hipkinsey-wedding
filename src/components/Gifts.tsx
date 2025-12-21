import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function GiftPage() {

  return (
    <div className="min-h-screen bg-oat flex flex-col items-center justify-start md:justify-center px-4 pt-8 pb-4 md:py-8">

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="font-dancing text-4xl md:text-5xl text-charcoal-800 mb-4">
            Gifts and Donations
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto rounded-full"></div>
          <p className="text-charcoal-600 mt-6">
            Your presence is gift enough but if you would like to gift us anything we'd really appreciate donations to help us build our honeymoon fund.</p>
          <a href="https://settleup.starlingbank.com/alison-hipkin-frank-kinsey-5c53d5" className="text-blue-600 text-decoration-line: underline mt-6">Link to make a honeymoon donation</a>
          </div>
         
  
      {/*Venue Image*/}
      <ImageWithFallback 
        src="./weddingpaymentcode.png" 
        alt="QR code for honeymoon payments" 
        className="rounded-lg"
        style={{ maxWidth: '200px' }}>
      </ImageWithFallback>



    </div>
  );
}