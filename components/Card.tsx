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
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border-slate-400 sm:m-2 transition-shadow duration-300 group">
      {/* <div className="p-3 cursor-pointer hover:text-white active:text-red-400 xl:hover:scale-105 transition-transform ease-in-out duration-200"> */}
      <Image
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        src={`${imageUrl}${result.backdrop_path}`}
        alt={result.title ?? result.name}
        width={500}
        height={300}
        quality={75}
        style={{ width: "100%", height: "auto" }}
        placeholder="blur"
        blurDataURL="/pulse.svg"
      />
      <div className="p-2">
        <p className="line-clamp-2 text-md">{result.overview}</p>
        <h2 className="truncate text-lg font-bold">
          {result.title ?? result.name}
        </h2>
        <div className="flex items-center">
          <p>{result.release_date ?? result.first_air_date}</p>
          <LikeIcon customClass="h-5 ml-3 mr-1" />
          <p>{result.vote_count}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
