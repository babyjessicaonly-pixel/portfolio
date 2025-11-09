import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // importante

import AppPageLayout from "../../components/MainComponents";
import { HeroNoCall } from "../../components/Hero";

import 'animate.css';
import './Mokeups.scss';

export default function Mokeups() {
  const primaryText = "Mokeups";
  const hero = "ho messo i colori a caso, sembro daltonica. A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const cosa_manca = "allora ho messo le immagini ma tipo tabella fanno cagare, sopra volevo o mettere che scorrevano insieme tipo prima/dopo oppure non lo so dividere la riga in quattro, ci pensiamo. mentre per i caroselli volevo metterli anche loro uno a destra e uno a sinistra ma non so farlo, pero guarda che carini con i bordi tondi:)";

  return (
    <AppPageLayout>

      {/* Content */}
      <div className="overflow-hidden">
        <img src="/mockup/8.piatti/fiori_rossi.jpg" className="img-fluid w-100" alt="Mokeups" style={{ maxHeight: "16rem", objectFit: "cover" }} />
      </div>
      <HeroNoCall secondaryText={primaryText} descriptionPrimary={hero} />

      <SezioniColorate />
      <CaroselloBratz />
      <MiniPiatti cosa_manca={cosa_manca} />

      <FelpeNetflix />

      <div className="w-100 bg-black">
        <div className="container row mx-auto justify-content-center gap-4 p-3">
          <div className="col-auto col-md-6 my-auto"><CaroselloFelpeAstratte /></div>
          <div className="col-auto col-md-6 my-auto"><CaroselloFelpeAnimaliSwag /></div>
        </div>
      </div>

    </AppPageLayout>
  );
}

