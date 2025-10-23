import { Header, Footer } from "./components/MainComponents";

import Hero from "./components/Hero";
import CategoryThumb from "./components/CategoryThumb";

function App() {
  const hero = "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const categ_2 = "A paragraph of placeholder text";
  const categ_3 = "A paragraph of placeholder text";
  const categ_4 = "A paragraph of placeholder text";

  return (
    <>
      <Header />

      {/* Content */}
      <Hero description={hero} description2="(non c'è perfezione qui, solo verità)" action="Explore"/>
      <CategoryThumb description={categ_2} color="primary" />
      <CategoryThumb description={categ_3} color="success" />
      <CategoryThumb description={categ_4} color="warning" />

      <Footer />
    </>
  )
}

export default App
