export default function CategoryThumb({ description, color }) {
  return (
    <button class={`btn btn-${color} p-0 rounded-0 w-100`}>
      <div class="row ps-5 p-3 align-items-center">
        <div class="col text-start">
          <p className="lead mb-0">{description}</p>
        </div>
        <div class="col-md-3 text-end">
          <i class="bi bi-chevron-compact-right display-6"></i>
        </div>
      </div>
    </button>
  );
}