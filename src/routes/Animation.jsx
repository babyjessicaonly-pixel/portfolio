import { HeroNoCall } from "../components/Hero";
import AnimationFanculo from '../components/Animation/AnimationFanculo';

export default function Animation() {
  const primaryText = "Animation";
  const hero = "Prima ancora della passione per i mockup mi ha affascinato il mondo dell'animazione.";
  const cortoTitle = "Il corto \"Fanculo\"";
  const cortoDescription = "Prima ancora della passione per i mockup iniziai un progetto tutt'oggi in piena lavorazione.";
  const blurp = "La storia di una pesce palla che si gonfia fino a esplodere per difendersi da un mondo troppo stretto, fatto di pressioni, ruoli e ansie quotidiane. Fanculo è un corto d'animazione che trasforma il disagio e la frustrazione in immagini ironiche e autentiche.";
  const particolaritaTitle = "Con una particolarità";
  const particolaritaDescription = "Pur nascendo da esperienze personali, Fanculo non vuole essere un'autobiografia."

  return (
    <>

      {/* Content */}
      <div className="overflow-hidden">
        <img src="/avventure/personaggi_pazzi/pazzi_gatti.jpg" className="img-fluid w-100" alt="ops" style={{ maxHeight: "16rem", objectFit: "cover" }} />
      </div>
      <HeroNoCall secondaryText={primaryText} descriptionPrimary={hero} />

      {/* Il corto Fanculo */}
      <div className="container text-center py-5" style={{ maxWidth: "60rem" }}>
        <h2 className="display-4 mb-4">{cortoTitle}</h2>
        <p className="lead">{cortoDescription}</p>
      </div>

      {/* Fanculo presenta... */}
      <div className="w-100 p-4" style={{ backgroundColor: "rgba(101, 185, 115, 1)" }}>
        <div className="container d-flex justify-content-between align-items-start" style={{ maxWidth: "60rem" }}>
          <img src="/fanculo/episodio1.gif" className="img-fluid rounded float-start" alt="ops"
            style={{ width: "48%", marginRight: "4rem", borderRadius: "8px" }} />
          <div className="my-auto">
            <p>{blurp}</p>
          </div>
        </div>
      </div>

      {/* La particolarità */}
      <div className="container text-center py-5" style={{ maxWidth: "60rem" }}>
        <h2 className="display-4 mb-4">{particolaritaTitle}</h2>
        <p className="lead">{particolaritaDescription}</p>
      </div>

        {/* Personaggi Gif */}
        <div className="w-100 p-5">
          <div className="container d-flex justify-content-center" style={{ maxWidth: "60rem" }}>
            <img src="/fanculo/personaggi/lei_esplode.gif" className="border img-fluid rounded-4 shadow" alt="bob"
             style={{ width: "48%", borderRadius: "10px" }} />
          </div>
        </div>

        <div className="w-100 pb-5">
          <div className="container d-flex justify-content-center gap-5 align-items-start" style={{ maxWidth: "60rem" }}>
            <img src="/fanculo/personaggi/lei_parla.gif" className="img-fluid rounded-4 float-start" alt="ops"
              style={{ width: "48%", borderRadius: "8px" }} />
            <img src="/fanculo/personaggi/zolo.gif" className="img-fluid rounded-4 float-end" alt="ops"
              style={{ width: "48%", borderRadius: "8px" }} />
          </div>
        </div>

      <AnimationFanculo />

    </>
  );
}
