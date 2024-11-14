import { RiGoogleFill } from "react-icons/ri";
import { RxGithubLogo } from "react-icons/rx";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#403F3F] mb-3">Login With</h2>
      <div className="flex flex-col gap-2">
        <button className="btn text-blue-700 text-lg font-medium bg-white border-2 border-blue-700 hover:text-white hover:bg-blue-400 hover:border-none hover:shadow-lg">
          <RiGoogleFill />
          Login with Google
        </button>
        <button className="btn text-[#403F3F] text-lg font-medium bg-white border-2 border-[#403F3F] hover:text-white hover:bg-[#403F3F] hover:border-none hover:shadow-lg">
          <RxGithubLogo />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
