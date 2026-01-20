import React from "react"
import { useNavigate } from "react-router-dom"
import heroImg from "../assets/vehicleownerlandingpage.jpg"
import {
    ArrowRight,
    Shield,
    Activity,
    Check,
    Search,
    Menu,
    User
} from "lucide-react"
import Navbar from "./Navbar"

export default function LandingPage() {
    const navigate = useNavigate()

    const handleGetStarted = () => {
        navigate("/login")
    }

    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-body relative selection:bg-[var(--wb-gold)] selection:text-[var(--wb-dark)]">

            {/* Subtle Dot Pattern Background (Replaces generic blurs) */}
            <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(var(--wb-secondary) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            {/* Navigation */}
            <div className="relative z-50">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="relative px-6 md:px-10 pt-8 pb-32 overflow-hidden z-10">

                {/* Solid Geometric Decor (Instead of blurry blobs) */}
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[var(--wb-emerald)]/5 rounded-full -translate-y-1/4 translate-x-1/4 border border-[var(--wb-emerald)]/20 -z-10"></div>

                <div className="max-w-7xl mx-auto pt-6 pb-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6 animate-fade-in">

                        {/* Badge: Solid Border, No Gradient */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-[var(--wb-gold)] text-[var(--wb-dark)] text-xs font-bold tracking-wider uppercase shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[var(--wb-gold)] animate-pulse"></span>
                            Official Portal
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold font-heading text-[var(--wb-dark)] leading-[1.15] tracking-tight">
                            Vehicle transfer, <br />
                            <span className="text-[var(--wb-primary)] bg-[var(--wb-primary)]/10 px-2 rounded-lg -ml-2 box-decoration-clone">
                                simplified.
                            </span>
                        </h1>

                        <p className="text-lg text-stone-600 font-normal leading-relaxed max-w-lg">
                            Transfer ownership, update address, or manage vehicle permits. A faceless, paperless initiative for the people.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {/* Button: Tactile Hard Shadow instead of soft glow */}
                            <button
                                onClick={handleGetStarted}
                                className="px-8 py-4 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] hover:-translate-y-1 transition-all flex items-center gap-3 border-2 border-[var(--wb-primary)] shadow-[4px_4px_0px_0px_rgba(29,84,109,0.3)]"
                            >
                                Start Application
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Image Showcase */}
                    <div className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
                        {/* Decorative solid shape behind */}
                        <div className="absolute inset-0 bg-[var(--wb-cream)] rounded-[3rem] transform rotate-6 scale-90 z-0 border-2 border-[var(--wb-gold)]"></div>

                        {/* Main Image Container */}
                        <div className="relative z-10 w-full max-w-md transform transition-transform hover:scale-[1.01] duration-500">
                            {/* Card: White solid, crisp border */}
                            <div className="bg-white p-3 rounded-2xl shadow-xl border-2 border-stone-100">
                                <div className="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-auto bg-stone-200">
                                    <img
                                        src={heroImg}
                                        alt="Digital Vehicle Dashboard"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Tint overlay */}
                                    <div className="absolute inset-0 bg-[var(--wb-dark)]/10 pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Floating Element 1: Solid & Crisp */}
                            <div className="absolute -left-8 top-16 bg-white p-4 rounded-xl flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-stone-100 animate-in slide-in-from-left-4 duration-700 delay-300">
                                <div className="w-12 h-12 bg-[var(--wb-green)]/10 rounded-full flex items-center justify-center border border-[var(--wb-green)]/20">
                                    <Shield className="w-6 h-6 text-[var(--wb-green)]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Security</p>
                                    <p className="font-heading font-bold text-[var(--wb-dark)] leading-none text-lg">Encrypted</p>
                                </div>
                            </div>

                            {/* Floating Element 2: Solid & Crisp */}
                            <div className="absolute -right-8 bottom-24 bg-white p-4 rounded-xl flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-stone-100 animate-in slide-in-from-right-4 duration-700 delay-500">
                                <div className="w-12 h-12 bg-[var(--wb-emerald)]/10 rounded-full flex items-center justify-center border border-[var(--wb-emerald)]/20">
                                    <Activity className="w-6 h-6 text-[var(--wb-emerald)]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Status</p>
                                    <p className="font-heading font-bold text-[var(--wb-dark)] leading-none text-lg">Tracking On</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Trust Section - Solid Block Color */}
            <section className="bg-[var(--wb-dark)] py-16 text-white border-y-4 border-[var(--wb-gold)] relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-2 border-r border-white/10 last:border-r-0">
                            <div className="text-4xl font-heading font-bold mb-2 text-[var(--wb-gold)]">2.4 Cr+</div>
                            <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">Total Registered Vehicles</div>
                        </div>
                        <div className="p-2 border-r border-white/10 last:border-r-0">
                            <div className="text-4xl font-heading font-bold mb-2 text-[var(--wb-gold)]">12k+</div>
                            <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">Applications Daily</div>
                        </div>
                        <div className="p-2 border-r border-white/10 last:border-r-0">
                            <div className="text-4xl font-heading font-bold mb-2 text-[var(--wb-gold)]">54</div>
                            <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">RTOs Online</div>
                        </div>
                        <div className="p-2">
                            <div className="text-4xl font-heading font-bold mb-2 text-[var(--wb-gold)]">3 Days</div>
                            <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">Avg. Disposal Time</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps - Colorful Cards instead of just lines */}
            <section className="py-24 max-w-7xl mx-auto px-10 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--wb-dark)] mb-4">A simple, transparent process</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">Bureaucracy doesn't have to be complicated. We've designed a 4-step workflow.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { step: "01", title: "Authenticate", desc: "Login via Mobile OTP", color: "var(--wb-gold)", bg: "#FFFBEB", border: "var(--wb-gold)" },
                        { step: "02", title: "Details", desc: "Enter Vehicle Number", color: "var(--wb-emerald)", bg: "#ECFDF5", border: "var(--wb-emerald)" },
                        { step: "03", title: "e-Sign", desc: "Aadhaar Verification", color: "var(--wb-indigo)", bg: "#EEF2FF", border: "var(--wb-indigo)" },
                        { step: "04", title: "Approval", desc: "Digital RC Issued", color: "var(--wb-green)", bg: "#F0FDF4", border: "var(--wb-green)" },
                    ].map((item, i) => (
                        <div key={i} className="relative group p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2"
                            style={{ backgroundColor: item.bg, borderColor: 'transparent' }}>
                            {/* Top accent line retained but refined */}
                            <div
                                className="absolute top-0 left-0 w-full h-1.5 rounded-t-2xl opacity-60"
                                style={{ backgroundColor: item.color }}
                            ></div>

                            <div className="pt-4">
                                <span
                                    className="text-5xl font-heading font-bold block mb-4 opacity-40"
                                    style={{ color: item.color }}
                                >
                                    {item.step}
                                </span>
                                <h3 className="text-xl font-bold text-stone-800 mb-2">{item.title}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section - Solid Colors, No Gradients */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto bg-[var(--wb-cream)] rounded-3xl p-12 lg:p-16 text-center border-2 border-[var(--wb-gold)] relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(218,165,32,0.2)]">

                    {/* Background Pattern: Solid Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--wb-emerald)]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--wb-secondary)]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-[var(--wb-dark)] mb-6">Ready to initiate your request?</h2>
                        <p className="text-stone-600 mb-10 max-w-xl mx-auto font-medium">
                            Ensure you have your Registration Certificate (RC), Insurance details, and Aadhaar card ready for a smooth experience.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={handleGetStarted}
                                className="px-8 py-3 bg-[var(--wb-primary)] text-white rounded-lg font-bold hover:bg-[var(--wb-dark)] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:translate-y-1 hover:shadow-none border-2 border-[var(--wb-primary)]"
                            >
                                Citizen Login
                            </button>
                            <button className="px-8 py-3 bg-white text-[var(--wb-dark)] border-2 border-[var(--wb-secondary)] rounded-lg font-bold hover:bg-[var(--wb-secondary)] hover:text-white transition-colors">
                                View Guidelines
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer - Cleaned up */}
            <footer className="bg-white border-t border-stone-200 pt-16 pb-8 text-stone-500 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                        <div className="max-w-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-[var(--wb-dark)] rounded flex items-center justify-center">
                                    <span className="text-[var(--wb-gold)] font-heading font-bold text-xl">WB</span>
                                </div>
                                <span className="font-bold text-xl text-[var(--wb-dark)]">Vahan Transfer</span>
                            </div>
                            <p className="text-sm leading-relaxed mb-6 font-medium">
                                Designed and developed by the National Informatics Centre (NIC),
                                Ministry of Electronics & Information Technology, Government of India.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
                            <div>
                                <h4 className="font-bold text-[var(--wb-dark)] mb-4 uppercase text-xs tracking-wider">Services</h4>
                                <ul className="space-y-3">
                                    <li><a href="#" className="hover:text-[var(--wb-primary)] font-medium transition-colors">Vehicle Transfer</a></li>
                                    <li><a href="#" className="hover:text-[var(--wb-primary)] font-medium transition-colors">Address Change</a></li>
                                    <li><a href="#" className="hover:text-[var(--wb-primary)] font-medium transition-colors">Permit Renewal</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-[var(--wb-dark)] mb-4 uppercase text-xs tracking-wider">Support</h4>
                                <ul className="space-y-3">
                                    <li><a href="#" className="hover:text-[var(--wb-emerald)] font-medium transition-colors">User Manual</a></li>
                                    <li><a href="#" className="hover:text-[var(--wb-emerald)] font-medium transition-colors">FAQs</a></li>
                                    <li><a href="#" className="hover:text-[var(--wb-emerald)] font-medium transition-colors">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium">
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