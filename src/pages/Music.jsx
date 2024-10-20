import { Form } from "../components/Form";
import styles from "./Music.module.css";

const Music = () => {
  return (
    <div className="main">
      <img
        className={styles.imageHead}
        src="https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/bda90d07-7096-4840-bdb7-2c7b621003b3/MUSIC.JPG"
        alt="music"
      />
      <div className="text">
        <h1 className="title">MUSIC</h1>
        <p className={styles.yelow}>MIC DROP ACCESS</p>
        <div className={`description ${styles.center}`}>
          <p className={styles.marginBottom}>
            Step into a world of music that transcends ordinary experiences,
            exclusively with CONFIRMED360. Our team of experts present you with
            packages beyond the traditional ticketing sites. Through our
            deep-rooted industry connections, CONFIRMED360 unlocks access to
            premium tickets for sold-out shows, private suites, VIP passes,
            artist meet & greets and much more.
          </p>
          <p>
            Upon filling out the form below, a dedicated Confirmed360 concierge
            representative will be in contact with you within 24-48 hours.
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export { Music };
