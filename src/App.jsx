import "./styles/globalstyles.css";
import "./styles/App.css";

import { Routes, Route } from "react-router-dom";
import BigLayout from "./pages/BigLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import CajasMisteriosas from "./pages/CajasMisteriosas";
import Tienda from "./pages/Tienda";
import Carrito from "./pages/Carrito";
import Camiseta from "./pages/Camiseta";
import Perfil from "./pages/Perfil";
import Pago from "./pages/Pago";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BigLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/CajasMisteriosas" element={<CajasMisteriosas />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Camiseta" element={<Camiseta />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Pago" element={<Pago />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} /> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
