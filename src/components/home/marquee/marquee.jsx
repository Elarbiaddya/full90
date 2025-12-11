import styles from "./marquee.module.css";

export default function Marquee() {
  // Importa automáticamente TODAS las imágenes del directorio
  const images = import.meta.glob(
    "/public/img/marquee/*.{png,jpg,jpeg,webp,svg}",
    {
      eager: true,
    }
  );

  // Convertimos el objeto en un array de rutas
  const logos = Object.values(images).map((img) => img.default);

  // Scroll infinito
  const logosLoop = [...logos, ...logos];

  return (
    <div className={styles.marquee}>
      <div className={styles.marquee__track}>
        {/* Primera tanda */}
        {logos.map((logo, index) => (
          <div className={styles.marquee__item} key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}

        {/* Segunda tanda (copia exacta) */}
        {logos.map((logo, index) => (
          <div className={styles.marquee__item} key={`copy-${index}`}>
            <img src={logo} alt={`Logo copia ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
