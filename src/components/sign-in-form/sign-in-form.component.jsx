import { useState } from "react";

import { signInWithGooglePopup, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import { SignInContainer, Title, Formulary, ButtonsContainer } from "./sign-in-form.styles";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { ToastAlertError } from "../toast-alert/toast-alert.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // google login
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  // change input values
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // clean form
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  // sign in
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const response =
      await signInAuthWithEmailAndPassword(email, password);
      // const { user } = response;
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          ToastAlertError("This user is not registered");
          break;

        case "auth/wrong-password":
          ToastAlertError("Email or password invalid");
          break;
          
        default:
          console.log(error.code);
      }
    } finally {
      resetForm();
    }
  };

  return (
    <SignInContainer>
      <Title>
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>
      </Title>

      <Formulary onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          inputOptions={{
            required: true,
            type: "email",
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label={"Password"}
          inputOptions={{
            required: true,
            type: "password",
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <ButtonsContainer>
          <Button type={"submit"}>Sign in</Button>

          <Button type={"button"} buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </Formulary>
    </SignInContainer>
  );
};

export default SignInForm;
