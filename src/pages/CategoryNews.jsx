import { useLoaderData } from "react-router-dom";
import SingleNewsCard from "../components/SingleNewsCard";

const CategoryNews = () => {
    const { data: news } = useLoaderData();

    return (
      <div>
        <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-[#403F3F]">
          Dragon News Home
        </h2>
        <p className="text-gray-400 text-base font-semibold">
            {news.length} News Found on This Category
        </p>
        </div>
        <div className="flex flex-col gap-8">
            {
                news.map(singleNews => <SingleNewsCard key={singleNews._id} news={singleNews}></SingleNewsCard>)
            }
        </div>
      </div>
    );
};

export default CategoryNews;