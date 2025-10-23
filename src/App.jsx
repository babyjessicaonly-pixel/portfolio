function App() {
  const hero = "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const categ_2 = "A paragraph of placeholder text";
  const categ_3 = "A paragraph of placeholder text";
  const categ_4 = "A paragraph of placeholder text";

  return (
    <>
      <Header />
      <HeroCard description={hero} src="diabolo.jpg" action="Explore"/>
      
      <CategoryCard description={categ_2} color="primary" />
      <CategoryCard description={categ_3} color="success" />
      <CategoryCard description={categ_4} color="warning" />

      <Footer />
    </>
  )
}

function HeroCard({ description, src, action }) {
  return (
      <div class="row text-center">
          <div class="col-md-5 p-5">
            <img src={src} class="rounded mx-auto d-block img-fluid" alt="..." />
          </div>
          <div class="col m-auto p-5 pt-3">
            <p>{description}</p>
            <button type="button" class="btn btn-outline-light">{action}</button>
          </div>
      </div>
  );
}

function CategoryCard({ description, color }) {
  return (
    <button class={`btn btn-${color} p-0 rounded-0 w-100`}>
      <div class="row ps-5 p-3 align-items-center">
        <div class="col text-start">
          <p className="lead mb-0">{description}</p>
        </div>
        <div class="col-md-3 text-end">
          <i class="bi bi-chevron-compact-right display-6"></i>
        </div>
      </div>
    </button>
  );
}

function Header() {
  return (
    <nav class="navbar bg-dark border-bottom border-body">
      <div class="container-fluid flex-column">
        <figure class="navbar-brand text-center mb-0">
          <blockquote class="blockquote">
            <p>Portfolio</p>
          </blockquote>
          <figcaption class="blockquote-footer mb-0">
            <cite>Rachele Pelliccioni</cite>
          </figcaption>
        </figure>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <nav class="navbar bg-dark">
      <div class="container-fluid">

        <div class="col-md-3 text-center">
          <span class="lead">Rachele Pelliccioni</span>
        </div>

        <div class="col text-start">
          <span class="">© 2024</span>
        </div>

      </div>
    </nav>
  );
}

export default App
