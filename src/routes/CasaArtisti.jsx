import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // importante

import { Header, Footer } from "../components/MainComponents";
import { HeroNoCall } from "../components/Hero";

export default function CasaArtisti() {
  const primaryText = "La Casa degli Artisti";
  const hero = "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";

  return (
    <>
      <Header />

      {/* Content */}
      <div className="overflow-hidden">
        <img src="/artisti/artisti_lunapark.jpg" className="img-fluid w-100" alt="Casa Artisti" style={{ maxHeight: "16rem", objectFit: "cover" }} />
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

        <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
          <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" aria-label="Slide 1" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="7" aria-label="Slide 8"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="8" aria-label="Slide 9"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="9" aria-label="Slide 10"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="10" aria-label="Slide 11"></button>
            </div>
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
      </div>

      <Footer />
    </>
  )
}
