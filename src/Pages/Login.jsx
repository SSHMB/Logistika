import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthProvider.jsx'

const Login = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const [mode, setMode] = useState('login')
    const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', remember: false })
    const [error, setError] = useState('')

    useEffect(() => {
        if (auth.user) {
            navigate('/admin', { replace: true })
        }
    }, [auth.user, navigate])

    const handleChange = (key) => (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setError('')

        if (mode === 'login') {
            const response = auth.login({ email: form.email.trim(), password: form.password })
            if (!response.ok) {
                setError(response.message)
                return
            }
            navigate('/admin')
            return
        }

        if (!form.name.trim()) {
            setError('Iltimos, ismingizni kiriting.')
            return
        }

        if (form.password !== form.confirmPassword) {
            setError('Parollar mos kelmayapti.')
            return
        }

        const response = auth.signup({ name: form.name.trim(), email: form.email.trim(), password: form.password })
        if (!response.ok) {
            setError(response.message)
            return
        }

        navigate('/admin')
    }

    const title = mode === 'login' ? 'Welcome Back' : 'Create your account'
    const buttonLabel = mode === 'login' ? 'Sign In' : 'Create Account'
    const toggleLabel = mode === 'login' ? 'Don’t have an account? Sign up' : 'Already have an account? Sign in'

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')",
                }}
            />
            <div className="absolute inset-0 bg-slate-950/70" />
            <div className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-12">
                <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/60 backdrop-blur-xl sm:p-10">
                    <div className="mb-8 flex flex-col items-center gap-3 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-sky-300 shadow-lg shadow-sky-500/10">
                            <span className="text-2xl font-bold">L</span>
                        </div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">logoipsum.com</p>
                        <h1 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {mode === 'signup' && (
                            <div>
                                <label className="mb-3 block text-sm font-medium text-slate-200">Full name</label>
                                <input
                                    value={form.name}
                                    onChange={handleChange('name')}
                                    placeholder="Enter your name"
                                    className="w-full rounded-3xl border border-slate-200/20 bg-white/90 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
                                />
                            </div>
                        )}

                        <div>
                            <label className="mb-3 block text-sm font-medium text-slate-200">Email Address</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={handleChange('email')}
                                placeholder="Email Address"
                                className="w-full rounded-3xl border border-slate-200/20 bg-white/90 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-sm font-medium text-slate-200">Password</label>
                            <input
                                type="password"
                                value={form.password}
                                onChange={handleChange('password')}
                                placeholder="Password"
                                className="w-full rounded-3xl border border-slate-200/20 bg-white/90 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
                            />
                        </div>

                        {mode === 'signup' && (
                            <div>
                                <label className="mb-3 block text-sm font-medium text-slate-200">Confirm Password</label>
                                <input
                                    type="password"
                                    value={form.confirmPassword}
                                    onChange={handleChange('confirmPassword')}
                                    placeholder="Confirm your password"
                                    className="w-full rounded-3xl border border-slate-200/20 bg-white/90 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
                                />
                            </div>
                        )}

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <label className="inline-flex items-center gap-2 text-sm text-slate-200">
                                <input type="checkbox" checked={form.remember} onChange={handleChange('remember')} className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                                Remember me
                            </label>
                            <button type="button" className="text-sm font-medium text-slate-200 transition hover:text-white">
                                Forgot Password?
                            </button>
                        </div>

                        {error && <p className="rounded-3xl bg-rose-500/10 px-4 py-3 text-sm text-rose-200">{error}</p>}

                        <button
                            type="submit"
                            className="w-full rounded-3xl bg-sky-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-sky-600"
                        >
                            {buttonLabel}
                        </button>
                    </form>

                    <button
                        type="button"
                        onClick={() => {
                            setError('')
                            setMode(mode === 'login' ? 'signup' : 'login')
                        }}
                        className="mt-6 w-full rounded-3xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-200 transition hover:border-slate-100/30 hover:bg-white/10"
                    >
                        {toggleLabel}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
