import dynamic from "next/dynamic";

const SignInButton = dynamic(() => import("./SignInButton.client"), {
  ssr: false,
});

export default function Navbar() {
  return (
    <nav>
      <h1>Ticketing App</h1>
      <SignInButton />
    </nav>
  );
}
