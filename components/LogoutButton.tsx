"use client";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="w-full bg-blue-800 text-white p-3 rounded-md hover:opacity-80"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
