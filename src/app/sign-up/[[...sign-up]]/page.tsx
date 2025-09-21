'use client'

import * as React from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function Page() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [verifying, setVerifying] = React.useState(false)
  const [phone, setPhone] = React.useState('')
  const [code, setCode] = React.useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!isLoaded && !signUp) return null

    try {
      // Start the sign-up process using the phone number method
      await signUp.create({
        phoneNumber: phone,
      })

      // Start the verification - a SMS message will be sent to the
      // number with a one-time code
      await signUp.preparePhoneNumberVerification()

      // Set verifying to true to display second form and capture the OTP code
      setVerifying(true)
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error('Error:', JSON.stringify(err, null, 2))
    }
  }

  async function handleVerification(e: React.FormEvent) {
    e.preventDefault()

    if (!isLoaded && !signUp) return null

    try {
      // Use the code provided by the user and attempt verification
      const signUpAttempt = await signUp.attemptPhoneNumberVerification({
        code,
      })

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === 'complete') {
        await setActive({
          session: signUpAttempt.createdSessionId,
        })

        // After setting the session active, handle navigation
        // If you need to check for session tasks, you may need to fetch the session separately
        await router.push('/')
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(signUpAttempt)
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error('Error:', JSON.stringify(err, null, 2))
    }
  }

  if (verifying) {
    return (
      <>
        <h1>Verify your phone number</h1>
        <form onSubmit={handleVerification}>
          <label htmlFor="code">Enter your verification code</label>
          <input value={code} id="code" name="code" onChange={(e) => setCode(e.target.value)} />
          <button type="submit">Verify</button>
        </form>
      </>
    )
  }

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">Enter phone number</label>
        <input
          value={phone}
          id="phone"
          name="phone"
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Continue</button>
      </form>
    </>
  )
}