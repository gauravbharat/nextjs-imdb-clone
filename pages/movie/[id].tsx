import { Movie } from "@/helpers/app.model";
import Image from "next/image";
import { useRouter } from "next/router";

const MovieDetail = (props: any) => {
  const router = useRouter();

  console.log("MovieDetail", { props, router });

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  if (!!props.error) {
    return (
      <div className="p-6 text-red-700">
        <h1>{props.error}</h1>
      </div>
    );
  }

  const movie: Movie = props.data;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          className="rounded-lg"
          src={`${props.imageUrl}${movie.backdrop_path ?? movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={300}
          quality={100}
          placeholder="blur"
          blurDataURL="/pulse.svg"
        />
        {/*           style={{ width: "100%", height: "auto" }} */}
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {(movie.vote_average ?? 0).toFixed(0)}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Runtime:</span>
            {movie.runtime} minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  console.log({ context });
  const { id } = context.params;
  const imageUrl = process.env.IMDB_IMG_URL;

  try {
    const request = await fetch(
      `${process.env.IMDB_URL}/movie/${id}?api_key=${process.env.API_KEY}`
    );

    console.log({
      // request,
      status: request.status,
      statusText: request.statusText,
      ok: request.ok,
    });

    if (request.status !== 200) {
      return {
        notFound: true,
      };
    }

    const data: Movie = await request.json();

    if (!data) {
      throw new Error("Error getting movie data");
    }

    return {
      props: {
        data,
        imageUrl,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.log({ error: (error as any)?.message });

    return {
      props: {
        error: `Error getting movie data for id ${id}. The server may be down or under routine maintenance. Please try again after some time.`,
      },
    };
  }
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default MovieDetail;
