import { Header, Footer } from "../components/MainComponents";

import { HeroNoCall } from "../components/Hero";

export default function Characters() {
  const primaryText = "La Casa degli Artisti";
  const hero = "A paragraph of placeholder text. We’re using it here to show the use of the clearfix class. We’re adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.";

  return (
    <>
      <Header />

      {/* Content */}
      <HeroNoCall secondaryText={primaryText} descriptionPrimary={hero} />

      <Footer />
    </>
  )
}
