import { NavLink } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
      <div className="flex justify-between items-center mt-5">
        <div className=""></div>
        <div className="nav-menu text-lg font-medium text-[#706F6F] flex items-center gap-4 lg:ml-44">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        <div className="login flex items-center gap-2">
          <img className="w-[46px]" src={userIcon} alt="User Icon" />
          <button className="px-7 py-2 bg-[#403F3F] text-white text-lg font-semibold">Login</button>
        </div>
      </div>
    );
};

export default Navbar;