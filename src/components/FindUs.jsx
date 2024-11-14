import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-[#403F3F] mb-3">Find Us On</h2>
      <div className="join join-vertical flex *:bg-white">
        <button className="btn join-item h-[4rem] justify-start py-4 text-[#3B599C] items-center font-semibold text-lg">
          <FaFacebookF className="" />
          Facebook
        </button>
        <button className="btn join-item h-[4rem] justify-start py-4 text-[#58A7DE] items-center font-semibold text-lg">
          <FaTwitter />
          Twitter
        </button>
        <button className="btn join-item h-[4rem] justify-start py-4 text-[#D82D7E] items-center font-semibold text-lg">
          <FaSquareInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
