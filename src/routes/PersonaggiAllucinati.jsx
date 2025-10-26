import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // importante

import { Header, Footer } from "../components/MainComponents";
import { HeroNoCall } from "../components/Hero";

export default function PersonaggiAllucinati() {
  const primaryText = "Personaggi Allucinati";
  const hero = "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const crostalandia_description = "We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const moto_description = "We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const personaggi_description = "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const allucinati_description="ma che ne so dai funziona"

  return (
    <>
      <Header />

      {/* Content */}
      <div className="overflow-hidden">
        <img src="/avventure/viaggi_allucinati/allucina1_tramonto.jpg" className="img-fluid w-100" alt="PersonaggiAllucinati" style={{ maxHeight: "16rem", objectFit: "cover" }} />
      </div>
      <HeroNoCall secondaryText={primaryText} descriptionPrimary={hero} />

      <div className="row bg-white p-5 w-100">
        <div className="col-md-8">
          <img src="/avventure/personaggi_pazzi/crostalandia.jpg" className="border img-fluid rounded-5 shadow" alt="crosta" />
        </div>

        <div className="col-md-4 m-auto ms-3 text-dark gap-3" style={{ maxWidth: "30rem" }}>
          <div id="carouselExampleIndicators" className="carousel slide carousel-fade border-top border-bottom" data-bs-ride="carousel" data-bs-interval="10000">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/avventure/personaggi crosta/lay2.5_crostalandia_ciambella.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/avventure/personaggi crosta/lay2.6_crostalandia_muffin.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/avventure/personaggi crosta/lay2.7_crostalandia_pulcino.jpg" className="d-block w-100" alt="..." />
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

          <p className='lead mt-5'>{crostalandia_description}</p>
        </div>
      </div>

      <div className="row bg-warning p-5 w-100">
        <div className="col-md-4 m-auto ms-3 text-dark gap-3" style={{ maxWidth: "30rem" }}>
          <div id="carouselExampleIndicators2" className="carousel slide carousel-fade border-top border-bottom" data-bs-ride="carousel" data-bs-interval="10000" style={{ mixBlendMode: "multiply" }}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/avventure/personaggi moto/lay2.1_motocross_uccello.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/avventure/personaggi moto/lay2.2_motocross_coniglio.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/avventure/personaggi moto/lay2.3_motocross_maiale.jpg" className="d-block w-100" alt="..." />
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

          <p className='lead mt-5'>{moto_description}</p>
        </div>
        
        <div className="col-md-8">
          <img src="/avventure/personaggi_pazzi/motocross.jpg" className="border img-fluid rounded-5 shadow" alt="moto" />
        </div>
      </div>

      <div className="row bg-white p-5 w-100">
        <div className="row mx-auto container text-center p-3" style={{ maxWidth: "48rem" }}>
          <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
            <img src="/avventure/personaggi_pazzi/taxi_piccione.jpg" className="img-fluid" alt="Cocco" />
          </div>
          <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
            <img src="/avventure/personaggi_pazzi/pazzi_gatti.jpg" className="img-fluid" alt="Cocco" />
          </div>
          <div className='col'>{personaggi_description}</div>
        </div>
      </div>

      <div class="h4 pb-2 mb-4 text-white border-bottom border-white text-center">Title</div>
  
       <div className="container d-flex float-start p-3" style={{ maxWidth: "40rem" }}>
            <img src="/avventure/viaggi_allucinati/allucina2_castello.jpg" className="img-fluid" me-auto alt="ops" 
            style={{ marginLeft: "1rem", borderRadius: "8px" , marginRight: "1rem"}}/>
         <div className='lead text-light mt-2'>{allucinati_description}</div>
       </div>

      <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
            <img src="/avventure/viaggi_allucinati/allucina4_biscotto.jpg" className="img-fluid" alt="ops" />
       </div>

      <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
            <img src="/avventure/viaggi_allucinati/allucina3_elefante.jpg" className="img-fluid" alt="ops" />
       </div>

       <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
            <img src="/avventure/viaggi_allucinati/allucina5_gatto.jpg" className="img-fluid" alt="ops" />
       </div>

      <Footer />
    </>
  )
}
