import React from "react"
import { useNavigate } from "react-router-dom"
import { CarFront, Tag, ArrowRight, ShieldCheck } from "lucide-react"
import Navbar from "../components/Navbar"

export default function Dashboard() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-body selection:bg-[var(--wb-accent)] selection:text-[var(--wb-dark)] relative overflow-hidden flex flex-col">

            {/* Abstract Background Decoration */}
            <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-[var(--wb-secondary)] rounded-full blur-3xl opacity-10 -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[var(--wb-dark)] rounded-full blur-3xl opacity-5 translate-x-1/4 translate-y-1/4 pointer-events-none"></div>


            <Navbar /> 
            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-6 relative z-10">
                <div className="max-w-4xl w-full">

                    <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700">
                        <h1 className="text-3xl md:text-4xl font-heading font-bold text-[var(--wb-dark)] mb-2">
                            Select Your Role
                        </h1>

                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Seller Card (Shows Nothing/No Action) */}
                        <button
                            className="group relative text-left h-full"
                            onClick={() => { /* No action as requested */ }}
                        >
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-stone-200 transition-all duration-300 group-hover:shadow-xl group-hover:border-[var(--wb-secondary)] group-hover:-translate-y-1"></div>
                            <div className="relative p-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-8 group-hover:bg-[var(--wb-accent)]/10 group-hover:border-[var(--wb-accent)]/20 transition-colors">
                                        <Tag className="w-8 h-8 text-stone-400 group-hover:text-[var(--wb-dark)] transition-colors" />
                                    </div>
                                    <h2 className="text-2xl font-bold font-heading text-stone-700 group-hover:text-[var(--wb-dark)] mb-3 transition-colors">
                                        I am a Seller
                                    </h2>
                                    <p className="text-stone-500 leading-relaxed">
                                        I want to transfer ownership of my vehicle to another person.
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center text-sm font-bold text-stone-400 uppercase tracking-wider group-hover:text-[var(--wb-primary)] transition-colors">
                                    <span>Select Role</span>
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </div>
                            </div>
                        </button>

                        {/* Buyer Card (Navigates to Workflow) */}
                        <button
                            className="group relative text-left h-full"
                            onClick={() => navigate("/workflow")}
                        >
                            <div className="absolute inset-0 bg-white rounded-2xl shadow-md border border-stone-200 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[var(--wb-dark)]/10 group-hover:border-[var(--wb-primary)] group-hover:-translate-y-1"></div>
                            <div className="relative p-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-[var(--wb-primary)]/10 border border-[var(--wb-primary)]/20 flex items-center justify-center mb-8 group-hover:bg-[var(--wb-primary)] group-hover:border-[var(--wb-primary)] transition-all duration-300">
                                        <CarFront className="w-8 h-8 text-[var(--wb-primary)] group-hover:text-white transition-colors" />
                                    </div>
                                    <h2 className="text-2xl font-bold font-heading text-[var(--wb-dark)] mb-3">
                                        I am a Buyer
                                    </h2>
                                    <p className="text-stone-600 leading-relaxed">
                                        I am purchasing a vehicle and need to accept the transfer request.
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center text-sm font-bold text-[var(--wb-primary)] uppercase tracking-wider group-hover:text-[var(--wb-dark)] transition-colors">
                                    <span>Proceed to Transfer</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </button>

                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-xs text-stone-400 font-medium">
                            Need help choosing? <a href="#" className="underline hover:text-[var(--wb-dark)]">Read the guidelines</a>
                        </p>
                    </div>

                </div>
            </main>
        </div>
    )
}