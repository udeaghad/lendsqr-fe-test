import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm, { Form } from "../../app/components/LoginForm/LoginForm";

describe("LoginForm", () => {
  it("should render the login form", () => {
    render(<LoginForm />);
    expect(screen.getByTestId("login_form")).toBeInTheDocument();
  });

  it("should render the email input", () => {
    render(<LoginForm />);
    expect(screen.getByTestId("email_input")).toBeInTheDocument();
  });

  it("should render the password input", () => {
    render(<LoginForm />);
    expect(screen.getByTestId("password_input")).toBeInTheDocument();
  });

  it("should render the login button", () => {
    render(<LoginForm />);
    expect(screen.getByTestId("login_button")).toBeInTheDocument();
  });

  it("should render the text 'FORGOT PASSWORD?'", () => {
    render(<LoginForm />);
    expect(screen.getByText("FORGOT PASSWORD?")).toBeInTheDocument();
  });

  it("should render the show button", () => {
    render(<LoginForm />);
    expect(screen.getByTestId("show_button")).toBeInTheDocument();
  });

  it("should render the text 'Welcome!'", () => {
    render(<LoginForm />);
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
  });

  it("should render the text 'Enter details to login.'", () => {
    render(<LoginForm />);
    expect(screen.getByText("Enter details to login.")).toBeInTheDocument();
  });

  describe("Form", () => {
    let isPasswordVisible = false;
    const onSubmit = jest.fn();
    const togglePasswordVisibility = jest.fn();

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

    it("should call togglePasswordVisibility when show button is clicked", () => {
      render(
        <Form
          isPasswordVisible={isPasswordVisible}
          onSubmit={onSubmit}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      );
      const showButton = screen.getByTestId("show_button");
      showButton.click();
      expect(togglePasswordVisibility).toHaveBeenCalled();
    })

    it("should render the text 'Hide' when the the show button is clicked", () => {
      isPasswordVisible = true;
      render(<Form isPasswordVisible={isPasswordVisible} onSubmit={onSubmit} togglePasswordVisibility={togglePasswordVisibility} />)
      const showButton = screen.getByTestId("show_button");
      showButton.click();
      expect(screen.getByText("Hide")).toBeInTheDocument();
    });

    it("should render the text 'Show' when the the show button is clicked", () => {
      isPasswordVisible = false;
      render(<Form isPasswordVisible={isPasswordVisible} onSubmit={onSubmit} togglePasswordVisibility={togglePasswordVisibility} />)
      const showButton = screen.getByTestId("show_button");
      showButton.click();
      expect(screen.getByText("Show")).toBeInTheDocument();
    });
  });
});
