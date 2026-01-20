import { Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import OTPLogin from "./components/Otp-login"
import WorkflowPage from "./pages/Workflow"
import ProtectedRoute from "./routes/ProtectedRoute"
import PublicRoute from "./routes/PublicRoute"
import { AuthProvider } from "./context/AuthContext"
import Dashboard from "./pages/Dashboard"

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <OTPLogin />
            </PublicRoute>
          }
        />

        <Route
          path="/workflow"
          element={
            <ProtectedRoute>
              <WorkflowPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />



        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}