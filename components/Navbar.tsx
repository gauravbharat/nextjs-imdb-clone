import navbarRequests, { genres } from "@/utils/navbar-requests";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [selectedGenre, setSelectedGenre] = useState();

  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
      {Object.entries(navbarRequests).map(([key, { title, url }]: any) => (
        <Link key={key} href={{ pathname: "", query: { genre: key } }}>
          <h2
            onClick={() => setSelectedGenre(key)}
            className={`m-6 cursor-pointer hover:text-white active:text-red-400 ${
              selectedGenre === key ? "text-red-400" : ""
            }`}
          >
            {title}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
