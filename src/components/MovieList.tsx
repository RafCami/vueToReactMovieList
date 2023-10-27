import { FunctionComponent, useState } from "react";
import { useGetMovies } from "../api/MoviesAPI";
import MovieCard from "./MovieCard";

interface MovieListProps {}

const MovieList: FunctionComponent<MovieListProps> = () => {
  const { data: movies, error } = useGetMovies();
  const [searchText, setSearchText] = useState("");
  console.log(movies);

  return (
    <section className="section__movies">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="movies__header">
              <h2 className="header__title">Movies</h2>
              <div className="header__search">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.currentTarget.value)}
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <Suspense
          fallback={
            <div className="row">
              <div className="col">Loading...</div>
            </div>
          }
        > */}
          {!error && (
            <div className="row g-3">
              {movies
                ?.filter((movie) =>
                  movie.original_title
                    .toLowerCase()
                    .includes(searchText.trim().toLowerCase())
                )
                .map((movie) => (
                  <div className="col-md-4" key={movie.id}>
                    <MovieCard movie={movie} />
                  </div>
                ))}
            </div>
          )}
          {error && (
            <div className="row">
              <div className="col">Kan films niet laden!</div>
            </div>
          )}
        {/* </Suspense> */}
      </div>
    </section>
  );
};

export default MovieList;
