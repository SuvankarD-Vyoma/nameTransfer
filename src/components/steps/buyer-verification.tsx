import { useState } from "react"
import {
    User,
    Smartphone,
    FileKey,
    CheckCircle2,
    Clock,
    ArrowRight,
    PenTool,
    ShieldAlert
} from "lucide-react"

interface BuyerDetailsType {
    name: string
    aadhaar: string
    address: string
}

interface BuyerVerificationProps {
    buyerDetails: BuyerDetailsType
    onNext: () => void
}

export default function BuyerVerification({ buyerDetails, onNext }: BuyerVerificationProps) {
    const [verified, setVerified] = useState(false)

    return (
        <div className="animate-in slide-in-from-right-8 duration-500">

            {/* Header Section */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[var(--wb-gold)]/10 border border-[var(--wb-gold)]/20 text-[var(--wb-gold)] text-xs font-bold tracking-wider uppercase">
                        Step 05
                    </span>
                    <span className="h-px flex-1 bg-stone-200"></span>
                </div>

                <h2 className="text-3xl font-bold font-heading text-[var(--wb-dark)] mb-2 flex items-center gap-3">
                    <PenTool className="w-8 h-8 text-[var(--wb-primary)]" />
                    Buyer Consent
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">
                    The buyer must review the digital agreement and provide consent via Aadhaar e-Sign to proceed.
                </p>
            </div>

            {/* Notification Card */}
            <div className="mb-8 bg-[var(--wb-primary)]/5 border border-[var(--wb-primary)]/20 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-[var(--wb-primary)]/20 flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5 text-[var(--wb-primary)]" />
                </div>
                <div>
                    <p className="text-xs font-bold text-[var(--wb-primary)] uppercase tracking-wider mb-1">
                        Action Required
                    </p>
                    <p className="text-sm text-[var(--wb-dark)] leading-relaxed">
                        A unique link containing the Multiparty Agreement has been sent to the buyer's registered mobile number via SMS. The buyer must click the link to digitally sign the document.
                    </p>
                </div>
            </div>

            {/* Buyer Details Summary */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4 border-b border-stone-200 pb-2">
                    Buyer Information
                </h3>
                <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-400">
                                <User className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-[10px] text-stone-500 uppercase font-bold">Full Name</p>
                                <p className="font-bold text-[var(--wb-dark)]">{buyerDetails.name || "Pending..."}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] text-stone-500 uppercase font-bold mb-1">Aadhaar Number (Masked)</p>
                            <p className="font-mono text-sm font-bold text-[var(--wb-dark)] bg-stone-50 inline-block px-2 py-1 rounded">
                                {buyerDetails.aadhaar ? `XXXX-XXXX-${buyerDetails.aadhaar.slice(-4)}` : "Pending..."}
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <p className="text-[10px] text-stone-500 uppercase font-bold">Registered Address</p>
                            <p className="font-medium text-[var(--wb-dark)]">{buyerDetails.address || "Pending..."}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Signature Status */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4 border-b border-stone-200 pb-2">
                    Signature Status
                </h3>
                <div className="space-y-3">
                    {/* Seller - Done */}
                    <div className="flex items-center gap-4 p-4 bg-[var(--wb-sage)]/10 border border-[var(--wb-sage)]/20 rounded-lg">
                        <div className="w-8 h-8 bg-[var(--wb-sage)] rounded-full flex items-center justify-center shrink-0">
                            <CheckCircle2 className="text-white w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-[var(--wb-dark)]">Seller Signature</p>
                            <p className="text-xs text-[var(--wb-sage)] font-bold">Successfully e-Signed via Aadhaar</p>
                        </div>
                    </div>

                    {/* Buyer - Pending (Changes when verified) */}
                    <div className={`flex items-center gap-4 p-4 border-2 rounded-lg relative overflow-hidden transition-all duration-500 ${verified
                        ? "bg-[var(--wb-sage)]/10 border-[var(--wb-sage)]/20"
                        : "bg-white border-dashed border-[var(--wb-gold)]"
                        }`}>

                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${verified ? "bg-[var(--wb-sage)]" : "bg-[var(--wb-gold)]/20"
                            }`}>
                            {verified ? (
                                <CheckCircle2 className="text-white w-5 h-5" />
                            ) : (
                                <Clock className="text-[var(--wb-gold)] w-5 h-5 animate-pulse" />
                            )}
                        </div>

                        <div className="flex-1 relative z-10">
                            <p className="font-bold text-[var(--wb-dark)]">Buyer Signature</p>
                            <p className={`text-xs ${verified ? "text-[var(--wb-sage)] font-bold" : "text-stone-500"}`}>
                                {verified
                                    ? "Successfully e-Signed via SMS Link"
                                    : "Waiting for buyer to sign via SMS link..."
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* UDIN Display */}
            <div className="mb-8">
                <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 relative overflow-hidden">
                    <div className="absolute right-4 top-4 opacity-10">
                        <FileKey size={60} />
                    </div>
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Unique Document Identification Number (UDIN)</p>
                    <p className="text-xl md:text-2xl font-bold font-mono text-[var(--wb-primary)] mb-2 tracking-tight">2025-IND-987654-ABCDE</p>
                    <p className="text-[10px] text-stone-400">
                        * This UDIN is generated for document traceability and legal verification purposes.
                    </p>
                </div>
            </div>

            {/* Verification Simulation (Dev Mode UI) */}
            <div className={`mb-8 p-4 rounded-lg border transition-all duration-300 ${verified
                ? "bg-[var(--wb-sage)]/5 border-[var(--wb-sage)]/30"
                : "bg-stone-50 border-stone-200"
                }`}>
                <label className="flex items-center gap-3 cursor-pointer select-none">
                    <div className="relative flex items-center">
                        <input
                            type="checkbox"
                            checked={verified}
                            onChange={(e) => setVerified(e.target.checked)}
                            className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-stone-300 bg-white checked:border-[var(--wb-sage)] checked:bg-[var(--wb-sage)] transition-all"
                        />
                        <CheckCircle2 className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-sm font-bold transition-colors ${verified ? "text-[var(--wb-sage)]" : "text-stone-600"}`}>
                            Simulate Buyer Verification
                        </span>
                        <span className="text-[10px] text-stone-400">(Development Mode: Click to simulate external signing)</span>
                    </div>
                </label>

                {verified && (
                    <div className="mt-3 ml-9 p-2 bg-[var(--wb-sage)]/10 rounded flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
                        <ShieldAlert className="w-4 h-4 text-[var(--wb-sage)]" />
                        <p className="text-xs font-bold text-[var(--wb-sage)]">
                            System verified: Digital signature received.
                        </p>
                    </div>
                )}
            </div>

            <button
                onClick={onNext}
                disabled={!verified}
                className="w-full px-6 py-4 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[var(--wb-dark)]/10 flex items-center justify-center gap-2 group transform active:scale-[0.99]"
            >
                Submit Final Transfer Request
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    )
}