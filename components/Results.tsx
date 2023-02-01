import { FeaturedMovie, TopRatedMovie } from "@/helpers/app.model";
import React from "react";
import Card from "./Card";

const Results = ({ results, imageUrl }: any) => {
  return (
    <div className="bg-gray-700 text-gray-200 select-none sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
      {results.map((r: FeaturedMovie | TopRatedMovie | any) => (
        <Card key={r.id} result={r} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Results;
