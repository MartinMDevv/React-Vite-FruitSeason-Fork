

export default function Carousel() {
  return (
    <section id="ofertas-carrusel" className="mb-5">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner rounded shadow-sm">
          <div className="carousel-item active">
            <img src="/img/carousel1.jpeg" className="imgCarousel d-block w-100" alt="Cajita frutal personalizable" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Personaliza tu cajita frutal</h5>
              <p>PREMIUM EXPERIENCE</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/carousel2.jpeg" className="imgCarousel d-block w-100" alt="Persona pagando con tarjeta" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Precios accesibles</h5>
              <p>Planes desde $12.990/mes.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/carousel3.jpeg" className="imgCarousel d-block w-100" alt="Mapa de despacho" />
            <div className="carousel-caption d-none d-md-block">
              <h5>¡Llegamos donde tú estés!</h5>
              <p>Revisa tu cobertura de despacho.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}
