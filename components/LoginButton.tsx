"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

function LoginButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setIsLoading(true);
    await signIn("microsoft-entra-id");
    setIsLoading(false);
  };
  return (
    <button
      onClick={() => handleLogin()}
      className="w-full bg-blue-800 text-white my-5 p-3 rounded-md hover:opacity-80 disabled:opacity-75"
      disabled={isLoading}
    >
      {isLoading ? "Signing in..." : "Login With Microsoft"}
    </button>
  );
}

export default LoginButton;
