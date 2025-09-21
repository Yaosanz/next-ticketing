import type { Metadata } from "next"
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Pemesanan Tiket Event",
  description: "Temukan & pesan tiket event favoritmu",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 h-full flex flex-col`}>
          {/* Navbar */}
          <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
            <h1 className="text-xl font-bold text-indigo-400">Pemesanan Tiket Event</h1>
            <nav className="flex items-center gap-4">
              <SignedOut>
                <SignInButton>
                  <button className="px-4 py-2 text-sm rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-1 min-h-[calc(100vh-256px)]">{children}</main>

          {/* Footer */}
          <footer className="py-1 bg-indigo-600 text-center text-gray-50">
            <p>© 2025 Sandy Budi Wirawan. All rights reserved.</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  )
}