import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface LoginPageProps {
    onLogin: (phone: string) => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
    const navigate = useNavigate()
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [step, setStep] = useState<"phone" | "otp">("phone")

    const handleSendOTP = (e: React.FormEvent) => {
        e.preventDefault()
        if (phone.length === 10) {
            // Here you would call your API to send OTP
            setStep("otp")
        }
    }

    const handleVerifyOTP = (e: React.FormEvent) => {
        e.preventDefault()
        if (otp.length === 6) {
            // Here you would verify OTP with your API
            onLogin(phone)
            navigate("/workflow")
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <button
                    onClick={() => navigate("/")}
                    className="mb-6 text-slate-600 hover:text-slate-900 flex items-center gap-2 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </button>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
                        <p className="text-slate-600">Login to continue with vehicle transfer</p>
                    </div>

                    {step === "phone" ? (
                        <form onSubmit={handleSendOTP}>
                            <label className="block mb-2 text-sm font-medium text-slate-700">
                                Mobile Number
                            </label>
                            <div className="flex gap-2 mb-6">
                                <span className="px-4 py-3 bg-slate-100 rounded-lg text-slate-700 font-medium">
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                    placeholder="Enter 10-digit mobile number"
                                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={phone.length !== 10}
                                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg"
                            >
                                Send OTP
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOTP}>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                <p className="text-sm text-blue-800">
                                    OTP sent to <span className="font-semibold">+91 {phone}</span>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setStep("phone")
                                            setOtp("")
                                        }}
                                        className="ml-2 text-blue-600 hover:underline font-medium"
                                    >
                                        Change
                                    </button>
                                </p>
                            </div>

                            <label className="block mb-2 text-sm font-medium text-slate-700">
                                Enter OTP
                            </label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                                placeholder="Enter 6-digit OTP"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 text-center text-2xl font-semibold tracking-widest"
                                required
                                autoFocus
                            />

                            <p className="text-xs text-slate-500 text-center mb-6">
                                Didn't receive OTP?{" "}
                                <button type="button" className="text-blue-600 hover:underline font-medium">
                                    Resend
                                </button>
                            </p>

                            <button
                                type="submit"
                                disabled={otp.length !== 6}
                                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg"
                            >
                                Verify & Login
                            </button>
                        </form>
                    )}
                </div>

                <p className="text-center text-sm text-slate-500 mt-6">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
            </div>
        </div>
    )
}