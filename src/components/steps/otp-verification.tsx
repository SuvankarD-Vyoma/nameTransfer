import type React from "react"
import { useState } from "react"
import { 
    ShieldCheck, 
    Smartphone, 
    Mail, 
    Lock, 
    ArrowRight, 
    RotateCcw,
    CheckCircle2
} from "lucide-react"

interface OTPVerificationProps {
  onNext: () => void
  ownerEmail: string
  setOwnerEmail: (email: string) => void
}

export default function OTPVerification({ onNext, ownerEmail, setOwnerEmail }: OTPVerificationProps) {
  const [otp, setOtp] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length === 6) {
      onNext()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="animate-in slide-in-from-right-8 duration-500">
      
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[var(--wb-gold)]/10 border border-[var(--wb-gold)]/20 text-[var(--wb-gold)] text-xs font-bold tracking-wider uppercase">
                Step 02
            </span>
            <span className="h-px flex-1 bg-stone-200"></span>
        </div>
        
        <h2 className="text-3xl font-bold font-heading text-[var(--wb-dark)] mb-2 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-[var(--wb-sage)]" />
            Identity Verification
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed">
            Authenticate ownership via the One-Time Password (OTP) sent to your registered mobile.
        </p>
      </div>

      <div className="space-y-6">
        
        {/* Mobile Info Card - using Sage Green for "Verified/Trust" feel */}
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

        {/* OTP Input Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider ml-1">
                Enter Secure OTP
            </label>
            <button type="button" className="text-xs font-bold text-[var(--wb-primary)] hover:text-[var(--wb-gold)] flex items-center gap-1 transition-colors">
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
            />
          </div>
        </div>

        {/* Email Input Section */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider ml-1">
            Owner Email Address
          </label>
          <div className="relative group">
             <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-[var(--wb-primary)] transition-colors">
                <Mail className="w-5 h-5" />
            </div>
            <input
                type="email"
                value={ownerEmail}
                onChange={(e) => setOwnerEmail(e.target.value)}
                placeholder="registered.email@example.com"
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-stone-200 rounded-lg text-[var(--wb-dark)] placeholder:text-stone-300 focus:outline-none focus:border-[var(--wb-primary)] focus:ring-4 focus:ring-[var(--wb-primary)]/10 transition-all font-medium"
            />
          </div>
          <p className="text-[10px] text-stone-400 ml-1">
            * We will send the digital receipt to this email address.
          </p>
        </div>

      </div>

      {/* Action Button */}
      <button
        type="submit"
        disabled={otp.length !== 6}
        className="w-full mt-8 px-6 py-4 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[var(--wb-dark)]/10 flex items-center justify-center gap-2 group transform active:scale-[0.99]"
      >
        Verify & Proceed
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  )
}