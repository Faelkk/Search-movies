export interface Movie {
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
