export default function Hero({ description, description2, action }) {
  return (
    <div class="container text-center p-5 g-3">

      {/* Title */}
      <h1 class="display-1 pt-3 mb-0">
        Diario di
      </h1>
      <h1 class="display-1">
        <cite>Metamorfosi</cite>
      </h1>

      {/* Description */}
      <div class="mx-auto p-5" style={{ maxWidth: "32rem" }}>
        <p>{description}</p>
        <p><small className="text-muted">{description2}</small></p>
      </div>

      {/* Call to Action */}
      <div class="mx-auto p-5 pt-3">
        <button type="button" class="btn btn-outline-light rounded-0 btn-lg">{action}</button>
      </div>

    </div>
  );
}