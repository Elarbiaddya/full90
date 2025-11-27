import styles from "./footer.module.css";
import Acordeon from "../Acordeon.jsx";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerPrincipal}>
        <div className={styles.Acordeon}>
          <Acordeon />
        </div>
        <div className={styles.logo}></div>
        <div className={styles.sociales}></div>
      </div>
      <div className={styles.footerSecundario}>
        <span>© 2024 Full90. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
