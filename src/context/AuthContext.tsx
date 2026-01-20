import { createContext, useContext, useState, ReactNode } from "react"

interface AuthContextType {
    isAuthenticated: boolean
    userPhone: string
    login: (phone: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userPhone, setUserPhone] = useState("")

    const login = (phone: string) => {
        setUserPhone(phone)
        setIsAuthenticated(true)
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUserPhone("")
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, userPhone, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook for easy access
export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}