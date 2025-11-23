function FelpeNetflix() {
    const primaryText = "Metterai un titolo fico qui dentro per le felpe";
    const secondaryText = "Scorri le felpe come schede di Netflix, quando passi sopra una felpa si ingrandisce leggermente per dare l'effetto hover.";

    return (
        <div className='p-3'>
            <div className='container'>
                <h1 className="display-3 mb-5">{primaryText}</h1>
                <p className="lead">{secondaryText}</p>
            </div>

            {/* Scroll orizzontale felpe come schede di Netflix */}
            <div className="overflow-auto d-flex flex-nowrap gap-3 p-3">
                <img className="felpa-card border img-fluid rounded-5 shadow" src="/mockup/9.felpe/diablo.jpg" alt="diablo" />
                <img className="felpa-card border img-fluid rounded-5 shadow" src="/mockup/9.felpe/diabola.jpg" alt="diabola" />
                <img className="felpa-card border img-fluid rounded-5 shadow" src="/mockup/9.felpe/focosa.jpg" alt="focosa" />
                <img className="felpa-card border img-fluid rounded-5 shadow" src="/mockup/9.felpe/cavallo.jpg" alt="cavallo" />
                <img className="felpa-card border img-fluid rounded-5 shadow" src="/mockup/9.felpe/bruco.jpg" alt="bruco" />
                <img className="felpa-card border img-fluid rounded-5 shadow" src="/mockup/9.felpe/alieno.jpg" alt="alieno" />
            </div>
        </div>
    );
}

function CaroselloFelpeAstratte() {
    const id = "carouselFelpeAstratte";

    /* Carosello felpe astratte */
    return (
        <div className="p-3">
            <div className="container text-center p-3">
                <div id={id} className="carousel rounded slide carousel-white-arrows" data-bs-ride="carousel" data-bs-interval="10000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block mx-auto object-fit-contain" style={{ height: "16rem" }} src="/mockup/9.felpe/flower_explosion.jpg" alt="flower explosion" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block mx-auto object-fit-contain" style={{ height: "16rem" }} src="/mockup/9.felpe/felpa4.1_mare.jpg" alt="felpa4.1 mare" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <style>
                {`
            .carousel-white-arrows .carousel-control-prev-icon,
            .carousel-white-arrows .carousel-control-next-icon {
              filter: invert(1);
            }
          `}
            </style>
        </div>
    );
}

function CaroselloFelpeAnimaliSwag() {
    const id = "carouselFelpeAnimaliSwag";

    /* Carosello felpe animali swag */
    return (
        <div className="p-3">
            <div className="container text-center p-3">
                <div id={id} className="carousel rounded slide" data-bs-ride="carousel" data-bs-interval="10000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 object-fit-contain" style={{ height: "20rem" }} src="/mockup/9.felpe/struzzo.jpg" alt="struzzo" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 object-fit-contain" style={{ height: "20rem" }} src="/mockup/9.felpe/tartaruga.jpg" alt="tartaruga" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function MokeupsFelpe() {
    return (
        <div className="w-100">
            <FelpeNetflix />
            <div className="w-100 bg-black">
                <div className="container row mx-auto justify-content-center gap-4 p-3">
                    <div className="col-auto col-md-6 my-auto"><CaroselloFelpeAstratte /></div>
                    <div className="col-auto col-md-6 my-auto"><CaroselloFelpeAnimaliSwag /></div>
                </div>
            </div>
        </div>
    );
}