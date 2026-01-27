import type React from "react"
import { useState } from "react"
import {
    CarFront,
    Search,
    ArrowRight,
    AlertCircle,
    ShieldCheck,
    Smartphone,
    Lock,
    RotateCcw,
    CheckCircle2
} from "lucide-react"
import { useAuth } from "../../context/AuthContext"
import { authService } from "../../api/authapi/AuthService"

interface VehicleRegistrationOTPProps {
    onNext: () => void
    vehicleRegNo: string
    setVehicleRegNo: (regNo: string) => void
    ownerEmail: string
    setOwnerEmail: (email: string) => void
}

export default function VehicleRegistrationOTP({
    onNext,
    vehicleRegNo,
    setVehicleRegNo,
    ownerEmail,
    setOwnerEmail
}: VehicleRegistrationOTPProps) {
    const [error, setError] = useState("")
    const { userPhone, userData, token } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [showOTP, setShowOTP] = useState(false)
    const [otp, setOtp] = useState("")

    const handleVehicleFetch = async (e: React.FormEvent) => {
        e.preventDefault()

        if (vehicleRegNo.trim().length <= 5) {
            setError("Please enter a valid format (e.g., WB01AB1234)")
            return
        }

        if (!userData || !token) {
            setError("Authentication required. Please log in again.")
            return
        }

        setError("")
        setIsLoading(true)

        try {
            const response = await authService.fetchVehicleDetails(
                vehicleRegNo,
                userPhone,
                userData.user_id,
                token
            )

            if (response.status === 0) {
                // Success - show OTP section
                setShowOTP(true)
            } else {
                setError(response.message || "Failed to fetch vehicle details")
            }
        } catch (err) {
            setError("Unable to fetch vehicle details. Please try again.")
            console.error("Vehicle fetch error:", err)
        } finally {
            setIsLoading(false)
        }
    }

    const handleOTPSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (otp.length !== 6) {
            setError("Please enter a valid 6-digit OTP")
            return
        }

        if (!userData || !token) {
            setError("Authentication required. Please log in again.")
            return
        }

        setError("")
        setIsLoading(true)

        try {
            const response = await authService.validateVehicleOTP(
                userPhone,
                vehicleRegNo,
                otp,
                token
            )

            if (response.status === 0) {
                // Success - proceed to next step
                onNext()
            } else {
                setError(response.message || "Invalid OTP. Please try again.")
            }
        } catch (err) {
            setError("Unable to verify OTP. Please try again.")
            console.error("OTP validation error:", err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="space-y-8">
            {/* Vehicle Registration Section */}
            <form onSubmit={handleVehicleFetch} className="animate-in slide-in-from-bottom-4 duration-500">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold font-heading text-[var(--wb-dark)] mb-2 flex items-center gap-3">
                        <CarFront className="w-7 h-7 text-[var(--wb-secondary)]" />
                        Vehicle Lookup
                    </h2>
                    <p className="text-stone-500 text-sm leading-relaxed">
                        Enter the registration number to fetch technical data from the National Register (Vahan 4.0).
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider ml-1">
                            Registration Number
                        </label>
                        <div className="relative group">
                            <div className="absolute left-0 top-0 bottom-0 w-12 bg-stone-100 border-r border-stone-200 rounded-l-lg flex flex-col items-center justify-center z-10">
                                <span className="text-[10px] font-bold text-stone-400">IND</span>
                                <div className="w-2 h-2 rounded-full bg-[var(--wb-accent)] mt-1"></div>
                            </div>

                            <input
                                type="text"
                                value={vehicleRegNo}
                                onChange={(e) => {
                                    setVehicleRegNo(e.target.value.toUpperCase().replace(/\s/g, '').slice(0, 10))
                                    setError("")
                                }}
                                placeholder="WB01AB1234"
                                disabled={showOTP}
                                className={`w-full pl-16 pr-12 py-4 bg-white border ${error ? 'border-red-300 ring-1 ring-red-100' : showOTP ? 'border-[var(--wb-sage)] bg-[var(--wb-sage)]/5' : 'border-stone-200'} rounded-lg text-[var(--wb-dark)] placeholder:text-stone-300 focus:outline-none focus:border-[var(--wb-secondary)] focus:ring-4 focus:ring-[var(--wb-secondary)]/10 transition-all font-heading font-bold text-xl tracking-[0.15em] uppercase shadow-sm disabled:cursor-not-allowed`}
                                required
                            />

                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none group-focus-within:text-[var(--wb-primary)] transition-colors">
                                {showOTP ? <CheckCircle2 className="w-5 h-5 text-[var(--wb-sage)]" /> : <Search className="w-5 h-5" />}
                            </div>
                        </div>
                        {error && (
                            <p className="flex items-center gap-2 text-xs font-bold text-red-500 mt-2 animate-in slide-in-from-top-1">
                                <AlertCircle className="w-3 h-3" />
                                {error}
                            </p>
                        )}
                    </div>

                    {!showOTP && (
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full px-6 py-4 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] transition-all shadow-lg shadow-[var(--wb-dark)]/10 flex items-center justify-center gap-2 group transform active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>Processing...</>
                            ) : (
                                <>
                                    Fetch Vehicle Details
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </form>

            {/* OTP Verification Section - Shows after vehicle fetch */}
            {showOTP && (
                <form onSubmit={handleOTPSubmit} className="animate-in slide-in-from-bottom-4 duration-500 border-t border-stone-200 pt-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold font-heading text-[var(--wb-dark)] mb-2 flex items-center gap-3">
                            <ShieldCheck className="w-7 h-7 text-[var(--wb-sage)]" />
                            Identity Verification
                        </h2>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            Authenticate ownership via the One-Time Password (OTP) sent to your registered mobile.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Mobile Info Card */}
                        <div className="bg-[var(--wb-sage)]/5 border border-[var(--wb-sage)]/20 rounded-xl p-5 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white border border-[var(--wb-sage)]/30 flex items-center justify-center shrink-0">
                                <Smartphone className="w-5 h-5 text-[var(--wb-sage)]" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-[var(--wb-sage)] uppercase tracking-wider mb-1">
                                    Registered Mobile
                                </p>
                                <p className="text-lg font-heading font-bold text-[var(--wb-dark)] tracking-wide">
                                    +91-XXXXX-X2345
                                </p>
                                <div className="flex items-center gap-1 mt-1">
                                    <CheckCircle2 className="w-3 h-3 text-[var(--wb-sage)]" />
                                    <p className="text-xs text-stone-500">OTP Sent successfully</p>
                                </div>
                            </div>
                        </div>

                        {/* OTP Input */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-baseline">
                                <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider ml-1">
                                    Enter Secure OTP
                                </label>
                                <button
                                    type="button"
                                    className="text-xs font-bold text-[var(--wb-primary)] hover:text-[var(--wb-gold)] flex items-center gap-1 transition-colors"
                                >
                                    <RotateCcw className="w-3 h-3" />
                                    Resend OTP
                                </button>
                            </div>

                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-[var(--wb-gold)] transition-colors">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                                    placeholder="• • • • • •"
                                    maxLength={6}
                                    className="w-full pl-12 pr-4 py-4 bg-white border border-stone-200 rounded-lg text-center text-2xl tracking-[0.5em] font-heading font-bold text-[var(--wb-dark)] placeholder:text-stone-300 focus:outline-none focus:border-[var(--wb-gold)] focus:ring-4 focus:ring-[var(--wb-gold)]/10 transition-all shadow-sm"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={otp.length !== 6}
                            className="w-full px-6 py-4 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[var(--wb-dark)]/10 flex items-center justify-center gap-2 group transform active:scale-[0.99]"
                        >
                            Verify & Proceed
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}