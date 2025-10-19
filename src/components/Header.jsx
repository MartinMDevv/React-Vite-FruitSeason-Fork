import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold">🍓 FRUITSEASON</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">Productos</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#suscripciones">Suscripciones</a>
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
