"use client";

import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center bg-white shadow">
      <div className="font-bold">Next Ticketing</div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">Sign in</SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}