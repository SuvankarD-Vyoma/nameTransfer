import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { cookieUtils } from "../lib/cookieUtils"

export interface UserData {
    user_id: number;
    user_type_id: number;
    user_type_name: string;
    user_full_name: string | null;
    user_contact_number: string;
}

interface AuthContextType {
    isAuthenticated: boolean
    userPhone: string
    userData: UserData | null
    token: string | null
    login: (phone: string, userData: UserData, token: string, expiresAt: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userPhone, setUserPhone] = useState("")
    const [userData, setUserData] = useState<UserData | null>(null)
    const [token, setToken] = useState<string | null>(null)

    // Check for existing token on mount
    useEffect(() => {
        const existingToken = cookieUtils.getToken()
        const existingUserData = cookieUtils.getUserData()

        if (existingToken && existingUserData) {
            try {
                const parsedUserData = JSON.parse(decodeURIComponent(existingUserData))
                setToken(existingToken)
                setUserData(parsedUserData)
                setUserPhone(parsedUserData.user_contact_number)
                setIsAuthenticated(true)
            } catch (error) {
                console.error('Failed to restore user session:', error)
                // Clear invalid data
                cookieUtils.removeToken()
                cookieUtils.removeUserData()
            }
        }
    }, [])

    const login = (phone: string, userData: UserData, token: string, expiresAt: string) => {
        setUserPhone(phone)
        setUserData(userData)
        setToken(token)
        setIsAuthenticated(true)

        // Store both token and user data in cookies
        cookieUtils.setToken(token, expiresAt)
        cookieUtils.setUserData(encodeURIComponent(JSON.stringify(userData)))
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUserPhone("")
        setUserData(null)
        setToken(null)

        // Remove both from cookies
        cookieUtils.removeToken()
        cookieUtils.removeUserData()
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, userPhone, userData, token, login, logout }}>
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