import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  signInWithGooglePopUp,
  signInUserWithEmail,
} from "../../utils/firebase";
import FormInput from "../common/form-input/form-input";
import Button from "../common/button/button";
import { Line, OrDivider, OrText } from "./sign-in.styles";
import { SignInLink, SignUpFormContainer } from "../sign-up/sign-up.styles";
function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGooglePopUp();
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const response = await signInUserWithEmail(email, password);
      console.log(response);
    } catch (error) {
      let errorMessage = "Error signing in: ";
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage += "User not found.";
          break;
        case "auth/invalid-credential":
          errorMessage += "Invalid email address or password.";
          break;
        default:
          errorMessage += error.message;
      }
      {
        console.log(errorMessage);
      }
    }
  };

  return (
    <SignUpFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Email"
          type="email"
          id="email"
          register={register}
          error={errors.email && "Email is required"}
        />

        <FormInput
          label="Password"
          type="password"
          id="password"
          register={register}
          error={errors.password && "Password is required "}
        />

        <Button type="submit" buttonType="normal">
          SIGN IN
        </Button>

        <OrDivider>
          <Line></Line>
          <OrText>or</OrText>
          <Line></Line>
        </OrDivider>

        <Button
          type="button"
          buttonType="google"
          onClick={handleSignInWithGoogle}
        >
          GOOGLESIGNIN
        </Button>

        <SignInLink>
          Dont have an account? <Link to="/auth">Sign Up</Link>
        </SignInLink>
      </form>
    </SignUpFormContainer>
  );
}

export default SignInForm;
