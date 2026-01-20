import { Navigate } from "react-router-dom"
import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, userPhone } = useAuth()

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         console.log("Accessing Protected Route. User Phone:", userPhone)
    //     }
    // }, [isAuthenticated, userPhone]) // Only runs when these values change

    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}