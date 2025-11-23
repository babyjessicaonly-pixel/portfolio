import Hero from "../components/Hero";
import CategoryThumb from "../components/CategoryThumb";
import { useMemo } from "react";

export default function Home() {
  const hero = useMemo(() => "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.", []);
  const categ_2 = useMemo(() => "La Casa degli Artisti", []);
  const categ_3 = useMemo(() => "Personaggi Allucinati", []);
  const categ_4 = useMemo(() => "Mokeups", []);
  const categ_5 = useMemo(() => "Animation", []);

  return (
    <>
      <Hero primaryText="Diario di" secondaryText="Metamorfosi" descriptionPrimary={hero} descriptionSecondary="(non c'è perfezione qui, solo verità)" action="Explore" />
      <CategoryThumb description={categ_2} imgUrl="/artisti/artisti_lunapark.jpg" url="/la-casa-degli-artisti" />
      <CategoryThumb description={categ_3} imgUrl="/avventure/viaggi_allucinati/allucina1_tramonto.jpg" url="/personaggi-allucinati" />
      <CategoryThumb description={categ_4} imgUrl="/mockup/8.piatti/fiori_rossi.jpg" url="/mokeups" />
      <CategoryThumb description={categ_5} imgUrl="/avventure/personaggi_pazzi/pazzi_gatti.jpg" url="/animation" />
    </>
  )
}