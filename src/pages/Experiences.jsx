import { Form } from "../components/Form";
import styles from "./Experiences.module.css";
import data from "/categories.json";
import { useVisibility } from "../hooks/useVisibility";

const Experiences = () => {
  const [textVisible, textRef] = useVisibility("textVisible");
  const [albumVisible, albumRef] = useVisibility("albumVisible");
  const [descriptionVisible, descriptionRef] =
    useVisibility("descriptionVisible");

  return (
    <div className="main">
      <div className="center">
        <div
          ref={textRef}
          className={`text ${textVisible ? "visible" : "hidden"}`}
        >
          <h1 className="title">SELECT A CONFIRMED360 EXPERIENCE</h1>
          <div className="description">
            <p>
              <b>CONFIRMED360</b> works around the clock to ensure our clients
              receive those moments that feel like time has stopped. Whether you
              want access to bucket-list items, "sold-out" events, or personally
              curated experiences, we make it happen. We get you places no one
              else can.
            </p>
          </div>
        </div>
        <div
          ref={albumRef}
          className={`album ${albumVisible ? "visible" : "hidden"}`}
        >
          {data.map((category) => {
            return (
              <a href={category.link} key={category.id}>
                <img src={category.img} alt="img" className={styles.img} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="text">
        <p
          ref={descriptionRef}
          className={`description ${descriptionVisible ? "visible" : "hidden"}`}
        >
          Let our expert team help you with your event requests. Fill out the
          form below and we will contact you within the next 24-48 hours.
        </p>

        <Form />
      </div>
    </div>
  );
};

export { Experiences };
