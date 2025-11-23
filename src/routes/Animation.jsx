import AppPageLayout from "../components/MainComponents";
import { HeroNoCall } from "../components/Hero";
import AnimationFanculo from '../components/Animation/AnimationFanculo';

export default function Animation() {
  const primaryText = "Animation";
  const hero = "Prima ancora della passione per i mockup mi ha affascinato il mondo dell'animazione.";

  return (
    <AppPageLayout>

      {/* Content */}
      <div className="overflow-hidden">
        <img src="/avventure/personaggi_pazzi/pazzi_gatti.jpg" className="img-fluid w-100" alt="ops" style={{ maxHeight: "16rem", objectFit: "cover" }} />
      </div>
      <HeroNoCall secondaryText={primaryText} descriptionPrimary={hero} />


      {/* Profumo disegno e mockup */}
      <div className="w-100 p-4" style={{ backgroundColor: "rgba(101, 185, 115, 1)" }}>
        <div className="container d-flex justify-content-between align-items-start" style={{ maxWidth: "60rem" }}>
          <img src="/mockup/1.profumo/bona.jpg" className="img-fluid rounded float-start" alt="ops"
            style={{ width: "48%", marginRight: "4rem", borderRadius: "8px" }} />
          <img src="/mockup/1.profumo/mockup_profumo.jpg" className="img-fluid rounded float-end" alt="ops"
            style={{ width: "48%", borderRadius: "8px" }} />
        </div>
      </div>

      <AnimationFanculo />

    </AppPageLayout>
  );
}
