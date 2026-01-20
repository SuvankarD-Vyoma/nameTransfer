import { useNavigate, Link } from "react-router-dom"
import { User, Menu, LogOut } from "lucide-react"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
    const navigate = useNavigate()
    const { isAuthenticated, userPhone, logout } = useAuth()

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    return (
        // Clean white background with subtle border and shadow for professional elevated look
        <nav className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-[0_4px_20px_rgb(0,0,0,0.06)]">
            <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">

                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 group">
                    {/* Logo Box */}
                    <div className="w-10 h-10 bg-[var(--wb-dark)] rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] group-hover:translate-y-[-1px] transition-transform">
                        <span className="text-[var(--wb-gold)] font-heading font-bold text-xl">WB</span>
                    </div>
                    {/* Text Container */}
                    <div className="flex flex-col justify-center">
                        <span className="font-bold text-lg text-[var(--wb-dark)] leading-none group-hover:text-[var(--wb-primary)] transition-colors">Vahan Transfer</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-1 font-bold">e-Services Portal</span>
                    </div>
                </Link>

                {/* Right Side Actions */}
                <div className="hidden md:flex items-center gap-6">
                    {isAuthenticated ? (
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-tight">Logged in as</span>
                                <span className="text-sm font-bold text-[var(--wb-dark)]">+91 {userPhone}</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-stone-600 hover:text-red-600 border-2 border-stone-200 hover:border-red-100 hover:bg-red-50 rounded-lg font-bold text-sm transition-all flex items-center gap-2"
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            // Button: Strong Primary color to contrast against the white background
                            // Tactile shadow style preserved
                            className="px-5 py-2.5 bg-[var(--wb-primary)] text-white rounded-lg font-bold text-sm transition-all 
                                       border-2 border-[var(--wb-primary)] 
                                       shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] 
                                       hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] 
                                       hover:bg-[var(--wb-dark)] hover:border-[var(--wb-dark)]
                                       flex items-center gap-2"
                        >
                            <User className="w-4 h-4" />
                            Citizen Login
                        </button>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-[var(--wb-dark)] p-2 hover:bg-stone-100 rounded-lg border border-transparent transition-all">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    )
}