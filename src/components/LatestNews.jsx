import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
      <div>
        <div className="flex gap-4 items-center py-4 pl-4 pr-20 bg-[#F3F3F3]">
          <p className="text-lg font-medium text-white bg-[#D72050] px-7 py-3">
            Latest
          </p>
          <Marquee pauseOnHover={true} speed={100} className="space-x-4 text-[#403F3F] text-lg font-semibold">
            <Link to={"/news"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus laudantium explicabo.
            </Link>
            <Link to={"/news"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus laudantium explicabo.
            </Link>
            <Link to={"/news"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus laudantium explicabo.
            </Link>
          </Marquee>
        </div>
      </div>
    );
};

export default LatestNews;