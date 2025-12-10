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
          icon="fluent-mdl2:giftbox"
          text="Elige tu caja sorpresa"
        />
      </div>
      <CardGrid />
      <Marquee />
    </div>
  );
}

export default Home;
