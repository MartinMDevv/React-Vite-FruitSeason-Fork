// src/pages/Productos.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import FruitList from '../components/FruitList';


const ProductosPage = () => {
  return (
    <Container className="my-5">
      <section className="text-center">
        <h1 className="display-4 fw-bold text-success mb-5">Nuestros Productos de Temporada</h1>
      </section>
      <hr className="my-5" />
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