import styles from "./modules/cajassorpresa.module.css";
import { getCajas } from "../utils/querys";
import { useState, useEffect } from "react";
import ProducSection from "../components/home/cajaGrid/cajaGrid";

function CajasMisteriosas() {
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
    <div className={styles.cajaContainer}>
      <h2>Cajas Sorpresa</h2>
      <div className={styles.cajaGrid}>
        {cajas &&
          cajas
            .map((item, i) => <ProducSection key={i} caja={item} />)}
      </div>
    </div>
  );
}

export default CajasMisteriosas;
