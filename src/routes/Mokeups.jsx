import { HeroNoCall } from "../components/Hero";

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


     {/* Profumo disegno e mockup */}
      <div className="w-100 p-4" style={{ backgroundColor: "rgb(159,129,142)" }}>
        <div className="container d-flex justify-content-between align-items-start" style={{ maxWidth: "60rem" }}>
          <img src="/mockup/1.profumo/bona.jpg" className="img-fluid rounded float-start" alt="ops"
            style={{ width: "48%", marginRight: "4rem", borderRadius: "8px" }} />
          <img src="/mockup/1.profumo/mockup_profumo.jpg" className="img-fluid rounded float-end" alt="ops"
            style={{ width: "48%", borderRadius: "8px" }} />
        </div>
      </div>


     {/* Lumache disegno e mockup */}
      <div className="bg-success bg-opacity-75 w-100 p-4">
        <div className="container d-flex justify-content-between align-items-start" style={{ maxWidth: "60rem" }}>
          <img src="/mockup/2.insalata/sfondi_lumache.jpg" className="img-fluid rounded float-start" alt="ops"
            style={{ width: "48%", marginRight: "4rem", borderRadius: "8px" }} />
          <img src="/mockup/2.insalata/mockup_insalata.jpg" className="img-fluid rounded float-end" alt="ops"
            style={{ width: "48%", borderRadius: "8px" }} />
        </div>
      </div>

      {/* Animali galleggianti disegno e mockup */}
      <div className="w-100 p-4" style={{ backgroundColor: "rgb(53,123,161)" }}>
        <div className="container d-flex justify-content-between align-items-start" style={{ maxWidth: "60rem" }}>
          <img src="/mockup/4.bottiglie/animali_galleggianti.jpg" className="img-fluid rounded float-start" alt="ops"
            style={{ width: "48%", marginRight: "4rem", borderRadius: "8px" }} />
          <img src="/mockup/4.bottiglie/mockup_bottiglie.jpg" className="img-fluid rounded float-end" alt="ops"
            style={{ width: "48%", borderRadius: "8px" }} />
        </div>
      </div>

      {/* Rane disegno e mockup */}
      <div className="w-100 p-4" style={{ backgroundColor: "rgb(127,156,206)" }}>
        <div className="container d-flex justify-content-between align-items-start" style={{ maxWidth: "60rem" }}>
          <img src="/mockup/3.shampoo/sfondi_rane.jpg" className="img-fluid rounded float-start" alt="ops"
            style={{ width: "48%", marginRight: "1rem", borderRadius: "8px" }} />
          <img src="/mockup/3.shampoo/mockup_shampoo.jpg" className="img-fluid rounded float-end" alt="ops"
            style={{ width: "24%", borderRadius: "8px" }} />
        </div>
      </div>

      {/* Carusel Personaggi Bratz e accendini */}
      <div className="container d-flex gap-5 justify-content-between p-3" >
        <div id="carouselExampleIndicators2" className="carousel slide carousel-fade blend-invert-lighten" data-bs-ride="carousel" data-bs-interval="10000" style={{ maxWidth: "30rem"}}>
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
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000" style={{ maxWidth: "30rem" }}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="bg-black w-100 p-3">

       {/* Mini piatti */}
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
          <div id="carouselExampleIndicators3" className="carousel slide carousel-white-arrows" data-bs-ride="carousel" data-bs-interval="10000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/mockup/8.piatti/fiori_rossi.jpg" className="d-block w-100" alt="ops" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img src="/mockup/8.piatti/fiori_arancio.jpg" className="d-block w-100" alt="ops" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img src="/mockup/8.piatti/fiori_rosa.jpg" className="d-block w-100" alt="ops" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img src="/mockup/8.piatti/fiori_viola.jpg" className="d-block w-100" alt="ops" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img src="/mockup/8.piatti/fiori_blu.jpg" className="d-block w-100" alt="ops" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img src="/mockup/8.piatti/fiori_azzurri.jpg" className="d-block w-100" alt="ops" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img src="/mockup/8.piatti/fiori_verde.jpg" className="d-block w-100" alt="ops" style={{ borderRadius: "8px" }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
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

   <div className="p-3 bg-danger bg-opacity-10 border border-danger border-start-0 rounded-end">
       Mettero` un titolo fico qui dentro per le felpe`
   </div>

       <div className="col-md-8 my-auto">
          <img src="/mockup/9.felpe/diablo.jpg" className="border img-fluid rounded-5 shadow" alt="moto" />
        </div>

       <div className="col-md-8 my-auto">
          <img src="/mockup/9.felpe/diabola.jpg" className="border img-fluid rounded-5 shadow" alt="moto" />
        </div>

      <div className="col-md-8 my-auto">
          <img src="/mockup/9.felpe/focosa.jpg" className="border img-fluid rounded-5 shadow" alt="moto" />
        </div>

       <div className="col-md-8 my-auto">
          <img src="/mockup/9.felpe/cavallo.jpg" className="border img-fluid rounded-5 shadow" alt="moto" />
        </div>

        <div className="col-md-8 my-auto">
          <img src="/mockup/9.felpe/bruco.jpg" className="border img-fluid rounded-5 shadow" alt="moto" />
        </div>

        <div className="col-md-8 my-auto">
          <img src="/mockup/9.felpe/alieno.jpg" className="border img-fluid rounded-5 shadow" alt="moto" />
        </div>

        <div className="bg-black w-100 p-3">
        <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
          <div id="carouselExampleIndicators4" className="carousel slide carousel-white-arrows" data-bs-ride="carousel" data-bs-interval="10000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/mockup/9.felpe/flower_explosion.jpg" className="d-block w-100" alt="ops" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img src="/mockup/9.felpe/felpa4.1_mare.jpg" className="d-block w-100" alt="ops" style={{ borderRadius: "8px" }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
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
      
      <div className="bg-black w-100 p-3">
        <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
          <div id="carouselExampleIndicators4" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/mockup/9.felpe/struzzo.jpg" className="d-block w-100" alt="ops" style={{ borderRadius: "8px" }} />
              </div>
              <div className="carousel-item">
                <img src="/mockup/9.felpe/tartaruga.jpg" className="d-block w-100" alt="ops" style={{ borderRadius: "8px" }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        </div>

    </>
  );
}
