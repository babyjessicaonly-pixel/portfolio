import { HeroNoCall } from "../components/Hero";
import AnimationFanculo from '../components/Animation/AnimationFanculo';

export default function Animation() {
  const primaryText = "Animation";
  const hero = "Prima ancora della passione per i mockup mi ha affascinato il mondo dell'animazione.";
  const blurp = "La storia di una pesce palla che si gonfia fino a esplodere per difendersi da un mondo troppo stretto, fatto di pressioni, ruoli e ansie quotidiane. Fanculo è un corto d’animazione che trasforma il disagio e la frustrazione in immagini ironiche e autentiche."

  return (
    <>

      {/* Content */}
      <div className="overflow-hidden">
        <img src="/avventure/personaggi_pazzi/pazzi_gatti.jpg" className="img-fluid w-100" alt="ops" style={{ maxHeight: "16rem", objectFit: "cover" }} />
      </div>
      <HeroNoCall secondaryText={primaryText} descriptionPrimary={hero} />


      {/* Fanculo presenta... */}
      <div className="w-100 p-4" style={{ backgroundColor: "rgba(101, 185, 115, 1)" }}>
        <div className="container d-flex justify-content-between align-items-start" style={{ maxWidth: "60rem" }}>
          <img src="/fanculo/episodio1.gif" className="img-fluid rounded float-start" alt="ops"
            style={{ width: "48%", marginRight: "4rem", borderRadius: "8px" }} />
          <HeroNoCall descriptionSecondary={blurp}/>
        </div>
      </div>

        {/* Personaggi Gif */}
        <div className="col-md-10 my-auto">
          <img src="/fanculo/personaggi/lei_esplode.gif" className="border img-fluid rounded-4 shadow" alt="bob"
           style={{ width: "48%", marginLeft: "5rem", borderRadius: "10px" }} />
        </div>

        <div className="w-100 p-4">
        <div className="container d-flex justify-content-between align-items-start" style={{ maxWidth: "60rem" }}>
          <img src="/fanculo/personaggi/lei_parla.gif" className="img-fluid rounded float-start" alt="ops"
            style={{ width: "48%", marginRight: "4rem", borderRadius: "8px" }} />
          <img src="/fanculo/personaggi/zolo.gif" className="img-fluid rounded float-end" alt="ops"
            style={{ width: "48%", borderRadius: "8px" }} />
        </div>
      </div>

      <AnimationFanculo />

    </>
  );
}
