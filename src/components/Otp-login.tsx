import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Phone, ShieldCheck, ArrowRight, Loader2 } from "lucide-react"
import { useAuth } from "../context/AuthContext" // Import the useAuth hook

export default function OTPLogin() {
    const navigate = useNavigate()
    const { login } = useAuth() // Access the login function from Context
    
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [step, setStep] = useState<"phone" | "otp">("phone")
    const [isLoading, setIsLoading] = useState(false)

    const handleSendOTP = (e: React.FormEvent) => {
        e.preventDefault()
        if (phone.length === 10) {
            setIsLoading(true)
            // Simulate API delay
            setTimeout(() => {
                setIsLoading(false)
                setStep("otp")
            }, 800)
        }
    }

    const handleVerifyOTP = (e: React.FormEvent) => {
        e.preventDefault()
        if (otp.length === 6) {
            setIsLoading(true)
            // Simulate API Verification
            setTimeout(() => {
                setIsLoading(false)
                login(phone) // Update global auth state via Context
                
                // Note: The PublicRoute in App.tsx will automatically 
                // redirect to /workflow because isAuthenticated is now true.
                // But a manual navigate is fine as a fallback.
                navigate("/workflow")
            }, 800)
        }
    }

    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-body selection:bg-[var(--wb-accent)] selection:text-[var(--wb-dark)] flex items-center justify-center p-6 relative overflow-hidden">
            
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[var(--wb-accent)] rounded-full blur-3xl opacity-20 translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[var(--wb-dark)] rounded-full blur-3xl opacity-5 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <div className="max-w-[440px] w-full relative z-10">
                {/* Back Navigation */}
                <button
                    onClick={() => navigate("/")}
                    className="mb-8 text-stone-500 hover:text-[var(--wb-dark)] flex items-center gap-2 transition-colors text-sm font-medium group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Portal
                </button>

                {/* Main Card */}
                <div className="glass-card rounded-2xl p-8 md:p-10 border border-stone-200 shadow-xl shadow-[var(--wb-dark)]/5">
                    <div className="mb-8">
                        <div className="w-12 h-12 bg-[var(--wb-dark)] rounded-xl flex items-center justify-center shadow-lg shadow-[var(--wb-dark)]/20 mb-6">
                            {step === 'phone' ? (
                                <Phone className="w-6 h-6 text-white" />
                            ) : (
                                <ShieldCheck className="w-6 h-6 text-white" />
                            )}
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-[var(--wb-dark)] mb-2">
                            {step === 'phone' ? 'Citizen Login' : 'Verify Identity'}
                        </h2>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            {step === 'phone'
                                ? 'Access vehicle services securely using your mobile number linked with Aadhaar.'
                                : `Enter the 6-digit security code sent to +91 ${phone}`}
                        </p>
                    </div>

                    {step === "phone" ? (
                        <form onSubmit={handleSendOTP} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">
                                    Mobile Number
                                </label>
                                <div className="flex gap-3 group">
                                    <span className="px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-500 font-medium flex items-center select-none">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                        placeholder="Enter 10-digit number"
                                        className="flex-1 px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-[var(--wb-secondary)] focus:ring-1 focus:ring-[var(--wb-secondary)]/30 transition-all font-medium tracking-wide"
                                        required
                                        autoFocus
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={phone.length !== 10 || isLoading}
                                className="w-full px-6 py-3.5 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-[var(--wb-dark)]/10 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        Send Secure OTP
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-stone-400 mt-6">
                                By continuing, you agree to the <a href="#" className="underline hover:text-[var(--wb-dark)]">Terms of Service</a> & <a href="#" className="underline hover:text-[var(--wb-dark)]">Privacy Policy</a>
                            </p>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOTP} className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider">
                                        One Time Password
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setStep("phone")
                                            setOtp("")
                                        }}
                                        className="text-xs text-[var(--wb-primary)] hover:text-[var(--wb-dark)] font-bold hover:underline"
                                    >
                                        Change Number?
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                                    placeholder="• • • • • •"
                                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-center text-2xl tracking-[0.5em] text-[var(--wb-dark)] placeholder:text-stone-200 focus:outline-none focus:border-[var(--wb-secondary)] focus:ring-1 focus:ring-[var(--wb-secondary)]/30 transition-all font-heading font-bold"
                                    required
                                    autoFocus
                                    maxLength={6}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={otp.length !== 6 || isLoading}
                                className="w-full px-6 py-3.5 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-[var(--wb-dark)]/10 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        Verify & Proceed
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            <div className="text-center">
                                <button type="button" className="text-sm text-stone-500 hover:text-[var(--wb-dark)] transition-colors">
                                    Resend OTP in <span className="font-mono font-medium">00:45</span>
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Footer Credential */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-stone-400 font-medium flex items-center justify-center gap-2">
                        <ShieldCheck className="w-3 h-3" />
                        Official Government Portal • Secured by NIC
                    </p>
                </div>
            </div>
        </div>
    )
}