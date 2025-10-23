import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // importante

import { Header, Footer } from "../components/MainComponents";
import { HeroNoCall } from "../components/Hero";

export default function Mokeups() {
  const primaryText = "Mokeups";
  const hero = "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const personaggi_description = "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";

  return (
    <>
      <Header />

      {/* Content */}
      <div className="overflow-hidden">
        <img src="/mockup/8.piatti/fiori_rossi.jpg" className="img-fluid w-100" alt="Mokeups" style={{ maxHeight: "16rem", objectFit: "cover" }} />
      </div>
      <HeroNoCall secondaryText={primaryText} descriptionPrimary={hero} />

      <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
        <img src="/artisti/artisti_cocco.jpg" className="img-fluid" alt="Cocco" />
      </div>

      <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/artisti/scorri/artisti_cucina.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/artisti/scorri/artisti_finestra.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/artisti/scorri/artisti_opera.jpg" className="d-block w-100" alt="..." />
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

      <div className="bg-success w-100 p-3">
        <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
          <img src="/artisti/artisti_natura.jpg" className="img-fluid" alt="Natura" />
        </div>

        <div className="row mx-auto container text-center p-3" style={{ maxWidth: "48rem" }}>
          <div className='col-md-8'>
            <div id="carouselExampleIndicators2" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="10000" style={{ filter: "invert(1)", mixBlendMode: "screen" }}>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/artisti/personaggi/artisti_p1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/artisti/personaggi/artisti_p2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/artisti/personaggi/artisti_p3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/artisti/personaggi/artisti_p4.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/artisti/personaggi/artisti_p5.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/artisti/personaggi/artisti_p6.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/artisti/personaggi/artisti_p7.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/artisti/personaggi/artisti_p8.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/artisti/personaggi/artisti_p9.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/artisti/personaggi/artisti_p10.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/artisti/personaggi/artisti_p11.jpg" className="d-block w-100" alt="..." />
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
          </div>

          <div className='col'>{personaggi_description}</div>
        </div>
      </div>

      <Footer />
    </>
  )
}
