import styles from "./cardGrid.module.css";
import { getCajas } from "../../../utils/querys";
import { useState, useEffect } from "react";
import CajaCard from "../../Reusables/cajaCard/cajaCard";

const ProducSection = () => {
  const [cajas, setCajas] = useState(null);

  useEffect(() => {
    const fetchCajas = async () => {
      try {
        const data = await getCajas();
        setCajas(data);
      } catch (error) {
        console.error("Error desde el card-Grid", error);
      }
    };

    fetchCajas();
  }, []);

  return (
    <div className={styles.productSection}>
      <h2 className={styles.sectionTitle}>Cajas Sorpresa</h2>
      <div className={styles.cardGrid}>
        {cajas &&
          cajas.slice(0,3).map((item, i) => (
            <CajaCard
              key={i}
              imagen={item.imagen}
              nombre={item.nombre}
              precio={item.precio}
            />
          ))}
      </div>
    </div>
  );
};

export default ProducSection;
