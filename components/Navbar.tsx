import navbarRequests, { genres } from "@/utils/navbar-requests";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const { genre } = useRouter().query;

  const [selectedGenre, setSelectedGenre] = useState(genre ?? genres[0]);

  return (
    <div className="flex justify-center select-none text-xl lg:text-2xl">
      {Object.entries(navbarRequests).map(([key, { title, url }]: any) => (
        <Link key={key} href={{ pathname: "", query: { genre: key } }}>
          <h2
            onClick={() => setSelectedGenre(key)}
            className={`m-6 cursor-pointer  active:text-red-400 ${
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
