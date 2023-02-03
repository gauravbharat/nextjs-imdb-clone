import { Movie } from "@/helpers/app.model";
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

  return <div>Movie DEtail</div>;
};

export const getStaticProps = async (context: any) => {
  console.log({ context });
  const { id } = context.params;

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
