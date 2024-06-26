import React from "react";
import styles from "./loginHero.module.scss";

const LoginHero = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_page_img_cont}>
        <div className={styles.login_logo}>
          <div className={styles.logo} data-testid="logo" />
        </div>
        <div className={styles.container}>
          <div className={styles.login_photo}>
            <div className={styles.photo} data-testid="hero_photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHero;
