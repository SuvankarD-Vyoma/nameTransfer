
interface VehicleDetailsProps {
    vehicleRegNo: string
    onNext: () => void
}

export default function VehicleDetails({ vehicleRegNo, onNext }: VehicleDetailsProps) {
    const vehicleData = {
        regNo: vehicleRegNo,
        ownerName: "Rajesh Kumar Singh",
        ownerAadhaar: "XXXX-XXXX-1234",
        registeredMobile: "+91-XXXXX-X2345",
        vehicleModel: "Honda City ZX 2019",
        color: "Silver",
        fuelType: "Petrol",
        registrationDate: "15-Mar-2019",
        chassisNo: "XXXXX1234567890",
        engineNo: "XXXXX0987654321",
        insuranceStatus: "Active till 31-Dec-2025",
    }

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Step 3: Vehicle & Challan Details</h2>
                <p className="text-slate-600">Review your vehicle information and pending challan details</p>
            </div>

            {/* Vehicle Details */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Vehicle Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-lg">
                    <div>
                        <p className="text-sm text-slate-600">Registration Number</p>
                        <p className="font-semibold text-slate-900">{vehicleData.regNo}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600">Owner Name</p>
                        <p className="font-semibold text-slate-900">{vehicleData.ownerName}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600">Vehicle Model</p>
                        <p className="font-semibold text-slate-900">{vehicleData.vehicleModel}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600">Color</p>
                        <p className="font-semibold text-slate-900">{vehicleData.color}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600">Fuel Type</p>
                        <p className="font-semibold text-slate-900">{vehicleData.fuelType}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600">Registration Date</p>
                        <p className="font-semibold text-slate-900">{vehicleData.registrationDate}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600">Chassis No</p>
                        <p className="font-semibold text-slate-900 text-xs">{vehicleData.chassisNo}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600">Engine No</p>
                        <p className="font-semibold text-slate-900 text-xs">{vehicleData.engineNo}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600">Insurance Status</p>
                        <p className="font-semibold text-green-600">{vehicleData.insuranceStatus}</p>
                    </div>
                </div>
            </div>

            {/* Challan Information */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Pending Challan</h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <p className="text-sm text-slate-600">Challan Number</p>
                            <p className="font-semibold text-slate-900">CH-2024-567890</p>
                        </div>
                        <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">Pending</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <p className="text-sm text-slate-600">Issue Date</p>
                            <p className="font-semibold text-slate-900">12-Jan-2025</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-600">Reason</p>
                            <p className="font-semibold text-slate-900">Speed Violation</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-600">Amount</p>
                            <p className="font-semibold text-red-600">₹1,000</p>
                        </div>
                    </div>
                    <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors text-sm">
                        Pay Challan on Sanjog Portal
                    </button>
                </div>
            </div>

            <button
                onClick={onNext}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
                Continue to Name Transfer
            </button>
        </div>
    )
}
