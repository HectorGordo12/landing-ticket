import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      height="20px"
      width="50px"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 330 330"
      xml:space="preserve"
    >
      <path
        id="XMLID_27_"
        d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
      />
    </svg>
  );
};

const photos = [
  "https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/5ad66646-5629-46c2-92d3-7ef33bd77cc2/Testimonials_2023_8.jpg",
  "https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/f66b4fc9-cc0f-4540-8246-f9afc3796c12/Testimonials_2023_4.jpg",
  "https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/c21e59fe-36cc-46d4-b993-859c01141fe1/Testimonials_1.jpg",
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visiblePhotos, setVisiblePhotos] = useState([]);

  const photosToShow = 5; // Количество видимых фото одновременно

  // Обновление видимых фото
  const updateVisiblePhotos = (index) => {
    const updatedPhotos = [];
    for (let i = 0; i < photosToShow; i++) {
      const photoIndex = (index + i) % photos.length; // Зацикливаем индекс
      updatedPhotos.push(photos[photoIndex]);
    }
    setVisiblePhotos(updatedPhotos);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  useEffect(() => {
    updateVisiblePhotos(currentIndex);
  }, [currentIndex]);

  // Автоматическое пролистывание каждые 3 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.carousel}>
      <h3 className={styles.title}>TESTIMONIALS</h3>
      <button className={`${styles.btn} ${styles.left}`} onClick={handlePrev}>
        <Arrow />
      </button>
      <div className={styles.inner}>
        {visiblePhotos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Slide ${index + 1}`}
            className={styles.item}
          />
        ))}
      </div>
      <button className={`${styles.btn} ${styles.right}`} onClick={handleNext}>
        <Arrow />
      </button>
    </div>
  );
};

export { Testimonials };
