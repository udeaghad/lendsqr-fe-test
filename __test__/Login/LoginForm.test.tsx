import "@testing-library/jest-dom";
import {
  act,
  fireEvent,
  queryByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Form } from "../../app/components/LoginForm/LoginForm";
// import { FieldError, useForm } from 'react-hook-form';
// import { LoginFormProps } from "../../types";

describe("LoginForm", () => {

    let isPasswordVisible = false;
    const onSubmit = jest.fn();
    const togglePasswordVisibility = jest.fn();

    it("should render the login form", () => {
      render(<Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />);
      expect(screen.getByTestId("login_form")).toBeInTheDocument();
    });
  
    it("should render the email input", () => {
      render(<Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />);
      expect(screen.getByTestId("email_input")).toBeInTheDocument();
    });
  
    it("should render the password input", () => {
      render(<Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />);
      expect(screen.getByTestId("password_input")).toBeInTheDocument();
    });
  
    it("should render the login button", () => {
      render(<Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />);
      expect(screen.getByTestId("login_button")).toBeInTheDocument();
    });
  
    it("should render the text 'FORGOT PASSWORD?'", () => {
      render(<Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />);
      expect(screen.getByText("FORGOT PASSWORD?")).toBeInTheDocument();
    });
  
    it("should render the show button", () => {
      render(<Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />);
      expect(screen.getByTestId("show_button")).toBeInTheDocument();
    });
  
    it("should render the text 'Welcome!'", () => {
      render(<Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />);
      const welcomeText = screen.getByText("Welcome!");
      expect(welcomeText).toBeInTheDocument();
      expect(welcomeText.innerHTML).toContain("!");
    });
  
    it("should render the text 'Enter details to login.'", () => {
      render(<Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />);
      expect(screen.getByText("Enter details to login.")).toBeInTheDocument();
    });

    it("should not submit form if email is invalid", () => {
      render(
        <Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      );
      const emailInput = screen.getByTestId("email_input");
      const passwordInput = screen.getByTestId("password_input");
      const submitButton = screen.getByTestId("login_button");
      fireEvent.change(emailInput, { target: { value: "myemail" } });
      fireEvent.change(passwordInput, { target: { value: "Mypassword@123" } });
      submitButton.click();
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it("should not be called if password is less than 8 length", () => {
      render(
        <Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      );
      const emailInput = screen.getByTestId("email_input");
      const passwordInput = screen.getByTestId("password_input");
      const submitButton = screen.getByTestId("login_button");
      fireEvent.change(emailInput, { target: { value: "myemail@mail.com" } });
      fireEvent.change(passwordInput, { target: { value: "Mypass" } });
      submitButton.click();
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it("toggles password visibility", () => {
      render(
        <Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      );
      const passwordInput = screen.getByTestId("password_input");
      expect(passwordInput).toHaveAttribute("type", "password");
      expect(passwordInput).not.toHaveAttribute("type", "text");
      const showButton = screen.getByTestId("show_button");
      fireEvent.click(showButton);
      expect(togglePasswordVisibility).toHaveBeenCalled();
    });

    it("handles email input correctly", () => {
      render(
        <Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      );
      const emailInput = screen.getByTestId("email_input");
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      expect(emailInput).toHaveValue("test@example.com");
    });

    it("should render the text 'Hide' when the the show button is clicked", () => {
      isPasswordVisible = true;
      render(
        <Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      );
      const showButton = screen.getByTestId("show_button");
      showButton.click();
      expect(screen.getByText("Hide")).toBeInTheDocument();
    });

    it("should render the text 'Show' when the the show button is clicked", () => {
      isPasswordVisible = false;
      render(
        <Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      );
      const showButton = screen.getByTestId("show_button");
      showButton.click();
      expect(screen.getByText("Show")).toBeInTheDocument();
      expect(showButton.innerHTML).not.toContain("Hide");
    });

    it("should not displays validation error for valid email", async () => {
      render(
        <Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      );
      const emailInput = screen.getByTestId("email_input");
      const passwordInput = screen.getByTestId("password_input");
      const submitButton = screen.getByTestId("login_button");

      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "Password@123!" } });

      await act(async () => {
        fireEvent.click(submitButton);
      });

      expect(screen.queryByTestId("error-email")).not.toBeTruthy();
    });
  });

