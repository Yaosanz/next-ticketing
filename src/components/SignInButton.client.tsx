"use client";

import { useSignIn } from "@clerk/clerk-react";

export default function SignInButton() {
  const { isLoaded } = useSignIn();

  const handleClick = () => {
    if (!isLoaded) return;
    window.location.href = "/sign-in"; 
  };

  return <button onClick={handleClick}>Sign in</button>;
}
