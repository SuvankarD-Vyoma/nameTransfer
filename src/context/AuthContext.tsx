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
    selectedRole: 'seller' | 'buyer' | null
    loading: boolean; // <--- ADD THIS
    setRole: (role: 'seller' | 'buyer') => void
    login: (phone: string, userData: UserData, token: string, expiresAt: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userPhone, setUserPhone] = useState("")
    const [userData, setUserData] = useState<UserData | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [selectedRole, setSelectedRole] = useState<'seller' | 'buyer' | null>(null)

    // ADD THIS LOADING STATE
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkSession = () => {
            try {
                const existingToken = cookieUtils.getToken()
                const existingUserData = cookieUtils.getUserData()
                const existingRole = localStorage.getItem('userRole') as 'seller' | 'buyer' | null

                if (existingToken && existingUserData) {
                    const parsedUserData = JSON.parse(decodeURIComponent(existingUserData))
                    setToken(existingToken)
                    setUserData(parsedUserData)
                    setUserPhone(parsedUserData.user_contact_number)
                    setIsAuthenticated(true)
                    setSelectedRole(existingRole)
                }
            } catch (error) {
                console.error('Failed to restore user session:', error)
                cookieUtils.removeToken()
                cookieUtils.removeUserData()
                localStorage.removeItem('userRole')
            } finally {
                // IMPORTANT: Stop loading whether session was found or not
                setLoading(false)
            }
        }

        checkSession()
    }, [])

    const login = (phone: string, userData: UserData, token: string, expiresAt: string) => {
        setUserPhone(phone)
        setUserData(userData)
        setToken(token)
        setIsAuthenticated(true)
        cookieUtils.setToken(token, expiresAt)
        cookieUtils.setUserData(encodeURIComponent(JSON.stringify(userData)))
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUserPhone("")
        setUserData(null)
        setToken(null)
        setSelectedRole(null)
        cookieUtils.removeToken()
        cookieUtils.removeUserData()
        localStorage.removeItem('userRole')
    }

    const setRole = (role: 'seller' | 'buyer') => {
        setSelectedRole(role)
        localStorage.setItem('userRole', role)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, userPhone, userData, token, selectedRole, loading, setRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}