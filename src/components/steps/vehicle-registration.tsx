import type React from "react"
import { useState } from "react"
import { CarFront, Search, ArrowRight, Info, AlertCircle } from "lucide-react"

interface VehicleRegistrationProps {
    onNext: () => void
    vehicleRegNo: string
    setVehicleRegNo: (regNo: string) => void
}

export default function VehicleRegistration({ onNext, vehicleRegNo, setVehicleRegNo }: VehicleRegistrationProps) {
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Basic regex for Indian Vehicle Numbers (flexible)
        const regex = /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$/

        // Allow user to proceed if it looks roughly correct, but you can enforce regex if needed
        if (vehicleRegNo.trim().length > 5) {
            setError("")
            onNext()
        } else {
            setError("Please enter a valid format (e.g., WB01AB1234)")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="animate-in slide-in-from-bottom-4 duration-500">
            {/* Header Section */}
            <div className="mb-8">
                {/* <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[var(--wb-secondary)]/10 border border-[var(--wb-secondary)]/20 text-[var(--wb-primary)] text-xs font-bold tracking-wider uppercase">
                        Step 01
                    </span>
                    <span className="h-px flex-1 bg-stone-200"></span>
                </div> */}

                <h2 className="text-3xl font-bold font-heading text-[var(--wb-dark)] mb-2 flex items-center gap-3">
                    <CarFront className="w-8 h-8 text-[var(--wb-secondary)]" />
                    Vehicle Lookup
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">
                    Enter the registration number to fetch technical data from the National Register (Vahan 4.0).
                </p>
            </div>

            <div className="space-y-6">
                {/* Input Field Group */}
                <div className="space-y-2">
                    <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider ml-1">
                        Registration Number
                    </label>
                    <div className="relative group">
                        {/* IND Badge visual */}
                        <div className="absolute left-0 top-0 bottom-0 w-12 bg-stone-100 border-r border-stone-200 rounded-l-lg flex flex-col items-center justify-center z-10">
                            <span className="text-[10px] font-bold text-stone-400">IND</span>
                            <div className="w-2 h-2 rounded-full bg-[var(--wb-accent)] mt-1"></div>
                        </div>

                        <input
                            type="text"
                            value={vehicleRegNo}
                            onChange={(e) => {
                                // Enforce Uppercase and No Spaces
                                setVehicleRegNo(e.target.value.toUpperCase().replace(/\s/g, '').slice(0, 10))
                                setError("")
                            }}
                            placeholder="WB01AB1234"
                            className={`w-full pl-16 pr-12 py-4 bg-white border ${error ? 'border-red-300 ring-1 ring-red-100' : 'border-stone-200'} rounded-lg text-[var(--wb-dark)] placeholder:text-stone-300 focus:outline-none focus:border-[var(--wb-secondary)] focus:ring-4 focus:ring-[var(--wb-secondary)]/10 transition-all font-heading font-bold text-xl tracking-[0.15em] uppercase shadow-sm`}
                            required
                        />

                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none group-focus-within:text-[var(--wb-primary)] transition-colors">
                            <Search className="w-5 h-5" />
                        </div>
                    </div>
                    {error && (
                        <p className="flex items-center gap-2 text-xs font-bold text-red-500 mt-2 animate-in slide-in-from-top-1">
                            <AlertCircle className="w-3 h-3" />
                            {error}
                        </p>
                    )}
                </div>

                {/* Info Note */}
                {/* <div className="bg-[var(--wb-accent)]/10 border border-[var(--wb-accent)]/20 rounded-lg p-4 flex gap-3 items-start">
                    <Info className="w-5 h-5 text-[var(--wb-primary)] shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--wb-dark)]/80 leading-relaxed">
                        <strong className="font-bold text-[var(--wb-dark)]">Privacy Note:</strong> System will strictly fetch non-sensitive vehicle details. Owner name will be partially masked for privacy.
                    </p>
                </div> */}
            </div>

            {/* Action Button */}
            <button
                type="submit"
                className="w-full mt-8 px-6 py-4 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] transition-all shadow-lg shadow-[var(--wb-dark)]/10 flex items-center justify-center gap-2 group transform active:scale-[0.99]"
            >
                Fetch Vehicle Details
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    )
}