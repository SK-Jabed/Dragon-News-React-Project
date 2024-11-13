import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-8">
      <div className="logo">
        <img className="w-[470px] h-[60px]" src={logo} alt="Logo Image" />
      </div>
      <h2 className="text-lg font-normal text-[#706F6F] my-2">
        Journalism Without Fear or Favour
      </h2>
      <p className="text-lg font-medium text-[#706F6F]">
        {moment().format("dddd, MMMM Do, YYYY")}
      </p>
    </div>
  );
};

export default Header;
