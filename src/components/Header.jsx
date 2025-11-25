import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import CartOffcanvas from './CartOffcanvas';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const { formattedCart } = useCart();
  const [showCart, setShowCart] = useState(false);

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
    <>
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
                <a
                  href="/productos"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/productos', { replace: false });
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
                <NavLink className="nav-link" to="/suscripciones">Suscripciones</NavLink>
              </li>

              {/* Cart Icon */}
              <li className="nav-item ms-lg-3">
                <button className="btn btn-outline-light position-relative border-0" onClick={() => setShowCart(true)}>
                  <i className="bi bi-cart-fill"></i> 🛒
                  {formattedCart.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {formattedCart.length}
                    </span>
                  )}
                </button>
              </li>

              {/* User Auth */}
              <li className="nav-item ms-lg-3">
                {user ? (
                  <div className="dropdown">
                    <button className="btn btn-light btn-sm rounded-pill px-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Hola, {user}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><button className="dropdown-item" onClick={logout}>Cerrar Sesión</button></li>
                    </ul>
                  </div>
                ) : (
                  <NavLink to="/login" className="btn btn-light btn-sm rounded-pill px-3">Login</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CartOffcanvas show={showCart} handleClose={() => setShowCart(false)} />
    </>
  )
}
