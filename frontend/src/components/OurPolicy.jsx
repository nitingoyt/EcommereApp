import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700  ">
      <div>
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange Sewa</p>
        <p className="text-gray-400">We Offer free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Lifetime Return Policy </p>
        <p className="text-gray-400">We give life time return policy</p>
      </div>
      <div>
        <img src={assets.support_img } alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Best Customer Sewa</p>
        <p className="text-gray-400">We offer 24/7 customer sewa</p>
      </div>
    </div>
  );
};

export default OurPolicy;
