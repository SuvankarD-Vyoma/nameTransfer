import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    // Destructure loading from context
    const { isAuthenticated, token, selectedRole, loading } = useAuth()
    const location = useLocation()

    // 1. Show a loading spinner (or blank screen) while checking session
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#fafaf9]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    // 2. If not authenticated, redirect to login
    if (!isAuthenticated || !token) {
        return <Navigate to="/login" replace />
    }

    // 3. If authenticated but on /workflow without selecting a role, redirect to dashboard
    if (location.pathname === '/workflow' && !selectedRole) {
        return <Navigate to="/dashboard" replace />
    }

    return <>{children}</>
}  