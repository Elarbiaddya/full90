import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/ContextUser";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "/img/logo.webp";
import buscar from "/img/buscar.webp";
import usuario from "/img/usuario.webp";
import carrito from "/img/carrito.webp";
import leave from "/img/leave.webp";
import styles from "./header.module.css";


function Header() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await signOutUser();
      console.log(response);
      setCurrentUser(null);
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleHome = () => {
    navigate("/"); // Va a la página Home.
  };

  const handlePerfil = () => {
    if (!currentUser) {
      navigate("/Login");
    } 
    else {
      navigate("/Perfil");
    }
  };

  const handleCarrito = () => {
    navigate("/Carrito"); // Va a la página Carrito.
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.div}>
          <div className={styles.busquedaContainer}>
            <Icon icon="hugeicons:search-01" />
          </div>
          <div className={styles.logoContainer}>
            <img onClick={handleHome} src={logo} /> 
          </div>
          <div className={styles.adminContainer}>
            <Icon icon="mage:user" onClick={handlePerfil}/>
              {currentUser && <Icon icon="pepicons-pencil:leave" onClick={handleLogout} />}
            <Icon icon="famicons:bag-outline" />
          </div>
        </div>
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
      </header>
    </>
  );
}

export default Header;
