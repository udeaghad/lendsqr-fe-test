import React from "react";
import styles from "../login.module.scss";
import LoginHero from "../../components/LoginHero/LoginHero";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {

  return (
    <div className={styles.page_container}>
      <section className={styles.hero_container}>
        <LoginHero />
      </section>
      <section className={styles.hero_container}>
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
