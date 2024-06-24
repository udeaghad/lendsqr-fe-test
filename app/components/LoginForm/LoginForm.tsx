"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import styles from "./loginForm.module.scss";
import { LoginData, LoginFormProps } from "../../../types";

const LoginForm = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const isLoggedIn = localStorage.getItem("user");

  if (isLoggedIn) {
    router.push("/dashboard/users");
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    localStorage.setItem("user", JSON.stringify({ userEmail: data.email }));
    router.push("/dashboard/users");
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.welcome_msg}>
          <div>Welcome!</div>
          <span>Enter details to login.</span>
        </div>

        <Form
          isPasswordVisible={isPasswordVisible}
          togglePasswordVisibility={togglePasswordVisibility}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default LoginForm;

export const Form = ({
  onSubmit,
  isPasswordVisible,
  togglePasswordVisibility,
}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="login_form">
      <div className={styles.form_group}>
        <div className={styles.form_item}>
          <input
            type="email"
            id="email"
            className={styles.email_input}
            placeholder="Email"
            data-testid="email_input"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  "Email address must be a valid address",
              },
            })}
          />
        </div>
        {errors.email?.message && (
          <span data-testid="error-email">{errors.email?.message}</span>
        )}
      </div>
      <div className={styles.form_group}>
        <div className={styles.form_item}>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            className={styles.password_input}
            placeholder="Password"
            data-testid="password_input"
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
            data-testid="show_button"
          >
            {isPasswordVisible ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password?.message && (
          <span data-testid="error-password">{errors.password?.message}</span>
        )}
      </div>
      <div className={styles.forget_password}>
        <span>FORGOT PASSWORD?</span>
      </div>
      <div className={styles.form_group}>
        <button
          type="submit"
          className={styles.submit_button}
          data-testid="login_button"
        >
          Login
        </button>
      </div>
    </form>
  );
};
