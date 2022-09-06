import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { ToastAlertError, ToastAlertSuccess } from "../toast-alert/toast-alert.component";

import FormInput from "../form-input/form-input.component";
import Spinner from "../spinner/spinner.component";
import Button from "../button/button.component";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [spinnerSignup, setSpinnerSignup] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // CONTEXT

  // change input values
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // clean form
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  // register a new user
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      ToastAlertError("paswords do not match");
      return;
    }

    try {
      setSpinnerSignup(true);

      // promise
      const response = await createAuthUserWithEmailAndPassword(email, password);
      const { user } = response;

      // document
      const userCreated = await createUserDocumentFromAuth(user, { displayName: displayName });

      if (userCreated) ToastAlertSuccess("Registration completed successfully");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        ToastAlertError("email allready registered");
      } else {
        ToastAlertError("user creation encounted an error");
        console.log(error);
      }
    } finally {
      setSpinnerSignup(false);
      resetForm();
    }
  };

  return (
    <div className="sign-up-container">
      <div className="title">
        <h2>Don't have an account?</h2>
        <span>Signup with your email and password</span>
      </div>

      <form onSubmit={handleSubmit} className="formulary">
        <FormInput
          label="Display name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            required: true,
            type: "email",
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            required: true,
            type: "password",
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <FormInput
          label="Confirm password"
          inputOptions={{
            required: true,
            type: "password",
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        {!spinnerSignup && <Button type={"submit"}>Sign Up</Button>}
      </form>

      {spinnerSignup && <Spinner />}
    </div>
  );
};

export default SignUpForm;
