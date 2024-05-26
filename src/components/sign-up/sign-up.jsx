import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign-up.scss";
import { createUserDoc, createUserWithEmail } from "../../utils/firebase";
import FormInput from "../common/form-input/form-input";
import Button from "../common/button/button";

function SignUpForm() {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();
  const navigateToSignInPage = () => {
    navigate("/signin");
  };
  const navigateToShopPage = () => {
    navigate("/shop");
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { displayName, email, password, confirmpassword } = data;
    if (password !== confirmpassword) {
      setPasswordMatch(false);
      return;
    }
    try {
      const { user } = await createUserWithEmail(email, password);
      await createUserDoc(user, { displayName });
      navigateToShopPage();
      reset();
    } catch (error) {
      let errorMessage = "Error in creating user: ";
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage += "Email is already in use.";
          break;
        case "auth/weak-password":
          errorMessage += "Password is too weak.";
          break;
        case "auth/invalid-email":
          errorMessage += "Invalid email address.";
          break;
        default:
          errorMessage += error.message;
      }
      console.log(errorMessage);
    }
  };
  const handlePasswordChange = () => {
    if (!passwordMatch) {
      setPasswordMatch(true);
    }
  };

  return (
    <div className="form-container">
      {!passwordMatch && (
        <div className="alert">Passwords do not match please try again</div>
      )}
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Username"
          type="text"
          id="displayName"
          register={register}
          error={errors.displayName && "Username is required"}
        />

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
          error={
            errors.password &&
            "Password is required and must be at least 8 characters"
          }
          onChange={handlePasswordChange}
        />

        <FormInput
          label="ConfirmPassword"
          type="password"
          id="confirmpassword"
          register={register}
          error={
            errors.confirmpassword &&
            "Password is required and must be at least 8 characters"
          }
        />

        <Button type="submit" buttonType="inverted">
          Sign Up
        </Button>
        <p className="sign-in-link">
          Already have an account?
          <a onClick={navigateToSignInPage}>Sign in</a>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
