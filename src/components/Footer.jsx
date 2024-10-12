import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.main}>
      <Link className={styles.terms} to="terms-of-service">
        TERMS & CONDITIONS
      </Link>
      <div className={styles.social}>
        <a href="https://www.instagram.com/confirmed360/?hl=en">INSTAGRAM</a>
        <a href="https://www.facebook.com/profile.php?id=100083014886643">
          META
        </a>
        <a href="https://www.threads.net/@confirmed360">THREADS</a>
      </div>
    </div>
  );
};

export { Footer };
