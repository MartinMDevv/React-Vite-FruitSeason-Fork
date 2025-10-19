import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Productos from './pages/Productos.jsx';
import PagarPlanes from './pages/PagarPlanes.jsx';
import './App.css';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/PagarPlanes" element={<PagarPlanes />} />
        {/* <Route path="/FruitCard" element={<FruitCard />} /> */}
        {/* <Route path="/FruitList" element={<FruitList />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;