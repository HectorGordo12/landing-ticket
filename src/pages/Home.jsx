import main from "../img/main.jpg";
import styles from "./Home.module.css";
import data from "/posts.json";

const Home = () => {
  return (
    <>
      <img className={styles.img} src={main} alt="main" />
      <div className="main">
        <div className="text">
          <h1 className="title">
            CONFIRMED360 IS YOUR ENTERTAINMENT CONCIERGE!
          </h1>
          <div className="description">
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
          <form action="mailto:murmangordo12@gmail.com" encType="text/plain">
            <label>
              Ваше имя
              <input type="text" name="name" required />
            </label>
            <label>
              Что вы хотите заказать?
              <input type="text" name="order" required />
            </label>
            <button type="submit">Сделать заказ</button>
          </form>
          <div className={styles.insta}>
            <h2 className="slim">CONNECT WITH US!</h2>
            <hr className={styles.line} />
            <a
              className={styles.link}
              href="https://www.instagram.com/confirmed360/"
            >
              @CONFIRMED360
            </a>
          </div>
          <div className="album">
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
