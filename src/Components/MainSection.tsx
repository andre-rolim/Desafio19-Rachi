import React from "react";
import styles from "../styles/MainSection.module.css";
import Button from "./Button";

const MainSection = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.main} container`}>
        <div className={styles.left}>
          <h1>
            Rachi, <br></br>é tudo que você precisa em um só lugar.
          </h1>
          <Button
            width="200px"
            height="56px"
            padding="16px 36px"
            children="Cadastrar-se"
            fontSize="20px"
            lineHeight="24px"
            radius="50px"
          />
        </div>
        <img src="Banner.png" alt="" />
      </div>
    </section>
  );
};

export default MainSection;
