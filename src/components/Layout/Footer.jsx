import favicon_inv from "/favicon_inv.svg";

import { useMemo } from "react";

const Footer = () => (
    <footer className="bd-footer px-4 py-5 bg-body-tertiary text-body-secondary" style={{ filter: "grayscale(1)" }}>
        <div className="container">
            <div className="row gap-5">
                <div className="d-none d-lg-block col-lg-3 border-end"><ColumnLeft /></div>         {/* Prima Colonna (Desktop) */}
                <div className="d-lg-none col-lg-3"><ColumnLeft /></div>                            {/* Prima Colonna (Mobile) */}
                <ColumnRight />                                                                     {/* Seconda Colonna */}
            </div>
        </div>
    </footer>
);

function ColumnLeft() {
    const appName = useMemo(() => "Rachele Pelliccioni", []);
    const appDescription = useMemo(() => "Portfolio realizzato con tutto l'amore del mondo e con: Bootstrap, React, Vite, due esseri umani e un'intelligenza artificiale.", []);

    const socials = useMemo(() => ({
        github: { href: "https://github.com/babyjessicaonly-pixel/", label: "GitHub" },
    }), []);

    const license = useMemo(() => ({
        code: { href: "https://github.com/babyjessicaonly-pixel/portfolio/blob/main/LICENSE", label: "MIT" },
        docs: { href: "https://creativecommons.org/licenses/by/4.0/", label: "CC BY 4.0" },
    }), []);

    return (
        <>
            <a className="d-inline-flex align-items-center text-decoration-none mb-4" href="/" aria-label="Bootstrap">
                <img src={favicon_inv} alt="Logo" width="64" height="64" className="me-3" />
                <span className="lead">{appName}</span>
            </a>

            <ul className="list-unstyled small">

                {/* Descrizione */}
                <li>{appDescription}</li>

                {/* Icone */}
                <li className="my-4">
                    <a className="icon-link icon-link-hover mx-2 lead" href={socials.github.href} target="_blank" aria-label={socials.github.label}><i className="bi bi-github"></i></a>
                </li>
                <li>
                    Code licensed
                    <a className=" text-decoration-none" href={license.code.href} target="_blank" rel="license noopener">{license.code.label}</a>
                    , docs
                    <a className=" text-decoration-none" href={license.docs.href} target="_blank" rel="license noopener">{license.docs.label}</a>
                    .
                </li>
                <p>© 2025</p>

            </ul>
        </>
    );
}

function ColumnRight() {
    const linksHeader = useMemo(() => "Esplora le sezioni", []);

    const sections = useMemo(() => ([
        { href: "/la-casa-degli-artisti", label: "La Casa degli Artisti" },
        { href: "/personaggi-allucinati", label: "Personaggi Allucinati" },
        { href: "/mokeups", label: "Mokeups" },
        { href: "/animation", label: "Animazione" },
    ]), []);

    return (
        <div className="col col-lg-6">                                                      {/* Seconda Colonna */}
            <p className="lead">{linksHeader}</p>                                           {/* Esplora le sezioni */}
            <ul className="list-unstyled">                                                  {/* Link Sezioni */}
                {sections.map((link, index) => (
                    <li className="mb-2" key={index}>
                        <a className="icon-link icon-link-hover text-decoration-none align-items-baseline" href={link.href}>
                            <i className="bi bi-arrow-right-short"></i>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Footer;