import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={`${styles.menu} container`}>
        <div></div>
        <ul>
          <li>Funcionalidades</li>
          <li>App</li>
          <li>Planos</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
