import { useState } from "react"

interface BuyerDetailsType {
    name: string
    aadhaar: string
    address: string
}

interface BuyerVerificationProps {
    buyerDetails: BuyerDetailsType
    setBuyerDetails: (details: BuyerDetailsType) => void
    onNext: () => void
}

export default function BuyerVerification({ buyerDetails, setBuyerDetails, onNext }: BuyerVerificationProps) {
    const [verified, setVerified] = useState(false)

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Step 5: Buyer Verification & e-Sign</h2>
                <p className="text-slate-600">Buyer reviews and signs the agreement</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-blue-800">
                    <strong>SMS Link Sent to Buyer:</strong> A unique SMS link with the agreement has been sent to the buyer's
                    registered mobile number. Buyer can click the link to review and sign the document.
                </p>
            </div>

            {/* Buyer Details Summary */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Buyer Details</h3>
                <div className="bg-slate-50 p-6 rounded-lg space-y-3">
                    <div>
                        <p className="text-sm text-slate-600">Name</p>
                        <p className="font-semibold text-slate-900">{buyerDetails.name || "Not provided"}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600">Aadhaar (Masked)</p>
                        <p className="font-semibold text-slate-900">
                            {buyerDetails.aadhaar ? `XXXX-XXXX-${buyerDetails.aadhaar.slice(-4)}` : "Not provided"}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600">Address</p>
                        <p className="font-semibold text-slate-900">{buyerDetails.address || "Not provided"}</p>
                    </div>
                </div>
            </div>

            {/* Document Status */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Agreement Status</h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-slate-900">Seller Signature</p>
                            <p className="text-sm text-slate-600">Completed via Aadhaar e-Sign</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 border-2 border-dashed border-slate-300 rounded-lg">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-slate-700 text-sm font-bold">•</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-slate-900">Buyer Signature</p>
                            <p className="text-sm text-slate-600">Pending buyer action via SMS link</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* UDIN Display */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Document Identification</h3>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <p className="text-sm text-slate-600 mb-2">UDIN (Unique Document Identification Number)</p>
                    <p className="text-2xl font-bold font-mono text-blue-600 mb-2">2025-IND-987654-ABCDE</p>
                    <p className="text-sm text-slate-600">This UDIN is used for document traceability and verification</p>
                </div>
            </div>

            {/* Verification Simulation */}
            <div className="mb-8 p-6 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                    <input
                        type="checkbox"
                        id="buyer-verified"
                        checked={verified}
                        onChange={(e) => setVerified(e.target.checked)}
                        className="w-4 h-4 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="buyer-verified" className="text-sm font-medium text-slate-700">
                        Simulate buyer verification (Check this to continue)
                    </label>
                </div>
                {verified && (
                    <p className="text-sm text-green-700 bg-green-50 p-2 rounded">
                        ✓ Buyer has successfully verified and signed the agreement
                    </p>
                )}
            </div>

            <button
                onClick={onNext}
                disabled={!verified}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                Proceed to Transfer Request
            </button>
        </div>
    )
}
