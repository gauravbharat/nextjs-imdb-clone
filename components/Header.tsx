import { imdbLogo } from "@/helpers/constants";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import AboutIcon from "./ui/icons/AboutIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import PhoneIcon from "./ui/icons/PhoneIcon";
import UserIcon from "./ui/icons/UserIcon";

const Header = () => {
  return (
    // add select-none to disable selecting text/icon
    <div className="bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between">
      <div className="flex">
        <HeaderIcon Icon={HomeIcon} title="Home" />
        <HeaderIcon Icon={UserIcon} title="Account" />
        <HeaderIcon Icon={PhoneIcon} title="Contact" />
        <HeaderIcon Icon={AboutIcon} title="About" />
      </div>
      <Image
        style={{ borderRadius: "10px" }}
        src={imdbLogo}
        alt="IMDB logo"
        width={100}
        height={100}
        className="cursor-pointer active:brightness-110"
      />
    </div>
  );
};

export default Header;
