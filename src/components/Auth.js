import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css"

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = (props) => {
  const { setIsAuth } = props;
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <h2>Chat App</h2>
      <p> Sign in with Google to continue </p>
      <button onClick={signInWithGoogle}> Sign in with Google </button>
    </div>
  );
};
