import { useMemo } from "react";
import favicon_inv from "/favicon_inv.svg";

export function Header() {
  return (
    <nav className="navbar bg-dark border-bottom border-body">
      <div className="container-fluid flex-column">
        <a className="navbar-brand d-inline-flex align-items-center text-decoration-none" href="/" aria-label="Portfolio · Rachele Pelliccioni">
          <figure className="text-center mb-0">
          <p className="lead">Portfolio</p>
          <figcaption className="blockquote-footer mb-0">
            <cite>Rachele Pelliccioni</cite>
          </figcaption>
        </figure>
        </a>
      </div>
    </nav>
  );
}

export function Footer() {
  const appName = useMemo(() => "Rachele Pelliccioni", []);
  const appDescription = useMemo(() => "Portfolio realizzato con tutto l'amore del mondo e con: Bootstrap, React, Vite, due esseri umani e un'intelligenza artificiale.", []);
  const linksHeader = useMemo(() => {
    return "Esplora le sezioni";
  }, []);
  const linksContent = useMemo(() => {
    return [
      { href: "/la-casa-degli-artisti", label: "La Casa degli Artisti" },
      { href: "/personaggi-allucinati", label: "Personaggi Allucinati" },
      { href: "/mokeups", label: "Mokeups" },
    ];
  }, []);

  const mainColumn = useMemo(() => {
    return (
      <>
        <a className="d-inline-flex align-items-center text-decoration-none mb-4" href="/" aria-label="Bootstrap">
          <img src={favicon_inv} alt="Logo" width="64" height="64" className="me-3" />
          <span className="lead">{appName}</span>
        </a>

        <ul className="list-unstyled small">

          {/* Descrizione */}
          <li>
            {appDescription}
          </li>

          {/* Icone */}
          <li className="my-4">
            <a className="icon-link icon-link-hover mx-2 lead" href="https://github.com/babyjessicaonly-pixel/"><i className="bi bi-github"></i></a>
          </li>

          {/* Licenza */}
          <li>
            Code licensed <a className=" text-decoration-none" href="https://github.com/babyjessicaonly-pixel/portfolio/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a className=" text-decoration-none" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="license noopener">CC BY 4.0</a>.
          </li>

          {/* Copyright e Anno */}
          <p>© 2025</p>

        </ul>
      </>
    );
  }, [appDescription, appName]);

  return (
    <footer className="bd-footer px-4 py-5 bg-body-tertiary text-body-secondary" style={{ filter: "grayscale(1)" }}>
      <div className="container">
        <div className="row gap-5">

          {/* Prima Colonna (Desktop) */}
          <div className="d-none d-lg-block col-lg-3 border-end">
            {mainColumn}
          </div>

          {/* Prima Colonna (Mobile) */}
          <div className="d-lg-none col-lg-3">
            {mainColumn}
          </div>

          {/* Seconda Colonna */}
          <div className="col col-lg-6">

            {/* Esplora le sezioni */}
            <p className="lead">{linksHeader}</p>

            {/* Link Sezioni */}
            <ul className="list-unstyled">
              {linksContent.map((link, index) => (
                <li className="mb-2" key={index}>
                  <a className="icon-link icon-link-hover text-decoration-none align-items-baseline" href={link.href}>
                    <i className="bi bi-arrow-right-short"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </footer>
  );
}