interface HeaderProps {
  children: string;
}

export function Header({ children }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {children}</span>
      </span>
    </header>
  );
}
