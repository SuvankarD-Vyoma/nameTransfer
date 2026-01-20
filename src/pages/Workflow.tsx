// pages/Workflow.tsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import StepIndicator from "../components/StepIndicator"

// Step Components
import VehicleRegistration from "../components/steps/vehicle-registration"
import OTPVerification from "../components/steps/otp-verification"
import VehicleDetails from "../components/steps/vehicle-details"
import NameTransfer from "../components/steps/name-transfer"
import BuyerVerification from "../components/steps/buyer-verification"
import TransferRequest from "../components/steps/transfer-request"
import TransferStatus from "../components/steps/transfer-status"
import Navbar from "../components/Navbar"
import { ArrowRight } from "lucide-react"

// Shared Interfaces
export interface BuyerDetails {
    name: string
    aadhaar: string
    address: string
}

const STEPS = [
    "Vehicle Registration",
    "OTP Verification",
    "Vehicle & Challan Details",
    "Name Transfer",
    "Buyer Verification",
    "Transfer Request",
    "Status Tracking",
]

interface WorkflowPageProps {
    userPhone: string
    onLogout: () => void
}

export default function WorkflowPage({ onLogout }: WorkflowPageProps) {
    const navigate = useNavigate()

    // --- WORKFLOW STATE (Formerly in Context) ---
    const [currentStep, setCurrentStep] = useState(0)
    const [vehicleRegNo, setVehicleRegNo] = useState("")
    const [ownerEmail, setOwnerEmail] = useState("")
    const [buyerDetails, setBuyerDetails] = useState<BuyerDetails>({
        name: "",
        aadhaar: "",
        address: "",
    })
    const [transferRequestId, setTransferRequestId] = useState("")

    // Logic Functions
    const handleNext = () => {
        if (currentStep < STEPS.length - 1) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleStartOver = () => {
        setVehicleRegNo("")
        setOwnerEmail("")
        setBuyerDetails({ name: "", aadhaar: "", address: "" })
        setTransferRequestId("")
        setCurrentStep(0)
    }

    const handleLogoutAction = () => {
        handleStartOver() // Reset state
        onLogout()        // Clear auth
        navigate("/")
    }

    // --- RENDER STEPS WITH PROP DRILLING ---
    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <VehicleRegistration
                        onNext={handleNext}
                        vehicleRegNo={vehicleRegNo}
                        setVehicleRegNo={setVehicleRegNo}
                    />
                )
            case 1:
                return (
                    <OTPVerification
                        onNext={handleNext}
                        ownerEmail={ownerEmail}
                        setOwnerEmail={setOwnerEmail}
                    />
                )
            case 2:
                return (
                    <VehicleDetails
                        onNext={handleNext}
                        vehicleRegNo={vehicleRegNo}
                    />
                )
            case 3:
                return (
                    <NameTransfer
                        onNext={(buyer) => {
                            setBuyerDetails(buyer)
                            handleNext()
                        }}
                    />
                )
            case 4:
                return (
                    <BuyerVerification
                        onNext={handleNext}
                        buyerDetails={buyerDetails}
                        setBuyerDetails={setBuyerDetails}
                    />
                )
            case 5:
                return (
                    <TransferRequest
                        onNext={(id) => {
                            setTransferRequestId(id)
                            handleNext()
                        }}
                        vehicleRegNo={vehicleRegNo}
                        buyerDetails={buyerDetails}
                    />
                )
            case 6:
                return (
                    <TransferStatus
                        transferRequestId={transferRequestId}
                    />
                )
            default:
                return null
        }
    }

    const isLastStep = currentStep === STEPS.length - 1

    return (
        <main className="min-h-screen bg-[#fafaf9] text-stone-800 font-body selection:bg-[var(--wb-accent)] selection:text-[var(--wb-dark)] relative overflow-hidden">

            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--wb-accent)] rounded-full blur-3xl opacity-20 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[var(--wb-dark)] rounded-full blur-3xl opacity-5 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <Navbar /> {/* Consistent navigation */}

            <div className="max-w-4xl mx-auto px-6 py-10 relative z-10">

                {/* Step Indicator */}
                <StepIndicator steps={STEPS} currentStep={currentStep} />

                {/* Step Content Card */}
                {/* Updated to match the 'Glass/Paper' aesthetic of previous components */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-[var(--wb-dark)]/5 border border-stone-200 px-8 pt-7 pb-3 mb-5 min-h-[400px] animate-in slide-in-from-bottom-2 duration-500">
                    {renderStep()}
                </div>

                {/* Navigation Buttons */}
                {!isLastStep && (
                    <div className="flex justify-between gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentStep === 0}
                            className="px-8 py-3 border border-stone-300 rounded-lg text-stone-600 font-bold hover:bg-stone-50 hover:text-[var(--wb-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-8 py-3 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] transition-all shadow-lg shadow-[var(--wb-dark)]/10 flex items-center gap-2 group"
                        >
                            Next Step
                            {/* Assuming ArrowRight is imported from lucide-react */}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}

                {isLastStep && (
                    <div className="flex justify-center gap-6">
                        <button
                            onClick={handleStartOver}
                            className="px-8 py-3 bg-[var(--wb-secondary)] text-white rounded-lg font-bold hover:bg-[var(--wb-primary)] transition-colors shadow-md flex items-center gap-2"
                        >
                            Start New Application
                        </button>
                        <button
                            onClick={handleLogoutAction}
                            className="px-8 py-3 border border-stone-300 rounded-lg text-stone-600 font-bold hover:bg-stone-50 hover:border-red-200 hover:text-red-600 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </main>
    )
}