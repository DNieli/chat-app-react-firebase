import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const Auth = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  return (
    <div className="auth">
      <p>Sign in with Google to conitnue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};
