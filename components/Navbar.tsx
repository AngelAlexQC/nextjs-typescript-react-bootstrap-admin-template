import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      |{" "}
      <Link href="/about">
        <a>About</a>
      </Link>{" "}
      |{" "}
      <Link href="/users">
        <a>Users List</a>
      </Link>{" "}
      | <a href="/api/users">Users API</a>
    </nav>
  );
};
