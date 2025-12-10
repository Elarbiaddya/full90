import styles from "./cardGrid.module.css";
import { getCajas } from "../../../utils/querys";
import { useState, useEffect } from "react";

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
          cajas.map((item, i) => (
            <div className={styles.card} key={i}>
              <img src={item.imagen} alt={item.nombre} />
              <div className={styles.cardInfo}>
                <h3>{item.nombre}</h3>
                <p className={styles.price}>{item.precio} €</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProducSection;
