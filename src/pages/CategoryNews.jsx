import { useLoaderData } from "react-router-dom";
import SingleNewsCard from "../components/SingleNewsCard";




const CategoryNews = () => {
    const { data: news } = useLoaderData();

    return (
      <div>
        <h2 className="text-lg font-semibold text-[#403F3F] mb-3">
          Dragon News Home
        </h2>
        <p className="text-gray-400 text-sm font-semibold">{news.length} News Found on This Category</p>
        <div>
            {
                news.map(singleNews => <SingleNewsCard key={singleNews._id} news={singleNews}></SingleNewsCard>)
            }
        </div>
      </div>
    );
};

export default CategoryNews;