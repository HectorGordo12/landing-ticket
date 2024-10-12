import styles from "./About.module.css";

const About = () => {
  return (
    <div className="main">
      <div className="text">
        <h2 className="title">WE GET YOU PLACES NO ONE ELSE CAN.</h2>
        <div className={`description ${styles.left}`}>
          <p>
            <b>CONFIRMED360</b> is the leading entertainment concierge providing
            access to the world’s most coveted events. We are the direct source
            for exclusive access and the solution to the complex booking
            process.
          </p>
          <p>
            Our expert representatives work around the clock to cater to your
            needs at any venue. Through our team’s deep-rooted industry
            partnerships and relationships, no request is out of reach.
          </p>
        </div>
        <p className={styles.yelow}>
          CLICK TO VIEW OUR EXTENDED MONTHLY EVENTS CALENDAR FOR ACCESS IN YOUR
          CITY.
        </p>
        <a href="https://static1.squarespace.com/static/5e8e02eb5040c0487c716fa7/t/6704137bc3d9a94997596f03/1728320382272/OCTOBER+2024+CAL_Logo+copy.pdf">
          <button className={styles.btn}>OCTOBER EVENTS CALENDAR</button>
        </a>
      </div>
      <div className={styles.content}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/09ace174-deb8-4ea3-839d-048fac8a78e6/C360_Partnerships_2024Update.jpg?format=2500w"
          alt=""
        />
        <div className={styles.center}>
          <p className="slim">TESTIMONIALS</p>
        </div>
      </div>
    </div>
  );
};

export { About };
