import { FeaturedMovie, TopRatedMovie } from "@/helpers/app.model";
import Link from "next/link";
import React from "react";
import Card from "./Card";

const Results = ({ results, imageUrl }: any) => {
  return (
    <div className="select-none sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((r: FeaturedMovie | TopRatedMovie | any) => (
        <Link key={r.id} href={`/movie/${r.id}`}>
          <Card result={r} imageUrl={imageUrl} />
        </Link>
      ))}
    </div>
  );
};

export default Results;
