import styles from "./modules/tienda.module.css"
import { getCamisetas } from "../utils/querys";
import { useState, useEffect } from "react";
import CamisetaGrid from "../components/home/camisetaGrid/camisetaGrid";

function Tienda() {
  const [camisetas, setCamisetas] = useState([]);

  useEffect(() => {
    const fetchCamisetas = async () => {
      try {
        const data = await getCamisetas();
        setCamisetas(data);
      } catch (error) {
        console.error("Error cargando camisetas", error);
      }
    };

    fetchCamisetas();
  }, []);

  return (
    <div className={styles.tiendaContainer}>
      <h2>Camisetas de fútbol</h2>
      <div className={styles.camisetasGrid}>
        {camisetas &&
          camisetas
            .map((item) => <CamisetaGrid key={item.id} camiseta={item} />)}
      </div>
    </div>
  );
}

export default Tienda;
