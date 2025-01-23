"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const session = useSession();
  return (
    <div>
      <p>dashboard page </p>
      <p>User email: {session.data?.user?.email}</p>
    </div>
  );
}
