export interface SignInFormProps {
  onSubmit: (values: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => void;
  loading: boolean;
}
