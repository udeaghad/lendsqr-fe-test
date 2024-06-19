"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./loginForm.module.scss";
import { LoginData } from "../../../types";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.welcome_msg}>
          <div>Welcome!</div>
          <span>Enter details to login.</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_group}>
            <div className={styles.form_item}>
              <input
                type="email"
                id="email"
                className={styles.email_input}
                placeholder="Email"
                {...register("email", {
                  required: true,
                  validate: {
                    // minLength: (v) =>
                    //   v.length >= 6 ||
                    //   "The email should have at least 6 characters",
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address must be a valid address",
                  },
                })}
              />
            </div>
            {errors.email?.message && <span>{errors.email?.message}</span>}
          </div>
          <div className={styles.form_group}>
            <div className={styles.form_item}>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                className={styles.password_input}
                placeholder="Password"
                {...register("password", {
                  required: true,
                  validate: {
                    minLength: (v) =>
                      v.length >= 8 ||
                      "The password should have at least 8 characters",
                    matchPattern: (v) =>
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                        v
                      ) ||
                      "Password must contain at least one letter, one number and one special character",
                  },
                })}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={styles.show_btn}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password?.message && (
              <span>{errors.password?.message}</span>
            )}
          </div>
          <div className={styles.form_group}>
            <button type="submit" className={styles.submit_button}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
