import styles from "./modules/home.module.css";
import Carousel from "../components/home/carousel/carousel";
import CardGrid from "../components/home/cajaGrid/cajaGrid";
import Marquee from "../components/home/marquee/marquee";
import InfoCard from "../components/home/infoCard/infoCard";
import ProducSection from "../components/home/cajaGrid/cajaGrid";

import { getCajas } from "../utils/querys";

import { useState, useEffect } from "react";

function Home() {
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
    <div className={styles.container}>
      <Carousel />
      <div className={styles.infoCardsContainer}>
        <InfoCard icon="octicon:gift-24" text="Elige tu caja sorpresa" />
        <InfoCard
          icon="radix-icons:cross-1"
          text="Descarta el equipo que no te guste"
        />
        <InfoCard icon="bi:bag-check" text="Añádela al carrito" />
      </div>
      <div className={styles.cajaContainer}>
        <h2>Cajas Sorpresa</h2>
        <div className={styles.cajaGridContainer}>
          {cajas &&
            cajas
              .slice(0, 3)
              .map((item, i) => <ProducSection key={i} caja={item} />)}
        </div>
      </div>

      <Marquee />
    </div>
  );
}

export default Home;
