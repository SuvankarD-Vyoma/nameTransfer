import type React from "react"

import { useState } from "react"

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
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Step 4: Vehicle Ownership Transfer</h2>
                <p className="text-slate-600">Enter buyer details and generate multiparty agreement</p>
            </div>

            {/* Seller Details (Read-only) */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Seller Details (Auto-fetched)</h3>
                <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-slate-600">Seller Name</p>
                            <p className="font-semibold text-slate-900">Rajesh Kumar Singh</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-600">Email</p>
                            <p className="font-semibold text-slate-900">rajesh.kumar@email.com</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-600">Aadhaar (Masked)</p>
                            <p className="font-semibold text-slate-900">XXXX-XXXX-1234</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-600">Registration No</p>
                            <p className="font-semibold text-slate-900">DL01AB1234</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buyer Details (Form) */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Buyer Details</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Buyer Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={buyer.name}
                            onChange={handleChange}
                            placeholder="Enter buyer's full name"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Buyer Aadhaar Number</label>
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
                            placeholder="12-digit Aadhaar number"
                            maxLength="12"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Buyer Address</label>
                        <textarea
                            name="address"
                            value={buyer.address}
                            onChange={handleChange}
                            placeholder="Enter complete address"
                            rows={3}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Agreement Preview */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Multiparty Agreement</h3>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 max-h-48 overflow-y-auto">
                    <p className="text-sm text-slate-700 leading-relaxed">
                        This Multiparty Agreement is entered into between the Seller and the Buyer for the transfer of ownership of
                        the vehicle bearing Registration Number. The seller hereby transfers all rights and responsibilities of the
                        vehicle to the buyer. Both parties agree to complete this transfer through the authorized government
                        channels...
                    </p>
                </div>
            </div>

            <div className="flex gap-4 mb-6">
                <input
                    type="checkbox"
                    id="agree"
                    required
                    className="w-4 h-4 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="agree" className="text-sm text-slate-700">
                    I agree to sign the multiparty agreement using Aadhaar e-Sign
                </label>
            </div>

            <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
                Generate Agreement & Sign
            </button>
        </form>
    )
}
