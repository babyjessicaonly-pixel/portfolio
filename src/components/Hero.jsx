export default function Hero(
  {
    primaryText,
    secondaryText = "",
    descriptionPrimary,
    descriptionSecondary = "",
    action
  }
) {
  return (
    <div class="container text-center p-5 g-3">
      <HeroTitle primaryText={primaryText} secondaryText={secondaryText} />
      <HeroDescription descriptionPrimary={descriptionPrimary} descriptionSecondary={descriptionSecondary} />
      <HeroCall action={action} />
    </div>
  );
}

export function HeroNoCall({ primaryText, secondaryText = "", descriptionPrimary, descriptionSecondary = "" }) {
  return (
    <div class="container text-center p-5 g-3">
      <HeroTitle primaryText={primaryText} secondaryText={secondaryText} />
      <HeroDescription descriptionPrimary={descriptionPrimary} descriptionSecondary={descriptionSecondary} />
    </div>
  );
}

export function HeroTitle({ primaryText, secondaryText }) {
  return (
    <>
      <h1 class="display-1 pt-3 mb-0">{primaryText}</h1>
      <h1 class="display-1"><cite>{secondaryText}</cite></h1>
    </>
  );
}

export function HeroDescription({ descriptionPrimary, descriptionSecondary }) {
  return (
    <div class="mx-auto p-5" style={{ maxWidth: "32rem" }}>
      <p>{descriptionPrimary}</p>
      <p><small className="text-muted">{descriptionSecondary}</small></p>
    </div>
  );
}

export function HeroCall({ action }) {
  return (
    <div class="mx-auto p-5 pt-3">
      <button type="button" class="btn btn-outline-light rounded-0 btn-lg">{action}</button>
    </div>
  );
}