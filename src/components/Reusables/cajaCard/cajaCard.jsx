import React from "react";
import styles from "./cajaCard.module.css";

const CajaCard = ({ imagen, nombre, precio }) => {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={nombre} />
      <div className={styles.cardInfo}>
        <h3>{nombre}</h3>
        <p className={styles.price}>{precio} €</p>
      </div>
    </div>  
  );
};

export default CajaCard;