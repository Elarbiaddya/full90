import React from "react";
import styles from "./infoCard.module.css";
import { Icon } from "@iconify/react";

const InfoCard = ({ icon, text}) => {
  return (
    <div className={styles.infoCard}>
      <Icon icon={icon}/>
      <h3>{text}</h3>
    </div>
  );
};

export default InfoCard;