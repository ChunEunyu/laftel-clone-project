import { auth } from "../../../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import useAuthStore from "../../../../stores/useAuthStore";

export const GoogleAuth = () => {
  const { userData, setUserData } = useAuthStore();

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider)
        .then((data) => {
            setUserData(data.user);
            console.log('userData', data.user);
        })
        .catch((err) => {
            console.log('google login error', err);
        });
  };
  return { handleGoogleLogin };
};


