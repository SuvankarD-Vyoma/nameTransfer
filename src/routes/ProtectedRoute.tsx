import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, token } = useAuth()

    if (!isAuthenticated || !token) {
        // Redirect to login if not authenticated or no token
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}