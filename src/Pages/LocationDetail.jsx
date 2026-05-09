import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Home, TrendingUp, DollarSign } from 'lucide-react'
import { getLocationById } from '../data/locations'
import Header from '../components/Header'

const LocationDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const location = getLocationById(id)

    if (!location) {
        return (
            <div className="min-h-screen bg-slate-50 text-slate-900">
                <Header />
                <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <p className="text-center text-slate-600">Hozircha hech qanday joylashuv topilmadi</p>
                </main>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Header />
            <main className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
                <button
                    onClick={() => navigate('/home')}
                    className="mb-8 flex items-center gap-2 text-sky-700 hover:text-sky-800 font-semibold transition"
                >
                    <ArrowLeft size={20} />
                    Orqaga
                </button>

                {/* Hero Section */}
                <div className={`rounded-3xl ${location.image} shadow-2xl overflow-hidden mb-12`}>
                    <div className={`h-96 bg-linear-to-br ${location.accent}`} />
                    <div className="p-12">
                        <p className="text-sm uppercase tracking-[0.3em] opacity-70">{location.title}</p>
                        <h1 className="mt-3 text-5xl font-bold">{location.city}</h1>
                        <p className="mt-4 text-lg leading-8 opacity-90 max-w-2xl">
                            {location.fullDescription}
                        </p>
                    </div>
                </div>

                {/* Statistics Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    <div className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50 border border-slate-200/70">
                        <div className="flex items-center gap-3 mb-3">
                            <DollarSign size={24} className="text-amber-600" />
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Avg Price</p>
                        </div>
                        <p className="text-3xl font-bold text-slate-900">{location.statistics.avgPrice}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50 border border-slate-200/70">
                        <div className="flex items-center gap-3 mb-3">
                            <Home size={24} className="text-sky-600" />
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Properties</p>
                        </div>
                        <p className="text-3xl font-bold text-slate-900">{location.statistics.properties}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50 border border-slate-200/70">
                        <div className="flex items-center gap-3 mb-3">
                            <MapPin size={24} className="text-emerald-600" />
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Avg Rent</p>
                        </div>
                        <p className="text-3xl font-bold text-slate-900">{location.statistics.avgRent}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50 border border-slate-200/70">
                        <div className="flex items-center gap-3 mb-3">
                            <TrendingUp size={24} className="text-rose-600" />
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">ROI</p>
                        </div>
                        <p className="text-3xl font-bold text-slate-900">{location.statistics.investmentReturn}</p>
                    </div>
                </div>

                {/* Highlights */}
                <div className="rounded-3xl bg-white p-12 shadow-xl shadow-slate-200/40 border border-slate-200/70">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Nima Bu Joyni Maxsus Qiladi</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {location.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-sky-50 hover:border-sky-200 transition">
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-sky-100 text-sky-700">
                                    <span className="font-semibold">{idx + 1}</span>
                                </div>
                                <p className="text-lg font-semibold text-slate-900">{highlight}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 rounded-3xl bg-linear-to-r from-sky-600 to-blue-600 p-12 text-white shadow-xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">{location.city}da Investitsiya Qilish Uchun Tayyor?</h2>
                        <p className="text-lg mb-8 opacity-90">
                            Bizning professional agentlar sizga eng yaxshi mulkni topishda yordam berishadi.
                        </p>
                        <div className="flex gap-4 flex-wrap justify-center">
                            <button className="rounded-full bg-white px-8 py-3 font-semibold text-sky-700 hover:bg-slate-100 transition">
                                Biz Bilan Bog'lanish
                            </button>
                            <button className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 transition">
                                Mulklar Ko'rish
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LocationDetail
