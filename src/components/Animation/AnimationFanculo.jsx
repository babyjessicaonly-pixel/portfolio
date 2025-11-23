import './Animation.scss';

export default function AnimationFanculo() {
  const primaryText = "Fanculo";

  return (
    <div className="w-100 bg-white text-dark p-4">

      <div className='container'>
        <h1 className="display-3 mb-5">{primaryText}</h1>
      </div>

      <div className="container d-flex flex-wrap">
        <div className="col-md-3 my-auto">
          <img className="img-fanculo" alt="moto" src="/fanculo/personaggi/madre.jpg" />
        </div>

        <div className="col-md-3 my-auto">
          <img className="img-fanculo" alt="moto" src="/fanculo/personaggi/amedeo.jpg" />
        </div>

        <div className="col-md-3 my-auto">
          <img className="img-fanculo" alt="moto" src="/fanculo/personaggi/marco.jpg" />
        </div>

        <div className="col-md-3 my-auto">
          <img className="img-fanculo" alt="moto" src="/fanculo/personaggi/patrik.jpg" />
        </div>

        <div className="col-md-3 my-auto">
          <img className="img-fanculo" alt="moto" src="/fanculo/personaggi/angelo.jpg" />
        </div>
      </div>

    </div>
  );
}
