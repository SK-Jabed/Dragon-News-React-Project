

// const SingleNewsCard = ({ news }) => {
//     console.log(news);

//     return (
//         <div>
            
//         </div>
//     );
// };

// export default SingleNewsCard;



import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const SingleNewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className="max-w-lg mx-auto border border-gray-300 rounded-lg shadow-md p-4 my-4">
      <div className="flex items-center justify-between mb-4">
        {/* Author Info */}
        <div className="flex items-center space-x-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-md font-semibold">{news.author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        {/* Actions */}
        <div className="flex space-x-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800">{news.title}</h3>

      {/* Thumbnail */}
      <div className="my-4">
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <p className="text-sm text-gray-600">
        {news.details.slice(0, 150)}...{" "}
        <span className="text-blue-500 cursor-pointer">Read More</span>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          <FaStar />
          <span className="ml-1 text-gray-800 font-semibold">
            {news.rating.number}
          </span>
          <span className="ml-1 text-xs text-gray-500">
            ({news.rating.badge})
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-500">
          <FaEye />
          <span className="ml-1">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsCard;
