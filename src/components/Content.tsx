import { GenreResponseProps, MovieProps } from "../App";
import { MovieCard } from "./MovieCard";
import { Header } from "./Header";
import { MoviesList } from "./MoviesList";

interface ContentProps {
  movies: MovieProps[];
  genre: GenreResponseProps;
}

export function Content({ movies, genre }: ContentProps) {
  // Complete aqui

  return (
    <div className="container">
      <Header>{genre.title}</Header>
      <main>
        <MoviesList>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </MoviesList>
      </main>
    </div>
  );
}
