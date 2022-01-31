import React from "react";
import styles from "../styles/AppDownload.module.css";

const AppDownload = () => {
  return (
    <section className={styles.background}>
      <div className={`${styles.section} container`}>
        <div>
          <h3>Baixe nosso app para desfrutar mais!</h3>
          <p>
            Amet in elementum nulla scelerisque dui, egestas at. Elit
            consectetur turpis elementum amet vitae et etiam nec. Varius
            volutpat hac adipiscing tincidunt pretium.
          </p>
          <img src="GooglePlay-Button.png" alt="" />
          <img src="AppStore-Button.png" alt="" />
        </div>
        <img src="Notifications.png" alt="" />
      </div>
    </section>
  );
};

export default AppDownload;
