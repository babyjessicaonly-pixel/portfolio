import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      {/* Section 1 */}
      <div class="container text-center bg-danger" data-bs-theme="dark">
        <div class="row">
          <div class="col">
            <img src="diabolo.jpg" class="rounded mx-auto d-block img-fluid" alt="..." />
          </div>
          <div class="col">
            <p>
              A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div class="container text-center bg-secondary" data-bs-theme="dark">
        <div class="row">
          <div class="col-3">
            <img src="diabolo.jpg" class="rounded mx-auto d-block img-fluid" alt="..." />
            <img src="diabolo.jpg" class="rounded mx-auto d-block img-fluid" alt="..." />
          </div>
          <div class="col">
            2 of 2
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div class="container text-center bg-secondary" data-bs-theme="dark">
        <div class="row">
          <div class="col-3">
            <img src="diabolo.jpg" class="rounded mx-auto d-block img-fluid" alt="..." />
            <img src="diabolo.jpg" class="rounded mx-auto d-block img-fluid" alt="..." />
          </div>
          <div class="col">
            2 of 2
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div class="container text-center bg-secondary" data-bs-theme="dark">
        <div class="row">
          <div class="col-3">
            <img src="diabolo.jpg" class="rounded mx-auto d-block img-fluid" alt="..." />
            <img src="diabolo.jpg" class="rounded mx-auto d-block img-fluid" alt="..." />
          </div>
          <div class="col">
            2 of 2
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

function Header() {
  return (
      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
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
    <nav class="navbar bg-secondary">
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
