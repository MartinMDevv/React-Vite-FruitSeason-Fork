import { Container } from 'react-bootstrap';
import FruitList from '../components/FruitList';


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

const seasonsData = [
  {
    title: 'Primavera (septiembre – noviembre)',
    icon: '🌸',
    products: [
      { name: 'Alcachofa', image: '/img/productos/primavera/alcachofa.jfif' },
      { name: 'Esparrago', image: '/img/productos/primavera/esparrago.jpg' },
      { name: 'Frutilla', image: '/img/productos/primavera/frutilla.jpg' },
      { name: 'Lechuga', image: '/img/productos/primavera/lechuga.jpg' },
      { name: 'Níspero', image: '/img/productos/primavera/nispero.png' },
    ],
  },
  {
    title: 'Verano (diciembre – febrero)',
    icon: '☀️',
    products: [
      { name: 'Durazno', image: '/img/productos/verano/durazno.jfif' },
      { name: 'Melón', image: '/img/productos/verano/melon.jpg' },
      { name: 'Sandía', image: '/img/productos/verano/sandia.jpg.webp' },
      { name: 'Tomate', image: '/img/productos/verano/tomate.jpg' },
      { name: 'Zapallo Italiano', image: '/img/productos/verano/zapallo_italiano.jpg' },
    ],
  },
  {
    title: 'Otoño (marzo – mayo)',
    icon: '🍂',
    products: [
        { name: 'Brócoli', image: '/img/productos/otono/brocoli.jfif' },
        { name: 'Manzana', image: '/img/productos/otono/manzana.jpg' },
        { name: 'Pera', image: '/img/productos/otono/pera.jpg' },
        { name: 'Uvas', image: '/img/productos/otono/uvas.jpg' },
        { name: 'Zapallo', image: '/img/productos/otono/zapallo.jpg' },
    ]
  },
  {
    title: 'Invierno (junio – agosto)',
    icon: '❄️',
    products: [
        { name: 'Coliflor', image: '/img/productos/invierno/coliflor.jpg' },
        { name: 'Kiwi', image: '/img/productos/invierno/kiwi.jfif' },
        { name: 'Mandarina', image: '/img/productos/invierno/mandarina.jpg' },
        { name: 'Naranja', image: '/img/productos/invierno/naranja.jpg' },
        { name: 'Repollo', image: '/img/productos/invierno/repollo.jpg' },
    ]
  }
];



export default ProductosPage;