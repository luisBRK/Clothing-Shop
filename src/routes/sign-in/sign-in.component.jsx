import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;

    const userDocReference = await createUserDocumentFromAuth(user);
    console.log("userDocReference =>", userDocReference);
  };

  return (
    <div className="sign-in-container">
      <div>
        <p>from signin</p>
        <button onClick={logGoogleUser}>Sign in with google</button>
      </div>

      <div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignIn;
