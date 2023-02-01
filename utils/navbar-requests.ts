const API_KEY = process.env.API_KEY;
export const genres = ["fetchTrending", "fetchTopRated"];

export default {
  [genres[0]]: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  [genres[1]]: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
};
