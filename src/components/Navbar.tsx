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
        <nav className="sticky top-0 z-50 bg-[#fafaf9]/80 backdrop-blur-md border-b border-stone-200/60">
            <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">

                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                    <div className="w-10 h-10 bg-[var(--wb-dark)] rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-white font-heading font-bold text-xl">WB</span>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="font-bold text-lg text-[var(--wb-dark)] leading-none">Vahan Transfer</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-1 font-semibold">e-Services Portal</span>
                    </div>
                </Link>

                {/* Right Side Actions */}
                <div className="hidden md:flex items-center gap-6">
                    {isAuthenticated ? (
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-tight">Logged in as</span>
                                <span className="text-sm font-bold text-stone-700">+91 {userPhone}</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-stone-600 hover:text-red-600 border border-stone-200 hover:border-red-100 hover:bg-red-50 rounded-lg font-medium transition-all flex items-center gap-2"
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="px-5 py-2.5 bg-[var(--wb-primary)] hover:bg-[var(--wb-dark)] text-white rounded-lg font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                        >
                            <User className="w-4 h-4" />
                            Citizen Login
                        </button>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-stone-600 p-2 hover:bg-stone-100 rounded-lg">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    )
}