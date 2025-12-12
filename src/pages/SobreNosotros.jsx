import styles from "./modules/sobrenosotros.module.css";

function SobreNosotros() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img
          src="/img/nosotros/imagen1.webp"
          alt="Sobre nosotros 1"
          className={styles.image}
        />
        <div className={styles.text}>
          <h2>Nuestra Historia</h2>
          <p>
            En Full90 nacimos con la pasión por el fútbol y el estilo.
            Nuestro objetivo es ofrecer camisetas únicas, de calidad y llenas de identidad.
          </p>
        </div>
      </div>

      <div className={`${styles.section} ${styles.reverse}`}>
        <img
          src="/img/nosotros/imagen2.webp"
          alt="Sobre nosotros 2"
          className={styles.image}
        />
        <div className={styles.text}>
          <h2>Nuestro Objetivo</h2>
          <p>
            Queremos que cada fanático viva su pasión con diseños cómodos, vistosos
            y modernos. Full90 es más que ropa: es cultura futbolera.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
