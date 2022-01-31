import styles from "../styles/Contact.module.css";
import Button from "./Button";

const Contact = () => {
  return (
    <section className={styles.containerContact}>
      <div className="container">
        <h2>Contato</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia
          mi quis euismod ultrices.
        </p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Seu melhor e-mail"
        />
        <Button
          padding="8px 32px"
          width="118px"
          height="38px"
          fontSize="18px"
          radius="50px"
          lineHeight="22px"
          children="Enviar"
        />
      </div>
    </section>
  );
};

export default Contact;
