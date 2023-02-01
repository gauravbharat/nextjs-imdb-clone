import { FeaturedMovie, TopRatedMovie } from "@/helpers/app.model";

import Image from "next/image";
import LikeIcon from "./ui/icons/LikeIcon";

const Card = ({
  result,
  imageUrl,
}: {
  result: FeaturedMovie | TopRatedMovie | any;
  imageUrl: string;
}) => {
  return (
    <div className="p-3 cursor-pointer hover:text-white active:text-red-400 xl:hover:scale-105 transition-transform ease-in-out duration-200">
      <Image
        src={`${imageUrl}${result.backdrop_path}`}
        alt={result.title ?? result.name}
        width={400}
        height={200}
        quality={75}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="p-2">
        <p className="truncate text-md">{result.overview}</p>
        <h2 className="text-lg font-bold">{result.title ?? result.name}</h2>
        <div className="flex items-center">
          <p>{result.release_date ?? result.first_air_date}</p>
          <LikeIcon customClass="h-5 ml-3 mr-2" />
          <p>{result.vote_count}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
