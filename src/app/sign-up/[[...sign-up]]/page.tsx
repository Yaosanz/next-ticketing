"use client"

import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg flex flex-col justify-center
                      max-h-[calc(100vh-4rem)] overflow-y-auto">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">
          🎟️ Create your Ticketing Account
        </h1>
        <p className="mb-4 text-center text-gray-500">
          Join us and start managing your events seamlessly
        </p>

        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-indigo-600 hover:bg-indigo-700 text-white text-sm normal-case px-6 py-2 rounded-lg transition",
            },
          }}
        />
      </div>
    </main>
  )
}
