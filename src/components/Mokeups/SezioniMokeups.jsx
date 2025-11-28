import './Mokeups.scss';

import { HeroNoCall } from "../Hero";
import MokeupsFelpe from './MokeupsFelpe';

export default function Mokeups() {
  const primaryText = "Mokeups";
  const hero = "ho messo i colori a caso, sembro daltonica. A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const cosa_manca = "allora ho messo le immagini ma tipo tabella fanno cagare, sopra volevo o mettere che scorrevano insieme tipo prima/dopo oppure non lo so dividere la riga in quattro, ci pensiamo. mentre per i caroselli volevo metterli anche loro uno a destra e uno a sinistra ma non so farlo, pero guarda che carini con i bordi tondi:)";

  return (
    <>

      {/* Content */}
      <div className="overflow-hidden">
        <img src="/mockup/8.piatti/fiori_rossi.jpg" className="img-fluid w-100" alt="Mokeups" style={{ maxHeight: "16rem", objectFit: "cover" }} />
      </div>
      <HeroNoCall secondaryText={primaryText} descriptionPrimary={hero} />

      <SezioniColorate />
      <CaroselloBratz />
      <MiniPiatti cosa_manca={cosa_manca} />

      <MokeupsFelpe />

    </>
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
        <div id={idLeft} className="col-auto col-md-6 carousel slide carousel-fade blend-invert-lighten" data-bs-ride="carousel" data-bs-interval="10000" style={{ maxWidth: "30rem" }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="/mockup/6.personaggi_bratz/BRATZ_1.jpg" alt="..." />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/mockup/6.personaggi_bratz/BRATZ_2.jpg" alt="..." />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/mockup/6.personaggi_bratz/BRATZ_3.jpg" alt="..." />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/mockup/6.personaggi_bratz/BRATZ_4.jpg" alt="..." />
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
              <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/6.personaggi_bratz/mockup_accendini/mockup_accendino3.jpg" alt="..." />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/6.personaggi_bratz/mockup_accendini/mockup_accendino4.jpg" alt="..." />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/6.personaggi_bratz/mockup_accendini/mockup_accendino5.jpg" alt="..." />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/5.accendini/mockup_accendino1.jpg" alt="..." />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/5.accendini/mockup_accendino2.jpg" alt="..." />
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
                <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/8.piatti/fiori_rossi.jpg" alt="ops" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/8.piatti/fiori_arancio.jpg" alt="ops" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/8.piatti/fiori_rosa.jpg" alt="ops" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/8.piatti/fiori_viola.jpg" alt="ops" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/8.piatti/fiori_blu.jpg" alt="ops" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/8.piatti/fiori_azzurri.jpg" alt="ops" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" style={{ borderRadius: "8px" }} src="/mockup/8.piatti/fiori_verde.jpg" alt="ops" />
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
