import { FaEye } from "react-icons/fa6";
import { HiOutlineBookmark } from "react-icons/hi";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleNewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className="border-2 p-4 bg-white rounded-lg shadow-xl">
      {/* Author Information */}
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{news.author.name}</p>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto flex items-center gap-1 text-[#706F6F] text-xl font-bold cursor-pointer">
          <HiOutlineBookmark className=" " />
          <IoShareSocialOutline className="" />
        </div>
      </div>
      {/* Title */}
      <h2 className="text-xl font-semibold mb-4">{news.title}</h2>
      {/* Thumbnail Image */}
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full  object-cover rounded-lg mb-8"
      />
      {/* Details */}
      <p className="text-[#706F6F] text-base font-medium mb-4 pb-5 border-b-2">
        {news.details.slice(0, 180)}...{" "}
        <Link to={`/news/${news._id}`} className="text-orange-600 font-semibold">
          Read More
        </Link>
      </p>
      {/* Ratings and Views */}
      <div className="flex items-center justify-between text-gray-600 text-sm">
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-[#FF8C47] font-semibold text-xl ${
                i < Math.round(news.rating.number) ? "" : "opacity-50"
              }`}
            />
          ))}
          <span className="ml-2 font-semibold text-lg text-[#706F6F]">
            {news.rating.number}
          </span>
        </div>
        {/* Views */}
        <div className="flex items-center font-semibold text-lg text-[#706F6F]">
          <FaEye className="mr-2" />
          <span className="text-base">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsCard;