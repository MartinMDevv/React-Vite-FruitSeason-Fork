import { Container } from 'react-bootstrap';
import FruitList from '../components/FruitList';
import { seasonsData } from '../data/products';

const ProductosPage = () => {
  return (
    <Container className="my-5">
      <section className="text-center">
        <h1 id="productos" className="display-4 fw-bold text-success mb-5">Nuestros Productos de Temporada</h1>

        {/* Sección con las 4 imágenes de temporada */}
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/img/productos/springFruit.jpeg" className="card-img-top" alt="Primavera" />
              <div className="card-body">
                <h5 className="card-title text-success">🌸 Primavera</h5>
                <p className="card-text">Frutas jugosas y verduras tiernas para dar la bienvenida al buen tiempo.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/img/productos/summerFruit.jpeg" className="card-img-top" alt="Verano" />
              <div className="card-body">
                <h5 className="card-title text-success">☀️ Verano</h5>
                <p className="card-text">La época más abundante y colorida, perfecta para refrescarse.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/img/productos/autumnFruit.jpeg" className="card-img-top" alt="Otoño" />
              <div className="card-body">
                <h5 className="card-title text-success">🍂 Otoño</h5>
                <p className="card-text">Sabores intensos y preparaciones cálidas con frutos secos y verduras robustas.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/img/productos/winterFruit.jpeg" className="card-img-top" alt="Invierno" />
              <div className="card-body">
                <h5 className="card-title text-success">❄️ Invierno</h5>
                <p className="card-text">Alimentos energéticos ricos en vitaminas para fortalecerte en el frío.</p>
              </div>
            </div>
          </div>
        </div>

      </section>
      <hr className="my-5" />
      {/* REVISAR SECCION PRODUCTOS*/}
      <section>
        {seasonsData.map((season) => (
          <FruitList key={season.title} season={season} />
        ))}
      </section>
    </Container>
  );
};

export default ProductosPage;