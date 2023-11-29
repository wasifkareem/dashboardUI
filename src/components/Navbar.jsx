import profilepic from "../assets/profile.png";
import logo from "../assets/download.svg";
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className=" h-14 px-5 pl-10 flex justify-between items-center bg-[#7180bf]">
      <div className=" flex items-center gap-4">
        <img
          className=" h-6 shadow-inner shadow-white rounded-full "
          src={logo}
          alt="logo"
        />
        <p className=" font-semibold text-white">FinTech</p>
      </div>
      <div className=" flex items-center gap-3 ">
        <IoMdNotifications className=" text-white text-2xl " />
        <img
          className=" h-10 w-10 rounded-full object-cover"
          src={profilepic}
          alt="DP"
        />
      </div>
    </div>
  );
};

export default Navbar;
