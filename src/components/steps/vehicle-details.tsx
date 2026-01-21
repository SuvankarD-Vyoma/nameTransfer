import type React from "react"
import {
    Car,
    User,
    Calendar,
    FileWarning,
    CheckCircle2,
    AlertOctagon,
    Fuel,
    CreditCard,
    ArrowRight,
    FileText
} from "lucide-react"

interface VehicleDetailsProps {
    vehicleRegNo: string
    onNext: () => void
}

export default function VehicleDetails({ vehicleRegNo, onNext }: VehicleDetailsProps) {
    const vehicleData = {
        regNo: vehicleRegNo,
        ownerName: "Rajesh Kumar Singh",
        vehicleModel: "Honda City ZX 2019",
        color: "Silver",
        fuelType: "Petrol",
        registrationDate: "15-Mar-2019",
        chassisNo: "MA3GM2...890", // Masked for UI cleanness
        engineNo: "L15Z1...321",
        insuranceStatus: "Active till 31-Dec-2025",
    }

    return (
        <div className="animate-in slide-in-from-right-8 duration-500">

            {/* Header Section */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[var(--wb-gold)]/10 border border-[var(--wb-gold)]/20 text-[var(--wb-gold)] text-xs font-bold tracking-wider uppercase">
                        Step 03
                    </span>
                    <span className="h-px flex-1 bg-stone-200"></span>
                </div>

                <h2 className="text-3xl font-bold font-heading text-[var(--wb-dark)] mb-2 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-[var(--wb-primary)]" />
                    Vehicle Particulars
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed">
                    Review the technical details fetched from the Vahan database and check for pending liabilities.
                </p>
            </div>

            {/* Vehicle Details Card (RC View) */}
            <div className="mb-8 relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--wb-primary)] to-[var(--wb-sage)] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-200"></div>
                <div className="relative bg-white border border-stone-200 rounded-xl p-6 shadow-sm overflow-hidden">

                    {/* Watermark / Background Deco */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--wb-primary)]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 -z-10"></div>

                    <div className="flex items-center justify-between mb-6 border-b border-stone-100 pb-4">
                        <div>
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Registration Certificate</p>
                            <h3 className="text-2xl font-heading font-bold text-[var(--wb-dark)] tracking-wider mt-1">{vehicleData.regNo}</h3>
                        </div>
                        <div className="w-12 h-12 bg-[var(--wb-primary)]/10 rounded-lg flex items-center justify-center border border-[var(--wb-primary)]/20">
                            <Car className="w-6 h-6 text-[var(--wb-primary)]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                        {/* Owner */}
                        <div className="flex items-start gap-3">
                            <User className="w-4 h-4 text-[var(--wb-gold)] mt-1" />
                            <div>
                                <p className="text-[10px] uppercase font-bold text-stone-400">Owner Name</p>
                                <p className="text-stone-800 font-bold">{vehicleData.ownerName}</p>
                            </div>
                        </div>

                        {/* Model */}
                        <div className="flex items-start gap-3">
                            <Car className="w-4 h-4 text-stone-400 mt-1" />
                            <div>
                                <p className="text-[10px] uppercase font-bold text-stone-400">Model & Color</p>
                                <p className="text-stone-800 font-medium">{vehicleData.vehicleModel} <span className="text-stone-300">|</span> {vehicleData.color}</p>
                            </div>
                        </div>

                        {/* Registration Date */}
                        <div className="flex items-start gap-3">
                            <Calendar className="w-4 h-4 text-stone-400 mt-1" />
                            <div>
                                <p className="text-[10px] uppercase font-bold text-stone-400">Reg. Date</p>
                                <p className="text-stone-800 font-medium">{vehicleData.registrationDate}</p>
                            </div>
                        </div>

                        {/* Fuel */}
                        <div className="flex items-start gap-3">
                            <Fuel className="w-4 h-4 text-stone-400 mt-1" />
                            <div>
                                <p className="text-[10px] uppercase font-bold text-stone-400">Fuel Type</p>
                                <p className="text-stone-800 font-medium">{vehicleData.fuelType}</p>
                            </div>
                        </div>

                        {/* Technical */}
                        <div className="md:col-span-2 grid grid-cols-2 gap-4 bg-stone-50 p-3 rounded-lg border border-stone-100">
                            <div>
                                <p className="text-[10px] uppercase font-bold text-stone-400">Chassis No</p>
                                <p className="font-mono text-xs text-stone-600">{vehicleData.chassisNo}</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-stone-400">Engine No</p>
                                <p className="font-mono text-xs text-stone-600">{vehicleData.engineNo}</p>
                            </div>
                        </div>

                        {/* Insurance - Highlighted */}
                        <div className="md:col-span-2 flex items-center gap-2 bg-[var(--wb-sage)]/10 p-3 rounded-lg border border-[var(--wb-sage)]/20">
                            <CheckCircle2 className="w-5 h-5 text-[var(--wb-sage)]" />
                            <div>
                                <p className="text-[10px] uppercase font-bold text-[var(--wb-sage)]">Insurance Valid</p>
                                <p className="text-sm font-bold text-[var(--wb-dark)]">{vehicleData.insuranceStatus}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Challan Information - Warning Card */}
            <div className="mb-8">
                <div className="bg-red-50 border-l-4 border-[var(--wb-clay)] rounded-r-xl p-6 relative overflow-hidden">
                    {/* Background Pattern for Alert */}
                    <div className="absolute -right-6 -top-6 text-red-100 opacity-50">
                        <FileWarning size={100} />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <AlertOctagon className="w-5 h-5 text-[var(--wb-clay)]" />
                                <h3 className="text-lg font-bold text-[var(--wb-dark)]">Pending Challan</h3>
                            </div>
                            <span className="px-3 py-1 bg-[var(--wb-clay)] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                                Action Required
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <p className="text-xs text-stone-500 uppercase tracking-wide">Challan No.</p>
                                <p className="font-bold font-mono text-stone-800">CH-2024-567890</p>
                            </div>
                            <div>
                                <p className="text-xs text-stone-500 uppercase tracking-wide">Violation</p>
                                <p className="font-bold text-stone-800">Speed Violation</p>
                            </div>
                            <div>
                                <p className="text-xs text-stone-500 uppercase tracking-wide">Amount</p>
                                <p className="font-bold text-[var(--wb-clay)] text-lg">₹1,000</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-red-100 pt-4">
                            <p className="text-xs text-red-600 italic font-medium">
                                * Transfer cannot proceed without clearing dues.
                            </p>
                            <button className="px-4 py-2 bg-white border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wide rounded hover:bg-red-50 transition-colors flex items-center gap-2 shadow-sm">
                                <CreditCard className="w-3 h-3" />
                                Pay Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={onNext}
                className="w-full mt-4 px-6 py-4 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] transition-all shadow-lg shadow-[var(--wb-dark)]/10 flex items-center justify-center gap-2 group transform active:scale-[0.99]"
            >
                Confirm & Continue
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    )
}