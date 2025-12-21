import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function GiftPage() {
  return (
    <div className="min-h-screen bg-oat flex flex-col items-center justify-start md:justify-center px-4 pt-8 pb-4 md:py-8">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        {/*Title */}
        <h1 className="font-great-vibes text-4xl md:text-6xl lg:text-7xl text-charcoal-800 mb-4">
          Gifts and Donations
        </h1>
        </div>

        {/* Event Details */}
        <div className="space-y-3 mb-8">
          <p className="font-cormorant text-xl text-charcoal-700">In lieu of a gift we'd really appreciate any donations to help us build our honeymoon fund. See the link and WR code below</p>
        </div>

        {/* Gift Link */}
        <div className="bg-gradient-to-r from-mint-50 to-emerald-50 rounded-2xl p-6 inline-block mb-8 shadow-md">
          <h2 className="font-cormorant text-2xl text-charcoal-800 mb-4">Honeymoon Fund</h2>
          <a href="https://settleup.starlingbank.com/alison-hipkin-frank-kinsey-5c53d5">Link to make a honeymoon donation</a>
        </div>

      {/*Venue Image*/}
      <ImageWithFallback 
        src="./weddingpaymentcode.png" 
        alt="QR code for honeymoon payments" 
        className="w-full max-w-2xl rounded-lg">
      </ImageWithFallback>

      
      
    </div>
  );
}