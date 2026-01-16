
import type React from "react"

import { useState } from "react"

interface OTPVerificationProps {
  onNext: (email: string) => void
}

export default function OTPVerification({ onNext }: OTPVerificationProps) {
  const [otp, setOtp] = useState("")
  const [email, setEmail] = useState("rajesh.kumar@email.com")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length === 6) {
      onNext(email)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Step 2: OTP Verification</h2>
        <p className="text-slate-600">Verify your identity with OTP sent to your registered mobile number</p>
      </div>

      <div className="space-y-4">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <p className="text-sm text-slate-700">
            <strong>Registered Mobile:</strong> +91-XXXXX-X2345
          </p>
          <p className="text-sm text-slate-600 mt-1">OTP sent to your registered mobile number</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Enter OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
            placeholder="000000"
            maxLength="6"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-center text-2xl tracking-widest focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <p className="text-xs text-slate-500 mt-2">Enter 6-digit OTP</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Owner Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Resend OTP
        </button>
      </div>

      <button
        type="submit"
        disabled={otp.length !== 6}
        className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Verify OTP
      </button>
    </form>
  )
}
