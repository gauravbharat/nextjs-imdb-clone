import Results from "@/components/Results";
import { SearchResult } from "@/helpers/app.model";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SearchResultPage = (props: any) => {
  console.log("SearchResultPage", { props });

  if (!!props.error) {
    return (
      <div className="p-6 text-red-700">
        <h1>{props.error}</h1>
      </div>
    );
  }

  const searchResults: SearchResult = props.data;

  // TODO: 04022023 - Gaurav - Add virtual scroll to fetch more records
  return (
    <>
      <div className="pt-6 pl-8 select-none text-center">
        <span className="font-bold">{searchResults.total_results}</span> records
        found for searched text '{props.searchText}'
      </div>
      <Results results={searchResults.results} imageUrl={props.imageUrl} />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { searchText } = context.query;
  console.log("SearchResultPage : getServerSideProps", { searchText });

  if (!searchText) {
    return {
      notFound: true,
    };
  }

  const imageUrl = process.env.IMDB_IMG_URL;

  try {
    const request = await fetch(
      `${process.env.IMDB_URL}/search/movie?api_key=${process.env.API_KEY}&query=${searchText}&language=en-US&include_adult=false`
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

    const data: SearchResult = await request.json();

    if (!data) {
      throw new Error("Error getting search results");
    }

    return {
      props: {
        data,
        imageUrl,
        searchText,
      },
    };
  } catch (error) {
    console.log({ error: (error as any)?.message });

    return {
      props: {
        error: `Error getting search results for ${searchText}. The server may be down or under routine maintenance. Please try again after some time.`,
      },
    };
  }
};

export default SearchResultPage;
