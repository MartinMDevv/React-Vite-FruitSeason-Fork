

export default function Proposal() {
  return (
    <section className="text-center">
      <h2 className="display-5 fw-bold text-success mb-4">Nuestra Propuesta</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card bg-light border-0 h-100">
            <div className="card-body">
              <h3 className="text-success">🌍 Misión</h3>
              <p>Acercamos frutas frescas de temporada a tu hogar con un sistema de suscripción flexible, garantizando calidad, sabor y frescura en cada entrega.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-light border-0 h-100">
            <div className="card-body">
              <h3 className="text-success">🚀 Visión</h3>
              <p>Ser la plataforma líder en Chile, reconocida por la calidad, innovación y compromiso con la sostenibilidad y el bienestar de las familias.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-light border-0 h-100">
            <div className="card-body">
              <h3 className="text-success">💡 Valor Agregado</h3>
              <ul className="list-unstyled">
                <li>Personalización de cajas</li>
                <li>Recetas recomendadas</li>
                <li>Seguimiento de pedidos en línea</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
