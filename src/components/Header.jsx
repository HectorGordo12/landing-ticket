import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { Instagram, Linkedin, Meta, X } from "./Icons";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  // useEffect для управления прокруткой
  useEffect(() => {
    if (openMenu) {
      // Запретить прокрутку
      document.body.style.overflow = "hidden";
    } else {
      // Разрешить прокрутку
      document.body.style.overflow = "auto";
    }

    // Очистка стиля при размонтировании компонента
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <>
      <div className={styles.main}>
        <div
          className={`${styles.burger} ${openMenu ? styles.active : ""}`}
          onClick={() => handleClick()}
        >
          <span></span>
        </div>

        <Link to="/">
          <img
            className={styles.logo}
            src="https://images.squarespace-cdn.com/content/v1/5e8e02eb5040c0487c716fa7/8390d7af-8f41-4698-aa72-018a7081991d/C360_600x600_White_BlackBG.jpg?format=1500w"
            alt="logo"
          />
        </Link>

        <div className={styles.social}>
          <a href="">
            <Linkedin />
          </a>
          <a href="">
            <Meta />
          </a>
          <a href="">
            <X />
          </a>
          <a href="">
            <Instagram />
          </a>
        </div>
      </div>
      {openMenu && (
        <div className={styles.nav}>
          <div className={styles.list}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
              onClick={handleClick}
            >
              HOME
            </NavLink>
            <NavLink
              to="/experiences"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
              onClick={handleClick}
            >
              EXPERIENCES
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
              onClick={handleClick}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/partners"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
              onClick={handleClick}
            >
              OUR GLOBAL PARTNERS
            </NavLink>
            <NavLink
              to="/referrals"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.activeLink}`
                  : styles.navLink
              }
              onClick={handleClick}
            >
              REFERRAL PROGRAM
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export { Header };
