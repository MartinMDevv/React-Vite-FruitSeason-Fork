

export default function MapSection() {
  return (
    <section className="map-section text-center">
      <h2 className="display-5 fw-bold text-success mb-4">Encuéntranos Aquí</h2>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6691.187639892242!2d-71.5528454!3d-33.0144826!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1757331531785!5m2!1ses-419!2scl"
          width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}
