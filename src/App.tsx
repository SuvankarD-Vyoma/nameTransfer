import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import LandingPage from "./components/LandingPage"
import OTPLogin from "./components/Otp-login"
import WorkflowPage from "./pages/Workflow"
import { WorkflowProvider } from "./context/WorkflowContext"

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userPhone, setUserPhone] = useState("")

  const handleLogin = (phone: string) => {
    setUserPhone(phone)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserPhone("")
  }

  return (
    <WorkflowProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/workflow" replace />
            ) : (
              <OTPLogin onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/workflow"
          element={
            isAuthenticated ? (
              <WorkflowPage userPhone={userPhone} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </WorkflowProvider>
  )
}