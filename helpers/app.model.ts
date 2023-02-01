interface BaseMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface FeaturedMovie extends BaseMovie {
  first_air_date: string;
  media_type: string;
  name: string;
  origin_country: string[];
  original_name: string;
}

export interface TopRatedMovie extends BaseMovie {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}
