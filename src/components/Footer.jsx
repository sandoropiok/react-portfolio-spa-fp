import styles from "../styles/FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Sandor Opiok. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
