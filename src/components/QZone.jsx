import swimmingGallery from "../assets/swimming.png"
import classGallery from "../assets/class.png"
import playGroundGallery from "../assets/playground.png"

const QZone = () => {
    return (
      <div className="py-4 bg-[#F3F3F3] mt-6">
        <h2 className="text-lg font-semibold text-[#403F3F] mb-2 ml-4">Q-Zone</h2>
        <div className="flex flex-col gap-4">
          <img src={swimmingGallery} alt="" />
          <img src={classGallery} alt="" />
          <img src={playGroundGallery} alt="" />
        </div>
      </div>
    );
};

export default QZone;