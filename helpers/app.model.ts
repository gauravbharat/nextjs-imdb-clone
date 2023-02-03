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

export interface MovieGenre {
  id: number;
  name: string;
}

export interface ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: MovieCollection;
  budget: number;
  genres: MovieGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
