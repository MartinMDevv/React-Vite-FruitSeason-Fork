import React from 'react'

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img 
              src="/img/equipoSeasonFruit.png" 
              className="img-fluid rounded shadow"
              alt="Equipo de Fruitseason trabajando en el campo" 
            />
          </div>
          <div className="col-md-6">
            <h2 className="display-5 fw-bold text-success mb-3">Quiénes Somos</h2>
            <p className="lead">
              Somos una empresa familiar apasionada por la agricultura y la vida sana. Nacimos del deseo
              de compartir la frescura y el sabor auténtico de las frutas que cosechamos, llevándolas directamente del
              campo a tu mesa.
            </p>
            <p>
              En FRUITSEASON, cada caja que preparamos es un reflejo de nuestro compromiso con la calidad, la
              sostenibilidad y el bienestar de tu familia. Creemos en una alimentación consciente y en el poder de los
              productos frescos para nutrir el cuerpo y el alma.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
