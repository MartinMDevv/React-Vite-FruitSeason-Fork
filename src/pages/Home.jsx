import Carousel from '../components/Carousel'
import Subscriptions from '../components/Subscriptions'
import Proposal from '../components/Proposal'
import QuienesSomos from '../components/QuienesSomos'
import MapSection from '../components/MapSection'

export default function Home() {
  return (
    <>
  <section id="eslogan" className="Eslogan text-white text-center d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Frutas y verduras frescas cada semana, directo a tu mesa</h1>
          <p className="text">Disfruta cajas personalizadas según tu suscripción, llenas de sabor, frescura y calidad.</p>
        </div>
      </section>

      <main className="container my-5">
        <Carousel />
        <Subscriptions />
        <hr className="my-5" />
        <Proposal />
        <hr className="my-5" />
        <QuienesSomos />
        <hr className="my-5" />
        <MapSection />
      </main>
    </>
  )
}