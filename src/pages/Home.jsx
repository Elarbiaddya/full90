import styles from "./modules/home.module.css"
import Carousel from "../components/home/carousel/carousel"
import CardGrid from "../components/home/cardGrid/cardGrid"
import Marquee from "../components/home/marquee/marquee"

function Home() {
  return (
    <div className={styles.container}>
      <Carousel />
      <CardGrid />
      <Marquee />
    </div>
  );
}

export default Home;
