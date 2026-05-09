import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
            <div className="flex items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-200/50">
                    L
                </div>
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">Logistika</p>
                </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
                <Link to="/home#home" className="transition hover:text-slate-900">Home</Link>
                <Link to="/realestatepage" className="transition hover:text-slate-900">Real Estate</Link>
                <Link to="/contact" className="transition hover:text-slate-900">Contact</Link>
                <Link to="/admin" className="transition hover:text-slate-900">Admin</Link>
            </nav>

            <button className="hidden rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 lg:inline-flex">
                Sign In
            </button>
        </header>
    )
}

export default Header