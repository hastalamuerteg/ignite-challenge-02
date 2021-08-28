interface MoviesListProps {
  children: React.ReactNode;
}

export function MoviesList({ children }: MoviesListProps) {
  return <div className="movies-list">{children}</div>;
}
