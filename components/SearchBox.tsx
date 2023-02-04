import { useRouter } from "next/router";
import { useRef, useState } from "react";

const SearchBox = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const searchHandler = (e: any) => {
    e.preventDefault();
    console.log("SearchBox : searchHandler", { searchText });
    if (!searchText) return;
    formRef.current?.reset();

    router.push(`/search/${searchText}`);
  };

  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
      onSubmit={searchHandler}
      ref={formRef}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        onChange={(e: any) => setSearchText(e.target.value)}
      />
      <button
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
        disabled={!searchText}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
