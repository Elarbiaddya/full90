import styles from "./cajaGrid.module.css";
import CajaCard from "../../Reusables/cajaCard/cajaCard";

const ProducSection = ({ caja }) => {
  return (
    <div className={styles.productSection}>
      <div className={styles.cardGrid}>
        <CajaCard
          imagen={caja.imagen}
          nombre={caja.nombre}
          precio={caja.precio}
        />
      </div>
    </div>
  );
};

export default ProducSection;
