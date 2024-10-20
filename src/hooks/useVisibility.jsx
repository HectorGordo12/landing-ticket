import { useState, useEffect, useRef } from "react";

const useVisibility = (key, threshold = 0.1, delay = 0) => {
  const [isVisible, setIsVisible] = useState(() => {
    // Получаем состояние из localStorage, если оно есть
    const storedValue = localStorage.getItem(key);
    return storedValue === "true"; // Преобразуем строку в boolean
  });

  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              setIsVisible(true);
              localStorage.setItem(key, "true"); // Сохраняем в localStorage
            }, delay);
          }
        });
      },
      {
        threshold,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, delay, isVisible, key]);

  return [isVisible, elementRef];
};

export { useVisibility };
