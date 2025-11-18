import "./styles/globalstyles.css";
import "./styles/App.css";

import SignInForm from "./pages/Login";
import SignUpForm from "./pages/Registro";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

/* import BigLayout from "./pages/BigLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import CajasMisteriosas from "./pages/CajasMisteriosas"
import Tienda from "./pages/Tienda"
import Carrito from "./pages/Carrito"
import Pago from "./pages/Pago"
import Camiseta from "./pages/Camiseta"
import Perfil from "./pages/Perfil"
import Pago from "./pages/Pago"
import Contacto from "./pages/Contacto" */

function App() {
  return (
    <Routes>
      <Route path="/login" element={<SignInForm />} />
      <Route path="/registro" element={<SignUpForm />} />
      <Route path="/" element={<Home />} />

      {/* <Route path="/" element={<BigLayout />}>
        <Route path="*" element={<Error />} />
      </Route> */}
    </Routes>
  );
}

export default App;

/* 

import Home from "./pages/Home"
import Page2 from "./pages/Page2"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import Contacto from "./pages/Contacto"
import BigLayout from "./pages/BigLayout"
import ProductDetail from "./pages/ProductDetail"
import PrivateRoute from "./pages/protected/PrivateRoutes"
import Dashboard from "./pages/Dashboard"

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BigLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="home/:productId" element={<ProductDetail />} />
          <Route path="dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Route>
      </Routes >
    </>
  )
} */
