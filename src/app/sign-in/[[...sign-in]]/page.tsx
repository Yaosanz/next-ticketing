import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-4xl rounded-3xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Welcome Back 🎟️
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Sign in to manage your tickets
        </p>
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          appearance={{
            elements: {
              formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white",
              card: "shadow-2xl rounded-2xl p-6",
            },
          }}
        />
      </div>
    </div>
  );
}
