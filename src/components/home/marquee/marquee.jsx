import styles from "./marquee.module.css";

export default function Marquee() {
  const logos = [
    "/img/marquee/madrid.svg",
    "/img/marquee/barca.webp",
    "/img/marquee/atletico.webp",
    "/img/marquee/bayern.webp",
    "/img/marquee/chelsea.webp",
    "/img/marquee/psg.webp",
    "/img/marquee/united.png",
    "/img/marquee/liverpool.webp",
    "/img/marquee/malaga.png",
    "/img/marquee/city.png",
    "/img/marquee/juve.webp"
  ];

  // Duplicamos los logos para scroll continuo
  const logosLoop = [...logos, ...logos];

  return (
    <div className={styles.marquee}>
      <div className={styles.marquee__track}>
        {logosLoop.map((logo, index) => (
          <div className={styles.marquee__item} key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
