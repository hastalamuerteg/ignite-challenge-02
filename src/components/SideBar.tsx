import { GenreResponseProps } from "../App";
import { Button } from "../components/Button";

interface SideBarProps {
  genres: GenreResponseProps[];
  handleGenreSelection: (args: number) => void;
  selectedGenre: number;
}

export function SideBar({
  genres,
  handleGenreSelection,
  selectedGenre,
}: SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleGenreSelection(genre.id)}
            selected={selectedGenre === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
