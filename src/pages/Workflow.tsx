import { useState } from "react"
import { useNavigate } from "react-router-dom"
import StepIndicator from "../components/StepIndicator"
import VehicleRegistration from "../components/steps/vehicle-registration"
import OTPVerification from "../components/steps/otp-verification"
import VehicleDetails from "../components/steps/vehicle-details"
import NameTransfer from "../components/steps/name-transfer"
import BuyerVerification from "../components/steps/buyer-verification"
import TransferRequest from "../components/steps/transfer-request"
import TransferStatus from "../components/steps/transfer-status"
import { useWorkflow } from "../context/WorkflowContext"

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

export default function WorkflowPage({ userPhone, onLogout }: WorkflowPageProps) {
    const navigate = useNavigate()
    const { resetWorkflow } = useWorkflow()
    const [currentStep, setCurrentStep] = useState(0)

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

    const handleLogout = () => {
        resetWorkflow()
        setCurrentStep(0)
        onLogout()
        navigate("/")
    }

    const handleStartOver = () => {
        resetWorkflow()
        setCurrentStep(0)
    }

    // Render the current step component
    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <VehicleRegistration onNext={handleNext} />
            case 1:
                return <OTPVerification onNext={handleNext} />
            case 2:
                return <VehicleDetails onNext={handleNext} />
            case 3:
                return <NameTransfer onNext={handleNext} />
            case 4:
                return <BuyerVerification onNext={handleNext} />
            case 5:
                return <TransferRequest onNext={handleNext} />
            case 6:
                return <TransferStatus />
            default:
                return null
        }
    }

    const isLastStep = currentStep === STEPS.length - 1

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">
                            Vehicle Ownership Transfer
                        </h1>
                        <p className="text-slate-600">
                            Complete the ownership transfer process for your vehicle
                        </p>
                        <p className="text-sm text-slate-500 mt-2">
                            Logged in as: <span className="font-medium text-slate-700">+91 {userPhone}</span>
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-sm border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                    >
                        Logout
                    </button>
                </div>

                {/* Step Indicator */}
                <StepIndicator steps={STEPS} currentStep={currentStep} />

                {/* Step Content */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    {renderStep()}
                </div>

                {/* Navigation Buttons */}
                {!isLastStep && (
                    <div className="flex justify-between gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentStep === 0}
                            className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                            Next
                        </button>
                    </div>
                )}

                {isLastStep && (
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={handleStartOver}
                            className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                            Start Over
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-8 py-3 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </main>
    )
}