import { useLoaderData } from "react-router-dom";
import SingleNewsCard from "../components/SingleNewsCard";




const CategoryNews = () => {
    const { data: news } = useLoaderData();

    return (
      <div>
        <h2 className="text-lg font-semibold text-[#403F3F]">
          Dragon News Home
        </h2>
        <p className="text-gray-400 text-sm font-semibold mb-3">{news.length} News Found on This Category</p>
        <div className="flex flex-col gap-8">
            {
                news.map(singleNews => <SingleNewsCard key={singleNews._id} news={singleNews}></SingleNewsCard>)
            }
        </div>
      </div>
    );
};

export default CategoryNews;