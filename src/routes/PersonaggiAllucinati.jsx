import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // importante

import AppPageLayout from "../components/MainComponents";
import { HeroNoCall } from "../components/Hero";

export default function PersonaggiAllucinati() {
  const primaryText = "Personaggi Allucinati";
  const hero = "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const crostalandia_description = "We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const moto_description = "We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const personaggi_description = "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const allucinati_description = "ma che ne so dai funziona. questo testo da fixare e anche l'immagine sotto di sicuro si bc la volevo a destra (vedi floated-end?) ma boh me la mette a destra a meta` anche perche` a sinistra volevo mettere la vignetta che mi bugga tutto"
  const gpt_prompt = "Create a funny short story about crazy characters in a dreamlike adventure, involving a land made of pastries and animals riding motorcycles.";

  return (
    <AppPageLayout>

      {/* Content */}
      <div className="overflow-hidden">
        <img src="/avventure/viaggi_allucinati/allucina1_tramonto.jpg" className="img-fluid w-100" alt="PersonaggiAllucinati" style={{ maxHeight: "16rem", objectFit: "cover" }} />
      </div>
      <HeroNoCall secondaryText={primaryText} descriptionPrimary={hero} />

      {/* Crostalandia */}
      <div className="row bg-white p-5">

        {/* Crostalandia - Immagine */}
        <div className="col-md-8 my-auto">
          <img src="/avventure/personaggi_pazzi/crostalandia.jpg" className="border img-fluid rounded-5 shadow" alt="crosta" />
        </div>

        {/* Crostalandia - Personaggi */}
        <div className="col-md-4 m-auto text-dark" style={{ maxWidth: "30rem" }}>

          {/* Crostalandia Carousel */}
          <div id="carouselExampleIndicators" className="carousel slide carousel-fade border-top border-bottom my-5" data-bs-ride="carousel" data-bs-interval="10000">
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

          {/* Crostalandia - Descrizione */}
          <p className='lead my-5 text-end'>{crostalandia_description}</p>

        </div>

      </div>

      {/* Motocross */}
      <div className="row bg-warning p-5">

        {/* Motocross - Personaggi */}
        <div className="col-md-4 m-auto text-dark" style={{ maxWidth: "30rem" }}>

          {/* Motocross Carousel */}
          <div id="carouselExampleIndicators2" className="carousel slide carousel-fade border-top border-bottom my-5" data-bs-ride="carousel" data-bs-interval="10000" style={{ mixBlendMode: "multiply" }}>
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

          {/* Motocross - Descrizione */}
          <p className='lead my-5'>{moto_description}</p>

        </div>

        {/* Motocross - Immagine */}
        <div className="col-md-8 my-auto">
          <img src="/avventure/personaggi_pazzi/motocross.jpg" className="border img-fluid rounded-5 shadow" alt="moto" />
        </div>

      </div>

      {/* Piccione e gatti pazzi */}
      <div className="row bg-white p-5">
        <div className="row mx-auto container text-center p-3">

          <div className="container text-center p-3" style={{ maxWidth: "48rem" }}>
            <img src="/avventure/personaggi_pazzi/piccione_taxi.jpg" className="img-fluid" alt="Cocco" />
          </div>

          <div className="container text-center p-3 me-auto" style={{ maxWidth: "48rem" }}>
            <img src="/avventure/personaggi_pazzi/pazzi_gatti.jpg" className="img-fluid" alt="Cocco" />
          </div>

          <p className='text-dark'>{personaggi_description}</p>

        </div>
      </div>

      {/* Viaggi Allucinati - Castello Funghi */}
      <p className="border-bottom display-4 p-3 text-center">Title</p>
      <div className="container p-5">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div style={{ maxWidth: "30rem" }}>
            <img src="/avventure/viaggi_allucinati/allucina2_castello.jpg" className="img-fluid rounded-3" alt="ops" />
          </div>
          <p className='lead text-light text-end' style={{ maxWidth: "30rem" }}>{allucinati_description}</p>
        </div>
      </div>

      {/* Viaggi Allucinati - GPT Prompt and Images */}
      <div className="container p-5">
        <div className="row row-cols-1 row-cols-lg-2 py-4">

          {/* GPT Prompt */}
          <div className="col py-3">
            <div className="w-75 bg-light text-dark px-3 py-2 ms-auto rounded-4">
              <div className="my-1" style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>{gpt_prompt}</div>
            </div>
          </div>

          {/* Images */}
          <div className="col py-3">
            <img src="/avventure/viaggi_allucinati/allucina4_biscotto.jpg" className="img-fluid rounded-3" alt="ops" />
          </div>
          <div className="col py-3">
            <img src="/avventure/viaggi_allucinati/allucina3_elefante.jpg" className="img-fluid rounded-3" alt="ops" />
          </div>
          <div className="col py-3">
            <img src="/avventure/viaggi_allucinati/allucina5_gatto.jpg" className="img-fluid rounded-3" alt="ops" />
          </div>

        </div>
      </div>

    </AppPageLayout>
  )
}
