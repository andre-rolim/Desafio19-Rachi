import React from "react";
import styles from "../styles/HowWork.module.css";
import Description from "./Description";

const HowWork = () => {
  return (
    <section className={`${styles.section} container`}>
      <h1>Como Funciona</h1>
      <div>
        <Description
          img="Conections.png"
          span="Crie Conexões"
          text="Lorem ipsum dolor sit amet, consecteteu."
        />
        <Description
          img="Free.png"
          span="100% Gratuito"
          text="Lorem ipsum dolor sit amet, consecteteu."
        />
        <Description
          img="Sharing.png"
          span="Compartilhamento"
          text="Lorem ipsum dolor sit amet, consecteteu."
        />
      </div>
    </section>
  );
};

export default HowWork;
