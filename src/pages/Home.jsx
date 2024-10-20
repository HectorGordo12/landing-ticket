import { Form } from "../components/Form";
import main from "../img/main.jpg";
import styles from "./Home.module.css";
import data from "/posts.json";
import { useVisibility } from "../hooks/useVisibility";
import "../app.css"; // Подключаем глобальный app.css

const Home = () => {
  const [titleVisible, titleRef] = useVisibility("titleVisible");
  const [descVisible, descRef] = useVisibility("descVisible", 0.1, 200);
  const [instaVisible, instaRef] = useVisibility("instaVisible", 0.3, 0);
  const [albumVisible, albumRef] = useVisibility("albumVisible", 0.1, 200);

  console.log(instaVisible);

  return (
    <>
      <img className={styles.img} src={main} alt="main" />
      <div className="main">
        <div className="text">
          <h1
            className={`title ${titleVisible ? "visible" : "hidden"}`}
            ref={titleRef}
          >
            CONFIRMED360 IS YOUR ENTERTAINMENT CONCIERGE!
          </h1>
          <div
            ref={descRef}
            className={`description ${styles.txtCenter} ${
              descVisible ? "visible" : "hidden"
            }`}
          >
            <p>
              Confirmed360 is your solution to the complex booking process.{" "}
            </p>
            <p>
              We specialize in providing clients with exclusive access to the
              world of entertainment, fashion, sports, music, and travel.
              Through our trusted relationships and partnerships with the
              world’s biggest artists, athletes and entertainment organizations,
              we have exclusive access you cannot find anywhere else.
            </p>
          </div>
        </div>
        <div className="center">
          <Form />
          <div
            ref={instaRef}
            className={`${styles.insta} ${instaVisible ? "visible" : "hidden"}`}
          >
            <h2 className={styles.slim}>CONNECT WITH US!</h2>
            <hr className={styles.line} />
            <a
              className={styles.link}
              href="https://www.instagram.com/confirmed360/"
            >
              @CONFIRMED360
            </a>
          </div>
          <div
            ref={albumRef}
            className={`album ${albumVisible ? "visible" : "hidden"}`}
          >
            {data.map((post) => {
              return (
                <a href={post.link} key={post.id}>
                  <img src={post.img} alt="img" className={styles.instImg} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
