import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    console.log("user =>", user);

    const userDocReference = await createUserDocumentFromAuth(user);
    console.log("userDocReference =>", userDocReference);
  };
  return (
    <div>
      <p>from signin</p>
      <button type="button" onClick={logGoogleUser}>
        Sign in with google
      </button>
    </div>
  );
};

export default SignIn;
