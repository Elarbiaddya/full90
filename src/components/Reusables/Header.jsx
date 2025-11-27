import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/ContextUser";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase";
import logo from "/img/logo.webp";
import buscar from "/img/buscar.webp";
import usuario from "/img/usuario.webp";
import carrito from "/img/carrito.webp";
import styles from "./header.module.css";

function Header() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const handleLogout = async () => {
    try {
      const response = await signOutUser();
      console.log(response);
      setCurrentUser(null);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.busquedaContainer}>
          <img src={buscar} alt="" />
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} />
        </div>
        <div className={styles.adminContainer}>
          <img src={usuario} />
          <img src={carrito} />
        </div>
      </header>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <ul>
            <li>
              <NavLink to="/Camiseta">Camisetas de Fútbol</NavLink>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <NavLink to="/CajasMisteriosas">Cajas Misteriosas</NavLink>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <NavLink to="/Nosotros">Nosotros</NavLink>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <NavLink to="/Contacto">Contacto</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