function SezioniColorate() {
  const sectionClass = "row d-flex justify-content-center align-items-center gap-4 gap-md-0 p-4";
  const animationClass = "animate__animated animate__fast animate__fadeInLeft";
  const imageLeftClass = "img-fluid rounded float-start";
  const colRightClass = "mx-auto rounded-circle p-3 bg-white overflow-hidden shadow-lg";
  const imageRightClass = "h-100 w-100 object-fit-contain";
  const imageRightStyle = { width: "16rem", height: "16rem" };

  return (
    <>
      {/* Profumo disegno e mockup */}
      <div className={`section-profumo ${sectionClass}`}>
        <div className="col-auto col-md-6 my-auto">
          <img className={`${animationClass} ${imageLeftClass}`} alt="bona" src="/mockup/1.profumo/bona.jpg" />
        </div>
        <div className="col-auto col-md-6 my-auto">
          <div style={imageRightStyle} className={`${colRightClass} ${animationClass} animate__delay-1s`}>
            <img className={`${imageRightClass}`} alt="mockup profumo" src="/mockup/1.profumo/mockup_profumo.jpg" />
          </div>
        </div>
      </div>


      {/* Lumache disegno e mockup */}
      <div className={`section-insalata ${sectionClass}`}>
        <div className="col-auto col-md-6 my-auto">
          <img className={`${animationClass} ${imageLeftClass} animate__delay-1s`} alt="lumache" src="/mockup/2.insalata/sfondi_lumache.jpg" />
        </div>
        <div className="col-auto col-md-6 my-auto">
          <div style={imageRightStyle} className={`${colRightClass} ${animationClass} animate__delay-2s`}>
            <img className={`${imageRightClass}`} alt="mockup insalata" src="/mockup/2.insalata/mockup_insalata.jpg" />
          </div>
        </div>
      </div>

      {/* Animali galleggianti disegno e mockup */}
      <div className={`section-bottiglie ${sectionClass}`}>
        <div className="col-auto col-md-6 my-auto">
          <img className={`${animationClass} ${imageLeftClass} animate__delay-2s`} alt="animali galleggianti" src="/mockup/4.bottiglie/animali_galleggianti.jpg" />
        </div>
        <div className="col-auto col-md-6 my-auto">
          <div style={imageRightStyle} className={`${colRightClass} ${animationClass} animate__delay-3s`}>
            <img className={`${imageRightClass}`} alt="mockup bottiglie" src="/mockup/4.bottiglie/mockup_bottiglie.jpg" />
          </div>
        </div>
      </div>

      {/* Rane disegno e mockup */}
      <div className={`section-shampoo ${sectionClass}`}>
        <div className="col-auto col-md-6 my-auto">
          <img className={`${animationClass} ${imageLeftClass} animate__delay-3s`} alt="rane" src="/mockup/3.shampoo/sfondi_rane.jpg" />
        </div>
        <div className="col-auto col-md-6 my-auto">
          <div style={imageRightStyle} className={`${colRightClass} ${animationClass} animate__delay-4s`}>
            <img className={`${imageRightClass}`} alt="mockup shampoo" src="/mockup/3.shampoo/mockup_shampoo.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

function CaroselloBratz() {
  const idLeft = "carouselBratz";
  const idRight = "carouselAccendini";

  return (
    <>
      <div className="row d-flex justify-content-center gap-4 p-3" >

        {/* Carusel Personaggi Bratz */}
        <div id={idLeft} className="col-auto col-md-6 carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="10000" style={{ filter: "invert(1)", mixBlendMode: "screen", maxWidth: "30rem" }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/mockup/6.personaggi_bratz/BRATZ_1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/mockup/6.personaggi_bratz/BRATZ_2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/mockup/6.personaggi_bratz/BRATZ_3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/mockup/6.personaggi_bratz/BRATZ_4.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${idLeft}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${idLeft}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Carusel Accendini */}
        <div id={idRight} className="col-auto col-md-6 carousel slide" data-bs-ride="carousel" data-bs-interval="10000" style={{ maxWidth: "30rem" }}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target={`#${idRight}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target={`#${idRight}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target={`#${idRight}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/mockup/6.personaggi_bratz/mockup_accendini/mockup_accendino3.jpg" className="d-block w-100" alt="..." style={{ borderRadius: "8px" }} />
            </div>
            <div className="carousel-item">
              <img src="/mockup/6.personaggi_bratz/mockup_accendini/mockup_accendino4.jpg" className="d-block w-100" alt="..." style={{ borderRadius: "8px" }} />
            </div>
            <div className="carousel-item">
              <img src="/mockup/6.personaggi_bratz/mockup_accendini/mockup_accendino5.jpg" className="d-block w-100" alt="..." style={{ borderRadius: "8px" }} />
            </div>
            <div className="carousel-item">
              <img src="/mockup/5.accendini/mockup_accendino1.jpg" className="d-block w-100" alt="..." style={{ borderRadius: "8px" }} />
            </div>
            <div className="carousel-item">
              <img src="/mockup/5.accendini/mockup_accendino2.jpg" className="d-block w-100" alt="..." style={{ borderRadius: "8px" }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${idRight}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${idRight}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </>
  );
}

function MiniPiatti({ cosa_manca }) {
  const id = "carouselMiniPiatti";

  return (
    <>
      {/* Mini piatti */}
      <div className="bg-black w-100 p-3">
        <div className="row mx-auto container text-center p-3" style={{ maxWidth: "48rem" }}>
          <div className='col'> {<div className="container d-flex justify-content-between align-items-start" style={{ maxWidth: "70rem" }}>
            <img src="/mockup/8.piatti/mockup_piatti.jpg" className="img-fluid rounded float-start" alt="ops"
              style={{ width: "100%", marginLeft: "1rem", borderRadius: "8px" }} />
          </div>} </div>
          <div className='col'>{cosa_manca}</div>
        </div>
      </div>

      {/* Carosello piatti fiori */}
      <div className="bg-black w-100 p-3">
        <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
          <div id={id} className="carousel slide carousel-white-arrows" data-bs-ride="carousel" data-bs-interval="10000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" alt="ops" src="/mockup/8.piatti/fiori_rossi.jpg" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" alt="ops" src="/mockup/8.piatti/fiori_arancio.jpg" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" alt="ops" src="/mockup/8.piatti/fiori_rosa.jpg" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" alt="ops" src="/mockup/8.piatti/fiori_viola.jpg" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" alt="ops" src="/mockup/8.piatti/fiori_blu.jpg" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" alt="ops" src="/mockup/8.piatti/fiori_azzurri.jpg" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" alt="ops" src="/mockup/8.piatti/fiori_verde.jpg" style={{ borderRadius: "8px" }} />
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
        {/* <style>
          {`
            .carousel-white-arrows .carousel-control-prev-icon,
            .carousel-white-arrows .carousel-control-next-icon {
              filter: invert(1);
            }
          `}
        </style> */}
      </div>
    </>
  );
}

function FelpeNetflix() {
  const primaryText = "Metterai un titolo fico qui dentro per le felpe";
  const secondaryText = "Scorri le felpe come schede di Netflix, quando passi sopra una felpa si ingrandisce leggermente per dare l'effetto hover.";

  return (
    <>
      <div className='container'>
        <h1 className="display-5 py-5">{primaryText}</h1>
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
    </>
  );
}

function CaroselloFelpeAstratte() {
  const id = "carouselFelpeAstratte";

  return (
    <>
      {/* Carosello felpe astratte */}
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
    </>
  );
}

function CaroselloFelpeAnimaliSwag() {
  const id = "carouselFelpeAnimaliSwag";

  return (
    <>
      {/* Carosello felpe animali swag */}
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
    </>
  );
}