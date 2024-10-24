import styles from "./Partners.module.css";
import "../App.css";

const Partners = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className="title">OUR PARTNERS</h1>
        <a
          href="mailto:test@gmail.com?subject=Partnership"
          className={`${styles.btn} ${styles.top}`}
        >
          BECOME A PARTNER
        </a>
      </div>

      <div className={styles.list}>
        <figure className={styles.figure}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/fb273854-a4f6-4b69-b34d-c2e2e2051972/863EFFD5-32A2-49F1-8051-6F26203EDD4E.JPG?format=2500w"
            alt="Las Vegas Raiders"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <h2 className={styles.name}>LAS VEGAS RAIDERS</h2>
            <p className={styles.description}>
              Confirmed360 is the Official Experience Provider of the Las Vegas
              Raiders. Through this partnership we produce the ultimate gameday
              experience, starting with the Raiders Pregame MASQUERAID! This VIP
              tailgate includes a 45 foot pirate ship with a DJ booth, live
              performances, all inclusive F&B, open bars, lounges, TVs, misting
              areas and much more!
            </p>
            <a href="https://www.raidersexperiences.com/">
              <p className={styles.more}>LEARN MORE</p>
            </a>
          </figcaption>
        </figure>

        <figure className={`${styles.figure} ${styles.swap}`}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/30e1e029-319b-4cb6-8253-e05952474d1e/E_TOD3948+copy.JPG?format=2500w"
            alt="LOS ANGELES RAMS"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <h2 className={styles.name}>LOS ANGELES RAMS</h2>
            <p className={styles.description}>
              As the Official Entertainment Concierge, Confirmed360 will provide
              exclusive customizable services, access, and experiences to the
              most coveted live entertainment events to the team and its fans.
            </p>
            <a href="https://www.raidersexperiences.com/">
              <p className={styles.more}>LEARN MORE</p>
            </a>
          </figcaption>
        </figure>
        <figure className={styles.figure}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/fb273854-a4f6-4b69-b34d-c2e2e2051972/863EFFD5-32A2-49F1-8051-6F26203EDD4E.JPG?format=2500w"
            alt="Las Vegas Raiders"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <h2 className={styles.name}>LAS VEGAS RAIDERS</h2>
            <p className={styles.description}>
              Confirmed360 is the Official Experience Provider of the Las Vegas
              Raiders. Through this partnership we produce the ultimate gameday
              experience, starting with the Raiders Pregame MASQUERAID! This VIP
              tailgate includes a 45 foot pirate ship with a DJ booth, live
              performances, all inclusive F&B, open bars, lounges, TVs, misting
              areas and much more!
            </p>
            <a href="https://www.raidersexperiences.com/">
              <p className={styles.more}>LEARN MORE</p>
            </a>
          </figcaption>
        </figure>

        <figure className={`${styles.figure} ${styles.swap}`}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/30e1e029-319b-4cb6-8253-e05952474d1e/E_TOD3948+copy.JPG?format=2500w"
            alt="LOS ANGELES RAMS"
            className={styles.image}
          />
          <figcaption className={styles.caption}>
            <h2 className={styles.name}>LOS ANGELES RAMS</h2>
            <p className={styles.description}>
              As the Official Entertainment Concierge, Confirmed360 will provide
              exclusive customizable services, access, and experiences to the
              most coveted live entertainment events to the team and its fans.
            </p>
            <a href="https://www.raidersexperiences.com/">
              <p className={styles.more}>LEARN MORE</p>
            </a>
          </figcaption>
        </figure>
      </div>
      <div className={styles.wrapper}>
        <a
          href="mailto:test@gmail.com?subject=Partnership"
          className={styles.btn}
        >
          BECOME A PARTNER
        </a>
      </div>
    </div>
  );
};

export { Partners };
