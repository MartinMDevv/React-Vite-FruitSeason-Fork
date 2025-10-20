import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import React from 'react'

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para navegar y hacer scroll al anchor
  const handleNavAnchor = (anchor) => (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      // Espera a que el Home cargue y luego hace scroll
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm fixed-top">
      <div className="container">
        <a href="#eslogan" className="navbar-brand fw-bold nav-link active" onClick={handleNavAnchor('eslogan')}>🍓 FRUITSEASON</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link active" href="#eslogan" onClick={handleNavAnchor('eslogan')}>Inicio</a>
            </li>
            <li className="nav-item">
              {/* Navega a /productos y luego hace scroll al encabezado #productos */}
              <a
                href="/productos"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/productos', { replace: false });
                  // Espera a que la ruta cargue y luego hace scroll al id
                  setTimeout(() => {
                    const el = document.getElementById('productos');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
              >
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#quienes-somos" onClick={handleNavAnchor('quienes-somos')}>Quiénes Somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#suscripciones" onClick={handleNavAnchor('suscripciones')}>Suscripciones</a>
            </li>
            <li className="nav-item ms-lg-3">
              <NavLink to="/login" className="btn btn-light btn-sm rounded-pill px-3">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
