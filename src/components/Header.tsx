"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex w-full justify-center items-center h-20 bg-gray-500">
        <p className="border-2 border-green-400 p-3">Title</p>
      </div>
    );
  }

  const Logined = () => {
    return (
      <button
        className="border-2 border-red-400 p-3"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    );
  };

  const NotLogin = () => {
    return (
      <button
        className="border-2 border-blue-400 p-3"
        onClick={() => {
          signIn();
        }}
      >
        Sign In
      </button>
    );
  };

  return (
    <div className="flex w-full justify-center items-center h-20 bg-gray-500 relative">
      <p className="border-2 border-green-400 p-3">Title</p>
      <div className="absolute right-10">
        {session ? Logined() : NotLogin()}
      </div>
    </div>
  );
};

export default Header;
