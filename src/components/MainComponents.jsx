export function Header() {
  return (
    <nav class="navbar bg-dark border-bottom border-body">
      <div class="container-fluid flex-column">
        <figure class="navbar-brand text-center mb-0">
          <blockquote class="blockquote">
            <p>Portfolio</p>
          </blockquote>
          <figcaption class="blockquote-footer mb-0">
            <cite>Rachele Pelliccioni</cite>
          </figcaption>
        </figure>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <nav class="navbar bg-dark">
      <div class="container-fluid">

        <div class="col-md-3 text-center">
          <span class="lead">Rachele Pelliccioni</span>
        </div>

        <div class="col text-start">
          <span class="">© 2024</span>
        </div>

      </div>
    </nav>
  );
}