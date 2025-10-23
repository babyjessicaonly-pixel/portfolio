export default function CategoryThumb({ description, url = "#", imgUrl }) {
  return (
    <a class={`btn-category btn p-0 rounded-0 border-0 w-100`} role="button" href={url} style={{ backgroundImage: `url('${imgUrl}')` }}>
      <div className="row px-5 p-3 align-items-center" style={{ minHeight: "12rem", backdropFilter: "blur(6px)" }}>
        <div className="col text-start">
          <p className="display-6 mb-0">{description}</p>
        </div>
        <div className="col-md-3 text-end">
          <i className="bi bi-chevron-compact-right display-6"></i>
        </div>
      </div>
    </a>
  );
}