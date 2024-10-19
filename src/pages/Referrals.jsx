import { Testimonials } from "../components/Testimonials";
import styles from "./Referrals.module.css";

const Referrals = () => {
  return (
    <>
      <div className="main">
        <div className="text">
          <h2 className="title">C360 FRIENDS & FAMILY</h2>
          <h3 className={styles.slim}>WE GET YOU PLACES NO ONE ELSE CAN.</h3>
          <div className="description">
            <p>
              <strong>CONFIRMED360</strong> is the leading entertainment
              concierge providing access to the world’s most coveted events. We
              are the direct source for exclusive access and the solution to the
              complex booking process.
            </p>
            <p>
              Our expert representatives work around the clock to cater to your
              needs at any venue. Through our team’s deep-rooted industry
              partnerships and relationships, no request is out of reach.{" "}
            </p>
          </div>
          <h3 className={styles.subtitle}>CONNECT & COLLECT</h3>
          <div className="description">
            <p>
              <strong>CONFIRMED360</strong> offers an exclusive referral
              program, inviting clients to share unparalleled experiences with
              peers, unlocking first access benefits and deals. It's an
              opportunity to extend the circle of affluence. Get your friends
              places no one else can.
            </p>
          </div>
          <h3 className={styles.subtitle}>ACCESS CONFIRMED360’S EVENTS</h3>
          <div className={styles.btnContainer}>
            <a href="#">
              <button className={styles.btn}>OCTOBER EVENT CALENDAR</button>
            </a>
            <a href="#">
              <button className={styles.btn}>MAJOR EVENT CALENDAR</button>
            </a>
          </div>
        </div>
        <div className={styles.process}>
          <h2 className={styles.chapterTitle}>THE PROCESS</h2>
          <img
            className={styles.img}
            src="https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/048c483c-264c-4a96-83bd-3f7f43fae2bd/Screenshot+2023-11-13+at+5.17.10+PM.jpg?format=2500w"
            alt=""
          />
        </div>
        <div className={styles.tiers}>
          <h2 className={styles.chapterTitle}>TIERS</h2>
          <img
            className={styles.img}
            src="https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/3472e76b-dd59-4913-a0e8-95cba62d06bf/Screenshot+2023-12-01+at+2.29.29+PM.png?format=2500w"
            alt=""
          />
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export { Referrals };
