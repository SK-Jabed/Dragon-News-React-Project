import Advertisement from "../Advertisement";
import FindUs from "../FindUs";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
      <div>
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
        <QZone></QZone>
        <Advertisement></Advertisement>
      </div>
    );
};

export default RightNavbar;