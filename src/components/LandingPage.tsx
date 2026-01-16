import React from "react"
import { useNavigate } from "react-router-dom"
import heroImg from "../assets/vehicleownerlandingpage.jpg"
import {
    ArrowRight,
    Check,
    Shield,
    User,
    Search,
    Menu,
    Activity
} from "lucide-react"

export default function LandingPage() {
    const navigate = useNavigate()

    const handleGetStarted = () => {
        navigate("/login")
    }

    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-body">

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-[#fafaf9]/80 backdrop-blur-md border-b border-stone-200/60">
                <div className="max-w-7xl mx-auto px-10 h-20 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[var(--wb-dark)] rounded-lg flex items-center justify-center shadow-sm">
                            <span className="text-white font-heading font-bold text-xl">WB</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="font-bold text-lg text-[var(--wb-dark)] leading-none">Vahan Transfer</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-1 font-semibold">e-Services Portal</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={handleGetStarted}
                            className="px-5 py-2.5 bg-[var(--wb-primary)] hover:bg-[var(--wb-dark)] text-white rounded-lg font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                        >
                            <User className="w-4 h-4" />
                            Login
                        </button>
                    </div>
                    <button className="md:hidden text-stone-600"><Menu className="w-6 h-6" /></button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative px-10 pt-5 pb-32 overflow-hidden">
                {/* Abstract Background Decoration */}
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--wb-accent)] rounded-full blur-3xl opacity-20 translate-x-1/3 -translate-y-1/4 -z-10"></div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-200/50 border border-stone-300/50 text-stone-600 text-xs font-bold tracking-wider uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--wb-secondary)] animate-pulse"></span>
                            Official Portal
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold font-heading text-[var(--wb-dark)] leading-[1.2] tracking-tight">
                            Vehicle transfer, <br />
                            <span className="text-[var(--wb-secondary)]">simplified.</span>
                        </h1>

                        <p className="text-lg text-stone-600 font-normal leading-relaxed max-w-lg">
                            Transfer ownership, update address, or manage vehicle permits. A faceless, paperless initiative for the people.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--wb-primary)] to-[var(--wb-dark)] rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                                <button
                                    onClick={handleGetStarted}
                                    className="relative px-8 py-4 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] transition-all flex items-center gap-3"
                                >
                                    Start Application
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex items-center bg-white border border-stone-200 rounded-lg pl-4 pr-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[var(--wb-accent)]/50 w-full max-w-xs transition-all">
                                <Search className="w-5 h-5 text-stone-400 mr-3" />
                                <input
                                    type="text"
                                    placeholder="Enter Application No."
                                    className="bg-transparent border-none outline-none text-stone-700 placeholder:text-stone-400 w-full font-medium"
                                />
                                <button className="p-2 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors">
                                    <ArrowRight className="w-4 h-4 text-stone-600" />
                                </button>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-stone-200 flex items-center gap-8 text-sm text-stone-500 font-medium">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[var(--wb-secondary)]" /> ISO 27001 Secure
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[var(--wb-secondary)]" /> Aadhaar Verified
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image Showcase */}
                    <div className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
                        {/* Decorative abstract blob behind */}
                        <div className="absolute inset-0 bg-[var(--wb-dark)]/5 rounded-[3rem] transform rotate-6 scale-90 z-0 border border-[var(--wb-dark)]/10"></div>

                        {/* Main Image Container */}
                        <div className="relative z-10 w-full max-w-md transform transition-transform hover:scale-[1.01] duration-500">
                            <div className="glass-card p-2 rounded-2xl shadow-2xl shadow-[var(--wb-dark)]/15 border border-white/60">
                                <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-auto bg-stone-200">
                                    <img
                                        src={heroImg}
                                        alt="Digital Vehicle Dashboard"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Subtle gradient overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--wb-dark)]/30 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Floating Element 1: Verification Badge */}
                            <div className="absolute -left-8 top-16 glass-card p-4 rounded-xl flex items-center gap-3 shadow-lg border-l-4 border-[var(--wb-secondary)] animate-in slide-in-from-left-4 duration-700 delay-300">
                                <div className="w-10 h-10 bg-[var(--wb-accent)]/20 rounded-full flex items-center justify-center border border-[var(--wb-accent)]/30">
                                    <Shield className="w-5 h-5 text-[var(--wb-dark)]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Security</p>
                                    <p className="font-heading font-bold text-[var(--wb-dark)] leading-none">Encrypted</p>
                                </div>
                            </div>

                            {/* Floating Element 2: Status Badge */}
                            <div className="absolute -right-8 bottom-24 glass-card p-4 rounded-xl flex items-center gap-3 shadow-lg border-l-4 border-orange-400 animate-in slide-in-from-right-4 duration-700 delay-500">
                                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center border border-orange-100">
                                    <Activity className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Live Status</p>
                                    <p className="font-heading font-bold text-[var(--wb-dark)] leading-none">Tracking On</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Trust Section */}
            <section className="bg-[var(--wb-dark)] py-16 text-white border-y-4 border-[rgb(0,65,75)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        <div className="p-2">
                            <div className="text-3xl font-heading font-bold mb-1">2.4 Cr+</div>
                            <div className="text-xs uppercase tracking-widest text-[var(--wb-accent)]">Total Registered Vehicles</div>
                        </div>
                        <div className="p-2">
                            <div className="text-3xl font-heading font-bold mb-1">12,500+</div>
                            <div className="text-xs uppercase tracking-widest text-[var(--wb-accent)]">Applications processed daily</div>
                        </div>
                        <div className="p-2">
                            <div className="text-3xl font-heading font-bold mb-1">54</div>
                            <div className="text-xs uppercase tracking-widest text-[var(--wb-accent)]">RTOs Online</div>
                        </div>
                        <div className="p-2">
                            <div className="text-3xl font-heading font-bold mb-1">3 Days</div>
                            <div className="text-xs uppercase tracking-widest text-[var(--wb-accent)]">Avg. Disposal Time</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Minimalist Steps */}
            <section className="py-24 max-w-7xl mx-auto px-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--wb-dark)] mb-4">A simple, transparent process</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">Bureaucracy doesn't have to be complicated. We've designed a 4-step workflow.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { step: "01", title: "Authenticate", desc: "Login via Mobile OTP" },
                        { step: "02", title: "Details", desc: "Enter Vehicle Number" },
                        { step: "03", title: "e-Sign", desc: "Aadhaar Verification" },
                        { step: "04", title: "Approval", desc: "Digital RC Issued" },
                    ].map((item, i) => (
                        <div key={i} className="relative group">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-stone-100 group-hover:bg-[var(--wb-secondary)] transition-colors duration-500"></div>
                            <div className="pt-8 pr-8">
                                <span className="text-5xl text-stone-200 group-hover:text-[var(--wb-accent)] font-heading font-bold transition-colors duration-300 block mb-4">{item.step}</span>
                                <h3 className="text-lg font-bold text-stone-800 mb-2">{item.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto bg-stone-100 rounded-3xl p-12 lg:p-16 text-center border border-stone-200 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-[var(--wb-dark)] mb-6">Ready to initiate your request?</h2>
                        <p className="text-stone-600 mb-10 max-w-xl mx-auto">
                            Ensure you have your Registration Certificate (RC), Insurance details, and Aadhaar card ready for a smooth experience.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button onClick={handleGetStarted} className="px-8 py-3 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] transition-colors shadow-lg shadow-[var(--wb-dark)]/10">
                                Citizen Login
                            </button>
                            <button className="px-8 py-3 bg-white text-stone-700 border border-stone-300 rounded-lg font-bold hover:bg-stone-50 transition-colors">
                                View Guidelines
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-stone-200 pt-16 pb-8 text-stone-500">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                        <div className="max-w-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-[var(--wb-dark)] rounded flex items-center justify-center">
                                    <span className="text-white font-heading font-bold text-xl">WB</span>
                                </div>
                                <span className="font-bold text-xl text-[var(--wb-dark)]">Vahan Transfer</span>
                            </div>
                            <p className="text-sm leading-relaxed mb-6">
                                Designed and developed by the National Informatics Centre (NIC),
                                Ministry of Electronics & Information Technology, Government of India.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
                            <div>
                                <h4 className="font-bold text-stone-800 mb-4">Services</h4>
                                <ul className="space-y-3">
                                    <li><a href="#" className="hover:text-[var(--wb-primary)] transition-colors">Vehicle Transfer</a></li>
                                    <li><a href="#" className="hover:text-[var(--wb-primary)] transition-colors">Address Change</a></li>
                                    <li><a href="#" className="hover:text-[var(--wb-primary)] transition-colors">Permit Renewal</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-800 mb-4">Support</h4>
                                <ul className="space-y-3">
                                    <li><a href="#" className="hover:text-[var(--wb-primary)] transition-colors">User Manual</a></li>
                                    <li><a href="#" className="hover:text-[var(--wb-primary)] transition-colors">FAQs</a></li>
                                    <li><a href="#" className="hover:text-[var(--wb-primary)] transition-colors">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                        <p>© 2026 Transport Department, West Bengal. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-[var(--wb-dark)]">Privacy Policy</a>
                            <a href="#" className="hover:text-[var(--wb-dark)]">Terms of Use</a>
                            <a href="#" className="hover:text-[var(--wb-dark)]">Disclaimer</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}