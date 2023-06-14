"use client";

import { useSession } from "next-auth/react";

const User = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return;
  }

  return (
    <div className="flex h-full justify-center items-center">
      <div className="border p-3">
        <p>ID: {session?.user.id}</p>
        <p>Name: {session?.user.name}</p>
        <p>Mail: {session?.user.email}</p>
      </div>
    </div>
  );
};

export default User;
