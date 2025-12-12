import styles from "./camisetaGrid.module.css";
import CamisetaCard from "../../Reusables/camisetaCard/camisetaCard";

const CamisetaGrid = ({ camiseta }) => {
  return (
    <CamisetaCard
      imagen={camiseta.imagen}
      nombre={camiseta.nombre}
      precio={camiseta.precio}
      equipo={camiseta.equipo}
    />
  );
};

export default CamisetaGrid;
