import type React from "react"
import { useState } from "react"
import {
    User,
    CreditCard,
    MapPin,
    FileSignature,
    ScrollText,
    CheckCircle2,
    ArrowRight,
    Lock,
    UsersRound
} from "lucide-react"

interface BuyerDetailsForm {
    name: string
    aadhaar: string
    address: string
}

interface NameTransferProps {
    onNext: (buyer: BuyerDetailsForm) => void
}

export default function NameTransfer({ onNext }: NameTransferProps) {
    const [buyer, setBuyer] = useState<BuyerDetailsForm>({
        name: "",
        aadhaar: "",
        address: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setBuyer((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (buyer.name && buyer.aadhaar && buyer.address) {
            onNext(buyer)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="animate-in slide-in-from-right-8 duration-500">

            {/* Header Section */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[var(--wb-gold)]/10 border border-[var(--wb-gold)]/20 text-[var(--wb-gold)] text-xs font-bold tracking-wider uppercase">
                        Step 04
                    </span>
                    <span className="h-px flex-1 bg-stone-200"></span>
                </div>

                <h2 className="text-3xl font-bold font-heading text-[var(--wb-dark)] mb-2 flex items-center gap-3">
                    <UsersRound className="w-8 h-8 text-[var(--wb-primary)]" />
                    Ownership Transfer
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">
                    Verify seller details, enter buyer information, and execute the digital Multiparty Agreement.
                </p>
            </div>

            {/* Seller Details (Read-only Card) */}
            <div className="mb-8">
                <div className="bg-[var(--wb-sage)]/5 border border-[var(--wb-sage)]/20 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-3 py-1 bg-[var(--wb-sage)] text-white text-[10px] font-bold uppercase rounded-bl-lg flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Identity Verified
                    </div>

                    <h3 className="text-sm font-bold text-[var(--wb-dark)] uppercase tracking-wider mb-4 border-b border-[var(--wb-sage)]/10 pb-2">
                        Current Owner (Seller)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white border border-[var(--wb-sage)]/30 flex items-center justify-center text-[var(--wb-sage)]">
                                <User className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-[10px] text-stone-500 uppercase font-bold">Seller Name</p>
                                <p className="font-bold text-[var(--wb-dark)]">Rajesh Kumar Singh</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white border border-[var(--wb-sage)]/30 flex items-center justify-center text-[var(--wb-sage)]">
                                <CreditCard className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-[10px] text-stone-500 uppercase font-bold">Aadhaar (Masked)</p>
                                <p className="font-mono text-sm font-bold text-[var(--wb-dark)]">XXXX-XXXX-1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buyer Details (Form) */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-[var(--wb-primary)] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--wb-primary)]"></div>
                    New Owner Details
                </h3>

                <div className="space-y-5">
                    {/* Name Input */}
                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider ml-1">
                            Buyer Full Name
                        </label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-[var(--wb-primary)] transition-colors">
                                <User className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={buyer.name}
                                onChange={handleChange}
                                placeholder="As per Aadhaar Card"
                                className="w-full pl-12 pr-4 py-3.5 bg-white border border-stone-200 rounded-lg text-[var(--wb-dark)] placeholder:text-stone-300 focus:outline-none focus:border-[var(--wb-primary)] focus:ring-4 focus:ring-[var(--wb-primary)]/10 transition-all font-medium"
                                required
                            />
                        </div>
                    </div>

                    {/* Aadhaar Input */}
                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider ml-1">
                            Buyer Aadhaar Number
                        </label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-[var(--wb-primary)] transition-colors">
                                <Lock className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                name="aadhaar"
                                value={buyer.aadhaar}
                                onChange={(e) =>
                                    setBuyer((prev) => ({
                                        ...prev,
                                        aadhaar: e.target.value.replace(/\D/g, "").slice(0, 12),
                                    }))
                                }
                                placeholder="12-digit UIDAI Number"
                                maxLength={12}
                                className="w-full pl-12 pr-4 py-3.5 bg-white border border-stone-200 rounded-lg text-[var(--wb-dark)] placeholder:text-stone-300 focus:outline-none focus:border-[var(--wb-primary)] focus:ring-4 focus:ring-[var(--wb-primary)]/10 transition-all font-mono font-bold tracking-wide"
                                required
                            />
                        </div>
                    </div>

                    {/* Address Input */}
                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider ml-1">
                            Permanent Address
                        </label>
                        <div className="relative group">
                            <div className="absolute left-4 top-4 text-stone-300 group-focus-within:text-[var(--wb-primary)] transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <textarea
                                name="address"
                                value={buyer.address}
                                onChange={handleChange}
                                placeholder="Enter complete postal address"
                                rows={3}
                                className="w-full pl-12 pr-4 py-3.5 bg-white border border-stone-200 rounded-lg text-[var(--wb-dark)] placeholder:text-stone-300 focus:outline-none focus:border-[var(--wb-primary)] focus:ring-4 focus:ring-[var(--wb-primary)]/10 transition-all font-medium resize-none"
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Agreement Preview - Legal Paper Style */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-[var(--wb-primary)] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--wb-primary)]"></div>
                    Review Agreement
                </h3>

                <div className="bg-[#fffdf5] border border-stone-200 rounded-lg p-6 relative shadow-sm">
                    {/* Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                        <FileSignature size={150} color="black" />
                    </div>

                    <div className="flex items-center gap-2 mb-4 border-b border-stone-200 pb-2">
                        <ScrollText className="w-5 h-5 text-[var(--wb-dark)]" />
                        <span className="font-heading font-bold text-[var(--wb-dark)]">Digital Multiparty Agreement</span>
                    </div>

                    <div className="max-h-32 overflow-y-auto pr-2 custom-scrollbar text-justify">
                        <p className="text-xs text-stone-600 font-serif leading-relaxed">
                            <strong className="text-black">1. PARTIES:</strong> This Agreement is entered into between <span className="underline decoration-dotted">Rajesh Kumar Singh</span> (Seller) and <span className="underline decoration-dotted">{buyer.name || "__________"}</span> (Buyer).<br /><br />
                            <strong className="text-black">2. SUBJECT:</strong> Transfer of ownership for vehicle bearing Registration Number <strong className="text-black">DL01AB1234</strong>.<br /><br />
                            <strong className="text-black">3. DECLARATION:</strong> The seller hereby transfers all rights, title, and interest in the said vehicle to the buyer free from all encumbrances. The buyer agrees to accept the vehicle in its current condition ("as is where is").<br /><br />
                            <strong className="text-black">4. LIABILITY:</strong> The seller shall be responsible for all challans and legal issues prior to this date. The buyer assumes all responsibilities effective from the date of digital signing.
                        </p>
                    </div>
                </div>
            </div>

            {/* Consent & CTA */}
            <div className="space-y-6">
                <label className="flex items-start gap-3 p-4 rounded-lg bg-[var(--wb-primary)]/5 border border-[var(--wb-primary)]/10 cursor-pointer hover:bg-[var(--wb-primary)]/10 transition-colors">
                    <div className="relative flex items-center">
                        <input
                            type="checkbox"
                            required
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-stone-400 bg-white checked:border-[var(--wb-primary)] checked:bg-[var(--wb-primary)] transition-all"
                        />
                        <CheckCircle2 className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm text-stone-700 select-none">
                        I hereby consent to use my Aadhaar for <strong>e-Sign</strong> and declare that the details furnished above are true to the best of my knowledge.
                    </span>
                </label>

                <button
                    type="submit"
                    className="w-full px-6 py-4 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] transition-all shadow-lg shadow-[var(--wb-dark)]/10 flex items-center justify-center gap-2 group transform active:scale-[0.99]"
                >
                    <FileSignature className="w-5 h-5" />
                    Sign & Submit Transfer
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </form>
    )
}