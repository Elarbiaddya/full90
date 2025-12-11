import styles from "./modules/tienda.module.css"
import { getCamisetas } from "../utils/querys";
import { useState, useEffect } from "react";

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
    <div className={styles.productSection}>
      <h2 className={styles.sectionTitle}>Camisetas</h2>
      <div className={styles.cardGrid}>
        {camisetas.length > 0 ? (
          camisetas.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.cardImageContainer}>
                <img src={item.imagen} alt={item.nombre} />
              </div>
              <div className={styles.cardOverlay}>
                <h3>{item.nombre}</h3>
                <p className={styles.price}>{item.precio} €</p>
                <p><strong>Equipo:</strong> {item.equipo}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay camisetas disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Tienda;
