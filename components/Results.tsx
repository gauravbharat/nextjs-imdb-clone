import { FeaturedMovie, TopRatedMovie } from "@/helpers/app.model";
import React from "react";

const Results = ({ results }: any) => {
  return (
    <div>
      {results.map((r: FeaturedMovie | TopRatedMovie | any) => (
        <>
          <h1>{r.title}</h1>
        </>
      ))}
    </div>
  );
};

export default Results;
