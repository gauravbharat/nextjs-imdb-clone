import { imdbLogo } from "@/helpers/constants";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import AboutIcon from "./ui/icons/AboutIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import PhoneIcon from "./ui/icons/PhoneIcon";
import UserIcon from "./ui/icons/UserIcon";

const Header = () => {
  return (
    <header>
      <div className="">
        <HeaderIcon Icon={HomeIcon} title="Home" />
        <HeaderIcon Icon={UserIcon} title="Account" />
        <HeaderIcon Icon={PhoneIcon} title="Contact" />
        <HeaderIcon Icon={AboutIcon} title="About" />
      </div>
      <Image src={imdbLogo} alt="IMDB logo" width={100} height={100} />
    </header>
  );
};

export default Header;
