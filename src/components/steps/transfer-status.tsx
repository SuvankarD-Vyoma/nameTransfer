interface TransferStatusProps {
    transferRequestId: string
}

export default function TransferStatus({ transferRequestId }: TransferStatusProps) {
    const status = "Under Process"
    const statusColor = "bg-yellow-600"

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Step 7: Track Ownership Transfer Status</h2>
                <p className="text-slate-600">Monitor the progress of your ownership transfer request</p>
            </div>

            {/* Request ID */}
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-sm text-blue-700 mb-2">Transfer Request ID</p>
                <p className="text-2xl font-bold font-mono text-blue-600 break-all">{transferRequestId}</p>
                <p className="text-sm text-blue-700 mt-2">Save this ID for future reference and tracking</p>
            </div>

            {/* Current Status */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Current Status</h3>
                <div className="flex items-center gap-4 p-6 bg-yellow-50 border-l-4 border-yellow-600 rounded">
                    <span className={`w-8 h-8 ${statusColor} rounded-full flex items-center justify-center text-white font-bold`}>
                        •
                    </span>
                    <div>
                        <p className="text-lg font-bold text-slate-900">{status}</p>
                        <p className="text-sm text-slate-600">Request received and being processed by Vahan</p>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Processing Timeline</h3>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                ✓
                            </div>
                            <div className="w-1 h-12 bg-green-600" />
                        </div>
                        <div className="pb-8">
                            <p className="font-semibold text-slate-900">Request Submitted</p>
                            <p className="text-sm text-slate-600">{new Date().toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                •
                            </div>
                            <div className="w-1 h-12 bg-gray-300" />
                        </div>
                        <div className="pb-8">
                            <p className="font-semibold text-slate-900">Under Review</p>
                            <p className="text-sm text-slate-600">Vahan team verifying documents and details</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-slate-600 font-bold text-sm">
                                3
                            </div>
                            <div className="w-1 h-12 bg-gray-300" />
                        </div>
                        <div className="pb-8">
                            <p className="font-semibold text-slate-900">Approved</p>
                            <p className="text-sm text-slate-600">Ownership transfer will be completed</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-slate-600 font-bold text-sm">
                            4
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">Transfer Complete</p>
                            <p className="text-sm text-slate-600">Certificate issued to buyer</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Estimated Timeline */}
            <div className="mb-8 bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">Estimated Processing Time</h4>
                <div className="space-y-2 text-sm text-slate-700">
                    <p>• Initial verification: 2-3 business days</p>
                    <p>• Document review: 2-3 business days</p>
                    <p>• Final approval: 1-2 business days</p>
                    <p className="font-semibold text-slate-900 mt-3">Total estimated time: 7-10 business days</p>
                </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-3">Need Help?</h4>
                <p className="text-sm text-blue-800 mb-3">
                    Contact the Vahan support team for any queries about your transfer request.
                </p>
                <div className="space-y-2 text-sm text-blue-800">
                    <p>
                        <strong>Email:</strong> support@vahan.gov.in
                    </p>
                    <p>
                        <strong>Phone:</strong> 1800-VAHAN-1 (1800-824-2461)
                    </p>
                    <p>
                        <strong>Reference ID:</strong> {transferRequestId}
                    </p>
                </div>
            </div>
        </div>
    )
}
