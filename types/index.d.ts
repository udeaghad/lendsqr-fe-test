declare type LoginData = {
  email: string;
  password: string;
};

declare interface LoginFormProps {
  isPasswordVisible: boolean;
  onSubmit: (data: LoginData) => void;
  togglePasswordVisibility: () => void;
}

export type { LoginData, LoginFormProps };