import styles from "./modules/home.module.css"
import Carousel from "../components/home/carousel/carousel"
import CardGrid from "../components/home/cardGrid/cardGrid"

function Home() {
  return (
    <div className={styles.container}>
      <Carousel />
      <CardGrid />
      <CardGrid />
      <CardGrid />
      <CardGrid />
    </div>
  );
}

export default Home;
