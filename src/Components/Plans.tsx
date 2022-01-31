import styles from "../styles/Plans.module.css";
import Button from "../Components/Button";

const Plans = () => {
  return (
    <section className={`${styles.container} container`}>
      <h2>Nossos Planos</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
        mi quis euismod ultrices.
      </p>
      <div className={styles.plans}>
        <ul className={styles.lessPrefer}>
          <h3>Bronze</h3>
          <span>R$28/mês</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>
          <Button
            padding="8px 80px"
            width="230px"
            height="43px"
            fontSize="20px"
            radius="50px"
            lineHeight="27px"
            children="Assinar"
          />
        </ul>
        <ul className={styles.morePrefer}>
          <h3>Prata</h3>
          <button>PREFERIDO</button>
          <span>R$57/mês</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>
          <Button
            padding="8px 80px"
            width="230px"
            height="43px"
            fontSize="20px"
            radius="50px"
            lineHeight="27px"
            children="Assinar"
          />
        </ul>
        <ul className={styles.lessPrefer}>
          <h3>Gold</h3>
          <span>R$94/mês</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>
          <Button
            padding="8px 80px"
            width="230px"
            height="43px"
            fontSize="20px"
            radius="50px"
            lineHeight="27px"
            children="Assinar"
          />
        </ul>
      </div>
    </section>
  );
};

export default Plans;
