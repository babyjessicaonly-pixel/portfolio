export function Header() {
  return (
    <nav className="navbar bg-dark border-bottom border-body">
      <div className="container-fluid flex-column">
        <figure className="navbar-brand text-center mb-0">
          <blockquote className="blockquote">
            <p>Portfolio</p>
          </blockquote>
          <figcaption className="blockquote-footer mb-0">
            <cite>Rachele Pelliccioni</cite>
          </figcaption>
        </figure>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">

        <div className="col-md-3 text-center">
          <span className="lead">Rachele Pelliccioni</span>
        </div>

        <div className="col text-start">
          <span className="">© 2024</span>
        </div>

      </div>
    </nav>
  );
}