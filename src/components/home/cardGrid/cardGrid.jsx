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
              <div>
                <p className={styles.price}>{item.precio}</p>
                <h3>{item.nombre}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProducSection;
/* const items = [
  {
    image: "/cajas/caja1.webp",
    title: "Producto 1",
    price: "$10"
  },
  {
    image: "/cajas/caja2.webp",
    title: "Producto 2",
    price: "$20"
  },
  {
    image: "/cajas/caja3.webp",
    title: "Producto 3",
    price: "$30"
  }
]; */

/* 

export default function ProductSection() {
  return (
    <div className={styles.productSection}>
      <h2 className={styles.sectionTitle}>Cajas Sorpresa</h2>

      <div className={styles.cardGrid}>
        {items.map((item, i) => (
          <div className={styles.card} key={i}>
            <img src={item.image} alt={item.title} />
            <div>
              <p className={styles.price}>{item.price}</p>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 */
