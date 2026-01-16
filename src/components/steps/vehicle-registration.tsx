import type React from "react"

import { useState } from "react"

interface VehicleRegistrationProps {
    onNext: (regNo: string) => void
}

export default function VehicleRegistration({ onNext }: VehicleRegistrationProps) {
    const [regNo, setRegNo] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (regNo.trim()) {
            onNext(regNo)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Step 1: Vehicle Registration</h2>
                <p className="text-slate-600">Enter your vehicle registration number to get started</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Vehicle Registration Number</label>
                    <input
                        type="text"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value.toUpperCase())}
                        placeholder="e.g., DL01AB1234"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        required
                    />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                        <strong>Note:</strong> System will fetch your vehicle and owner details from Vahan database
                    </p>
                </div>
            </div>

            <button
                type="submit"
                className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
                Fetch Vehicle Details
            </button>
        </form>
    )
}
