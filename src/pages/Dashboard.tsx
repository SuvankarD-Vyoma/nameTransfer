import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CarFront, Tag, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"
import Navbar from "../components/Navbar"
import { useAuth } from "../context/AuthContext"

export default function Dashboard() {
    const navigate = useNavigate()
    const { selectedRole: savedRole, setRole } = useAuth()
    const [selectedRole, setSelectedRole] = useState<'seller' | 'buyer' | null>(null)  // CHANGE: Always start with null


    const handleContinue = () => {
        if (selectedRole === 'seller') {
            setRole('seller')  // Save role to context
            navigate("/workflow")
        } else if (selectedRole === 'buyer') {
            setRole('buyer')  // ADD THIS LINE - save buyer role
            alert("Buyer flow is currently under maintenance. Please check back later.")
        }
    }

    console.log("Saved Role from Context:", savedRole)
    console.log("Currently Selected Role:", selectedRole)

    return (
        // CHANGED: replaced 'overflow-hidden' with 'overflow-x-hidden'
        // This ensures the background blobs don't cause a horizontal scrollbar, 
        // but the user can still scroll down if the screen is short.
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-body relative flex flex-col selection:bg-[var(--wb-gold)] selection:text-[var(--wb-dark)]">

            {/* --- Background Elements --- */}
            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-dot-pattern "></div>

            {/* Top Left: Secondary/Blue Shape */}
            <div className="fixed  top-0 left-0 w-[50vw] h-[50vw] bg-[var(--wb-secondary)]/10 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

            {/* Bottom Right: Dark Shape */}
            <div className="fixed bottom-0 right-0 w-[40vw] h-[40vw] bg-[var(--wb-dark)]/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <Navbar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
                <div className="max-w-4xl w-full">

                    <div className="text-center mb-12 animate-in slide-in-from-bottom-4 duration-700 fade-in">
                        <h1 className="text-3xl md:text-5xl font-heading font-bold text-[var(--wb-dark)] mb-4">
                            What is your role?
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">

                        {/* --- Seller Card --- */}
                        <button
                            onClick={() => setSelectedRole('seller')}
                            className={`group relative text-left h-full p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between
                                ${selectedRole === 'seller'
                                    ? 'bg-[var(--wb-primary)]/5 border-[var(--wb-primary)] shadow-[0_8px_30px_rgba(29,84,109,0.15)] transform -translate-y-1'
                                    : 'bg-white border-stone-100 hover:border-stone-300 hover:shadow-lg hover:-translate-y-1'
                                }`}
                        >
                            <div className={`absolute top-6 right-6 transition-all duration-300 ${selectedRole === 'seller' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                <CheckCircle2 className="w-8 h-8 text-[var(--wb-primary)] fill-white" />
                            </div>

                            <div className="mb-6">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                                    ${selectedRole === 'seller' ? 'bg-[var(--wb-primary)] text-white shadow-md' : 'bg-stone-100 text-stone-400 group-hover:bg-stone-200 group-hover:text-stone-600'}`}>
                                    <Tag className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold font-heading text-[var(--wb-dark)] mb-2">
                                    I am a Seller
                                </h2>
                                <p className="text-stone-500 font-medium leading-relaxed">
                                    Initiate a transfer of ownership for your registered vehicle.
                                </p>
                            </div>
                        </button>

                        {/* --- Buyer Card --- */}
                        <button
                            onClick={() => setSelectedRole('buyer')}
                            className={`group relative text-left h-full p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between
                                ${selectedRole === 'buyer'
                                    ? 'bg-[var(--wb-primary)]/5 border-[var(--wb-primary)] shadow-[0_8px_30px_rgba(29,84,109,0.15)] transform -translate-y-1'
                                    : 'bg-white border-stone-100 hover:border-stone-300 hover:shadow-lg hover:-translate-y-1'
                                }`}
                        >
                            <div className={`absolute top-6 right-6 transition-all duration-300 ${selectedRole === 'buyer' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                                <CheckCircle2 className="w-8 h-8 text-[var(--wb-primary)] fill-white" />
                            </div>

                            <div className="mb-6">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                                    ${selectedRole === 'buyer' ? 'bg-[var(--wb-primary)] text-white shadow-md' : 'bg-stone-100 text-stone-400 group-hover:bg-stone-200 group-hover:text-stone-600'}`}>
                                    <CarFront className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl font-bold font-heading text-[var(--wb-dark)] mb-2">
                                    I am a Buyer
                                </h2>
                                <p className="text-stone-500 font-medium leading-relaxed">
                                    Accept a pending transfer request using vehicle details.
                                </p>
                            </div>
                        </button>

                    </div>

                    {/* --- Action Bar --- */}
                    <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100">
                        <button
                            onClick={handleContinue}
                            disabled={!selectedRole}
                            className={`
                                relative overflow-hidden px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-all duration-300
                                ${selectedRole
                                    ? 'bg-[var(--wb-primary)] text-white shadow-[4px_4px_0px_0px_rgba(29,84,109,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none border-2 border-[var(--wb-primary)] cursor-pointer'
                                    : 'bg-stone-200 text-stone-400 border-2 border-stone-200 cursor-not-allowed'
                                }
                            `}
                        >
                            Continue
                            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${selectedRole ? 'group-hover:translate-x-1' : ''}`} />
                        </button>

                        {!selectedRole && (
                            <p className="text-xs text-stone-400 font-medium animate-pulse">
                                Please select an option to proceed
                            </p>
                        )}
                        {selectedRole === 'buyer' && (
                            <p className="text-xs text-[var(--wb-gold)] font-bold flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> Note: Buyer services are currently limited.
                            </p>
                        )}
                    </div>

                </div>
            </main>
        </div>
    )
}