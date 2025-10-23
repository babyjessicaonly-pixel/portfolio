import { Header, Footer } from "../components/MainComponents";

import Hero from "../components/Hero";
import CategoryThumb from "../components/CategoryThumb";

export default function App() {
  const hero = "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";
  const categ_2 = "La Casa degli Artisti";
  const categ_3 = "Personaggi Allucinati";
  const categ_4 = "A paragraph of placeholder text";

  return (
    <>
      <Header />

      {/* Content */}
      <Hero primaryText="Diario di" secondaryText="Metamorfosi" descriptionPrimary={hero} descriptionSecondary="(non c'è perfezione qui, solo verità)" action="Explore"/>
      <CategoryThumb description={categ_2} color="primary" url="/la-casa-degli-artisti" />
      <CategoryThumb description={categ_3} color="success" url="/personaggi-allucinati" />
      <CategoryThumb description={categ_4} color="warning" url="/a-paragraph-of-placeholder-text" />

      <Footer />
    </>
  )
}