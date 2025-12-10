import styles from "./modules/home.module.css"
import Carousel from "../components/home/carousel/carousel"
import CardGrid from "../components/home/cardGrid/cardGrid"
import Marquee from "../components/home/marquee/marquee"
import InfoCard from "../components/home/infoCard/infoCard";

function Home() {
  return (
    <div className={styles.container}>
      <Carousel />
      <div className={styles.infoCardsContainer}>
        <InfoCard
          icon="octicon:gift-24"
          text="Elige tu caja sorpresa"
        />
        <InfoCard
          icon="radix-icons:cross-1"
          text="Descarta el equipo que no te guste"
        />
        <InfoCard
          icon="bi:bag-check"
          text="Añádela al carrito"
        />
      </div>
      <CardGrid />
      <Marquee />
    </div>
  );
}

export default Home;
