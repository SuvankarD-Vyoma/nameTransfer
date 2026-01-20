import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Phone, ShieldCheck, ArrowRight, Loader2, Lock, AlertCircle } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { authService } from "../api/authapi/AuthService"

export default function OTPLogin() {
    const navigate = useNavigate()
    const { login } = useAuth()

    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [step, setStep] = useState("phone") // "phone" | "otp"
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSendOTP = async (e: React.FormEvent) => {
        e.preventDefault()
        if (phone.length === 10) {
            setIsLoading(true)
            setError("")

            try {
                const response = await authService.generateOTP(phone)

                if (response.status === 0) {
                    // OTP generated successfully
                    setStep("otp")
                } else {
                    setError(response.message || "Failed to generate OTP")
                }
            } catch (err) {
                setError("Failed to send OTP. Please try again.")
                console.error("OTP Generation Error:", err)
            } finally {
                setIsLoading(false)
            }
        }
    }

    const handleVerifyOTP = async (e: React.FormEvent) => {
        e.preventDefault()
        if (otp.length === 4) {
            setIsLoading(true)
            setError("")

            try {
                // Step 1: Validate OTP
                const validateResponse = await authService.validateOTP(phone, otp)

                if (validateResponse.status !== 0) {
                    setError(validateResponse.message || "Invalid OTP")
                    setIsLoading(false)
                    return
                }

                // Step 2: Generate Token
                const tokenResponse = await authService.generateToken(phone, otp)

                if (tokenResponse.status === 0) {
                    // Login successful - store user data and token
                    login(
                        phone,
                        validateResponse.data,
                        tokenResponse.data.access_token,
                        tokenResponse.data.expires_at
                    )

                    // Navigate to workflow
                    navigate("/workflow")
                } else {
                    setError(tokenResponse.message || "Failed to generate authentication token")
                }
            } catch (err) {
                setError("Authentication failed. Please try again.")
                console.error("OTP Verification Error:", err)
            } finally {
                setIsLoading(false)
            }
        }
    }

    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-body flex items-center justify-center p-6 relative overflow-hidden selection:bg-[var(--wb-gold)] selection:text-[var(--wb-dark)]">

            {/* --- Background Elements (Matching Landing Page) --- */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-dot-pattern"></div>

            {/* Top Right: Emerald Circle */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[var(--wb-emerald)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

            {/* Bottom Left: Gold Circle */}
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[var(--wb-gold)]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>


            <div className="max-w-[440px] w-full relative z-10">

                {/* Back Navigation */}
                <button
                    onClick={() => navigate("/")}
                    className="mb-6 text-stone-500 hover:text-[var(--wb-dark)] flex items-center gap-2 transition-colors text-sm font-bold group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Portal
                </button>

                {/* Main Card */}
                <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-stone-100 shadow-[0_8px_40px_rgba(0,0,0,0.08)] relative">

                    {/* Official Banner / Logo */}
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <div className="w-12 h-12 bg-[var(--wb-dark)] rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] mb-4">
                                <span className="text-[var(--wb-gold)] font-heading font-bold text-xl">WB</span>
                            </div>
                            <h2 className="text-3xl font-bold font-heading text-[var(--wb-dark)] leading-tight">
                                {step === 'phone' ? 'Citizen Login' : 'Verify Identity'}
                            </h2>
                            <p className="text-stone-500 text-sm mt-2 font-medium">
                                {step === 'phone'
                                    ? 'Enter your Aadhaar-linked mobile number.'
                                    : `Enter the code sent to +91 ${phone}`}
                            </p>
                        </div>
                        {/* Step Indicator */}
                        <div className="text-xs font-bold uppercase tracking-widest text-stone-300 border-2 border-stone-100 px-2 py-1 rounded">
                            Step 0{step === 'phone' ? '1' : '2'}
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-red-700 font-medium">{error}</p>
                        </div>
                    )}

                    {step === "phone" ? (
                        <form onSubmit={handleSendOTP} className="space-y-6">
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider">
                                    <Phone className="w-3 h-3" /> Mobile Number
                                </label>
                                <div className="flex gap-3 group relative">
                                    <div className="px-4 py-3 bg-stone-50 border-2 border-stone-200 rounded-xl text-stone-600 font-bold flex items-center select-none">
                                        +91
                                    </div>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                                            setError("") // Clear error on input
                                        }}
                                        placeholder="98765 43210"
                                        className="w-full px-4 py-3 bg-white border-2 border-stone-200 rounded-xl text-[var(--wb-dark)] text-lg font-bold placeholder:text-stone-300 focus:outline-none focus:border-[var(--wb-primary)] focus:ring-4 focus:ring-[var(--wb-primary)]/10 transition-all"
                                        required
                                        autoFocus
                                    />
                                </div>
                            </div>

                            {/* Tactile Button Style matching Landing Page */}
                            <button
                                type="submit"
                                disabled={phone.length !== 10 || isLoading}
                                className="w-full px-6 py-4 bg-[var(--wb-primary)] text-white rounded-xl font-bold 
                                           border-2 border-[var(--wb-primary)]
                                           shadow-[4px_4px_0px_0px_rgba(29,84,109,0.2)] 
                                           hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] 
                                           hover:bg-[var(--wb-dark)] hover:border-[var(--wb-dark)]
                                           disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none
                                           transition-all flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        Get OTP
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            <div className="pt-2 text-center">
                                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">
                                    Official Transport Department Portal
                                </p>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOTP} className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center mb-1">
                                    <label className="flex items-center gap-2 text-xs font-bold text-stone-500 uppercase tracking-wider">
                                        <Lock className="w-3 h-3" /> Secure OTP
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setStep("phone")
                                            setOtp("")
                                            setError("")
                                        }}
                                        className="text-xs text-[var(--wb-primary)] font-bold hover:underline"
                                    >
                                        Edit Number
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => {
                                        setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))
                                        setError("") // Clear error on input
                                    }}
                                    placeholder="• • • • "
                                    className="w-full px-4 py-3 bg-white border-2 border-stone-200 rounded-xl text-center text-3xl tracking-[0.5em] text-[var(--wb-dark)] placeholder:text-stone-200 focus:outline-none focus:border-[var(--wb-primary)] focus:ring-4 focus:ring-[var(--wb-primary)]/10 transition-all font-heading font-bold"
                                    required
                                    autoFocus
                                    maxLength={4}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={otp.length !== 4 || isLoading}
                                className="w-full px-6 py-4 bg-[var(--wb-primary)] text-white rounded-xl font-bold 
                                           border-2 border-[var(--wb-primary)]
                                           shadow-[4px_4px_0px_0px_rgba(29,84,109,0.2)] 
                                           hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] 
                                           hover:bg-[var(--wb-dark)] hover:border-[var(--wb-dark)]
                                           disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none
                                           transition-all flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        Verify & Login
                                        <ShieldCheck className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            <div className="text-center">
                                <button
                                    type="button"
                                    onClick={handleSendOTP}
                                    disabled={isLoading}
                                    className="text-xs font-bold text-stone-400 hover:text-[var(--wb-dark)] transition-colors disabled:opacity-50"
                                >
                                    Resend OTP
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Footer Credential */}
                <div className="mt-8 text-center animate-fade-in">
                    <p className="text-xs text-stone-400 font-semibold flex items-center justify-center gap-2 opacity-80">
                        <span className="w-2 h-2 rounded-full bg-[var(--wb-green)]"></span>
                        Secured by National Informatics Centre (NIC)
                    </p>
                </div>
            </div>
        </div>
    )
}