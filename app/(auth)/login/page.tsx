import React from "react";
// import styles from "./../../variables.module.scss";
import LoginHero from "../../components/LoginHero/LoginHero";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {

  return (
    <div>
      <section>
        <LoginHero />
      </section>
      <section>
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
