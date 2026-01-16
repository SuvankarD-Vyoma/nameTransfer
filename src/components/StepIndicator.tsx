interface StepIndicatorProps {
    steps: string[]
    currentStep: number
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
    return (
        <div className="mb-12">
            <div className="flex items-center justify-between gap-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center relative">
                        <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg mb-3 transition-all duration-300 shadow-lg ${index <= currentStep
                                    ? "bg-gradient-to-br from-slate-700 to-slate-800 text-white shadow-slate-700/20"
                                    : "bg-slate-100 text-slate-400 border-2 border-slate-200"
                                }`}
                        >
                            {index + 1}
                        </div>
                        <span
                            className={`text-sm text-center font-semibold leading-tight max-w-24 ${index <= currentStep ? "text-slate-900" : "text-slate-500"
                                }`}
                        >
                            {step}
                        </span>
                        {index < steps.length - 1 && (
                            <div
                                className={`absolute top-7 left-full w-full h-1 transition-all duration-300 ${index < currentStep ? "bg-gradient-to-r from-slate-700 to-slate-400" : "bg-slate-200"
                                    }`}
                                style={{
                                    width: `calc(100% - 2rem)`,
                                    marginLeft: '1rem',
                                    marginRight: '1rem'
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
