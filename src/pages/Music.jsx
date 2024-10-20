import { Form } from "../components/Form";
import styles from "./Music.module.css";
import data from "/clientsPosts.json";

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
      <div className={styles.wrapper}>
        <img
          className={styles.imageBody}
          src="https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/1693419529281-GME537Z3X60QNRQ4TUS4/image-asset.jpeg?format=2500w"
          alt="pov"
        />
        <p className={styles.textBody}>CLIENT POV</p>
      </div>
      <div className="center">
        <div className={styles.album}>
          {data.map((post) => {
            return (
              <img
                key={post.id}
                className={styles.item}
                src={post.img}
                alt={`Post № ${post.id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Music };
