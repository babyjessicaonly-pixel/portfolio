import './Animation.scss';

export default function AnimationFanculo() {
  const primaryText = "I personaggi";
  const secondaryText = "ho creato gli sfondi e alcuni personaggi secondari che ritenevo necessari per una trama consolidata";

  return (
    <div className="w-100 text-light p-4">

      <div className='container'>
        <h1 className="display-3 mb-5">{primaryText}</h1>
        <p className='lead'>{secondaryText}</p>
      </div>

      {/* Scroll orizzontale dei personaggi */}
      <div className="overflow-auto d-flex flex-nowrap gap-3 p-3">
        <img className="felpa-card border img-fluid rounded-5 shadowimg-fanculo" alt="moto" src="/fanculo/personaggi/madre.jpg" />
        <img className="felpa-card border img-fluid rounded-5 shadowimg-fanculo" alt="moto" src="/fanculo/personaggi/amedeo.jpg" />
        <img className="felpa-card border img-fluid rounded-5 shadowimg-fanculo" alt="moto" src="/fanculo/personaggi/marco.jpg" />
        <img className="felpa-card border img-fluid rounded-5 shadowimg-fanculo" alt="moto" src="/fanculo/personaggi/patrik.jpg" />
        <img className="felpa-card border img-fluid rounded-5 shadowimg-fanculo" alt="moto" src="/fanculo/personaggi/angelo.jpg" />
      </div>
      
    </div>
  );
}
