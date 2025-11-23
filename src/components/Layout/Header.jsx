import { useMemo } from "react";

const Header = () => {
  const brand = useMemo(() => "Portfolio", []);
  const secondary = useMemo(() => "Rachele Pelliccioni", []);

  return (
    <nav className="navbar bg-dark border-bottom border-body">
      <div className="container-fluid flex-column">
        <a className="navbar-brand d-inline-flex align-items-center text-decoration-none" href="/" aria-label="Portfolio · Rachele Pelliccioni">
          <figure className="text-center mb-0">
            <p className="lead">{brand}</p>
            <figcaption className="blockquote-footer mb-0">
              <cite>{secondary}</cite>
            </figcaption>
          </figure>
        </a>
      </div>
    </nav>
  );
}

export default Header;