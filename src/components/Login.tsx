"use client"

import type React from "react"

import { useState } from "react"
import { Lock, Mail, CheckCircle } from "lucide-react"

interface LoginProps {
    onLogin: (email: string) => void
}

export default function Login({ onLogin }: LoginProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!email || !password) {
            setError("Please enter both email and password")
            return
        }

        if (!email.includes("@")) {
            setError("Please enter a valid email address")
            return
        }

        // Simulate loading
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            onLogin(email)
        }, 800)
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                        <Lock className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Vehicle Transfer</h1>
                    <p className="text-slate-600">Secure Vehicle Ownership Transfer Portal</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-xl shadow-xl p-8 space-y-6">
                    {/* Welcome Message */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-slate-900">Welcome Back</h2>
                        <p className="text-sm text-slate-600">Sign in to your account to continue with vehicle transfer</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        setError("")
                                    }}
                                    placeholder="you@example.com"
                                    className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        setError("")
                                    }}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex gap-2">
                                <span className="text-red-600 text-sm font-medium">{error}</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>

                    {/* Demo Credentials */}
                    <div className="pt-4 border-t border-slate-200">
                        <p className="text-xs text-slate-600 font-medium mb-2">Demo Credentials:</p>
                        <div className="space-y-1 text-xs text-slate-600">
                            <p>
                                Email: <span className="font-mono text-slate-700">user@example.com</span>
                            </p>
                            <p>
                                Password: <span className="font-mono text-slate-700">password123</span>
                            </p>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 pt-2">
                        <p className="text-xs font-medium text-slate-700">After login, you can:</p>
                        <ul className="text-xs text-slate-600 space-y-1">
                            <li className="flex gap-2">
                                <span className="text-blue-600">✓</span> Complete vehicle registration
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600">✓</span> Verify ownership details
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600">✓</span> Transfer ownership to buyer
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-slate-500 mt-6">© 2026 Vehicle Transfer Portal. All rights reserved.</p>
            </div>
        </main>
    )
}
