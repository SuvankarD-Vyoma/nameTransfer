
import type React from "react"

import { useState } from "react"

interface BuyerDetailsType {
    name: string
    aadhaar: string
    address: string
}

interface TransferRequestProps {
    vehicleRegNo: string
    buyerDetails: BuyerDetailsType
    onNext: (id: string) => void
}

export default function TransferRequest({ vehicleRegNo, buyerDetails, onNext }: TransferRequestProps) {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
            const requestId = `TR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
            setLoading(false)
            onNext(requestId)
        }, 2000)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Step 6: Submit Transfer Request</h2>
                <p className="text-slate-600">Submit the ownership transfer request to Vahan</p>
            </div>

            {/* Request Summary */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Transfer Request Summary</h3>
                <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-sm text-slate-600">Vehicle Registration Number</p>
                        <p className="font-semibold text-slate-900">{vehicleRegNo}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <p className="text-sm text-slate-600">Seller Aadhaar (Masked)</p>
                            <p className="font-semibold text-slate-900">XXXX-XXXX-1234</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <p className="text-sm text-slate-600">Buyer Aadhaar (Masked)</p>
                            <p className="font-semibold text-slate-900">XXXX-XXXX-{buyerDetails.aadhaar.slice(-4)}</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-sm text-slate-600">Buyer Address</p>
                        <p className="font-semibold text-slate-900 text-sm">{buyerDetails.address}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-sm text-slate-600">UDIN</p>
                        <p className="font-semibold text-slate-900">2025-IND-987654-ABCDE</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="text-sm text-slate-600">Agreement Date</p>
                        <p className="font-semibold text-slate-900">{new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>

            {/* API Call Info */}
            <div className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <p className="text-sm text-indigo-800">
                    <strong>API Call:</strong> Submitting ownership transfer request to Vahan with payload including vehicle
                    registration number, seller/buyer Aadhaar (masked), buyer address, agreement details, and UDIN.
                </p>
            </div>
 
            {/* Verification */}
            <div className="flex items-center gap-3 mb-8 p-4 bg-slate-50 rounded-lg">
                <input
                    type="checkbox"
                    id="confirm"
                    required
                    className="w-4 h-4 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="confirm" className="text-sm text-slate-700">
                    I confirm all details are correct and submit this request to Vahan
                </label>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
                {loading ? (
                    <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                    </>
                ) : (
                    "Submit Transfer Request"
                )}
            </button>
        </form>
    )
}
