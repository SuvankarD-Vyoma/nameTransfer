import { Check } from "lucide-react"

interface StepIndicatorProps {
    steps: string[]
    currentStep: number
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
    const adjustedStep = currentStep - 1
    const progressWidth = Math.min((currentStep / (steps.length - 1)) * 100, 100) + "%"

    return (
        <div className="mb-8 w-full px-2">
            {/* Main Container for Track and Steps */}
            <div className="relative flex items-center justify-between min-h-8">

                {/* 1. Background Line (Gray) - The empty track */}
                <div
                    className="absolute left-0 top-1/2 w-full h-1 rounded-full bg-stone-200 -translate-y-1/2 z-0"
                />

                {/* 2. Active Line (Teal) - The filling animation */}
                <div
                    className="absolute left-0 top-1/2 h-1 rounded-full transition-all duration-700 ease-in-out bg-teal-600 -translate-y-1/2 z-10"
                    style={{ width: progressWidth }}
                />

                {/* Steps */}
                {steps.map((step, index) => {
                    const isCompleted = index < currentStep
                    const isCurrent = index === currentStep

                    return (
                        <div key={index} className="flex flex-col items-center relative z-20">
                            {/* Step Circle */}
                            <div
                                className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold border-2 transition-all duration-300 ${isCompleted
                                    ? 'bg-slate-700 border-slate-700 text-white'
                                    : isCurrent
                                        ? 'bg-white border-slate-900 text-slate-900 scale-110'
                                        : 'bg-white border-stone-200 text-stone-400'
                                    }`}
                            >
                                {isCompleted ? (
                                    <Check className="w-4 h-4" />
                                ) : (
                                    <span>{index + 1}</span>
                                )}
                            </div>

                            {/* Step Label */}
                            <span
                                className={`absolute text-[10px] uppercase tracking-wider font-bold w-24 text-center transition-colors duration-300 ${isCurrent || isCompleted
                                    ? 'text-slate-900 opacity-100'
                                    : 'text-stone-400 opacity-60'
                                    }`}
                                style={{ top: '40px' }}
                            >
                                {step}
                            </span>
                        </div>
                    )
                })}
            </div>

            {/* Spacing for labels */}
            <div className="h-6" />
        </div>
    )
}