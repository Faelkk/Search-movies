export interface MovieSearch {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

export interface InputResult {
  searchValue: string;
}
export interface propsPaginate {
  moviesPerPage: number;
  totalMovies: number;
  paginate: Function;
  currentPage: number;
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface PropsCard {
  searchValue: string;
}

export interface MovieSearchId {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  Released: string;
  imdbRating: string;
  BoxOffice: string;
  Runtime: string;
}

export interface TypeAlt {
  alt: string;
  src: string;
  colums: string | undefined;
}
