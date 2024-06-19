import React from "react";
import Image from "next/image";
import styles from "./../../variables.module.scss";

const Login = () => {
  return (
    <div>
      <div className={styles.login_container}>
        <div className={styles.login_page_img_cont}>
          <div className={styles.login_logo}>
            <div className={styles.logo} />
          </div>
          <div className={styles.login_photo}>
            <div className={styles.photo} />
          </div>
        </div>
        <div className={styles.login_details_cont}>login</div>
      </div>
    </div>
  );
};

export default Login;
