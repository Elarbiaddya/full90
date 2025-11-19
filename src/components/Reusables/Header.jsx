import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/ContextUser";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase";
import logo from "/img/logo.webp";
import buscar from "/img/buscar.webp";
import usuario from "/img/usuario.webp";
import carrito from "/img/carrito.webp"; 
import styles from "../../pages/modules/header.module.css";


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
    <header className={styles.header}>
      <div className={styles.busquedaContainer}>
        <img src={buscar} alt=""/>
      </div>
      <div className={styles["logoContainer"]}>
        <img src={logo} />
      </div>
      <div className={styles["adminContainer"]}>
        <img src={usuario} />
        <img src={carrito}/>
      </div>
    </header>
  );
}

export default Header;
