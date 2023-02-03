import Link from "next/link";
import HeaderIcon from "./HeaderIcon";
import DarkModeSwitch from "./ui/DarkModeSwitch";
import AboutIcon from "./ui/icons/AboutIcon";
import HomeIcon from "./ui/icons/HomeIcon";

const Header = () => {
  return (
    // add select-none to disable selecting text/icon
    <div className="bg-gray-700 text-gray-200 flex flex-row items-center p-6 select-none justify-between">
      <div className="flex">
        <Link href="/">
          <HeaderIcon Icon={HomeIcon} title="Home" />
        </Link>
        {/* <HeaderIcon Icon={UserIcon} title="Account" />
        <HeaderIcon Icon={PhoneIcon} title="Contact" /> */}
        <Link href="/about">
          <HeaderIcon Icon={AboutIcon} title="About" />
        </Link>
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl ">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg text-black mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline ">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
