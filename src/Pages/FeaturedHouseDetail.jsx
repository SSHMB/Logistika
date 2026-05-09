import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Bed, Bath, Ruler, Zap } from 'lucide-react'
import { getFeaturedHouseById } from '../data/featuredHouses'
import Header from '../components/Header'

const FeaturedHouseDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const house = getFeaturedHouseById(id)

    if (!house) {
        return (
            <div className="min-h-screen bg-slate-50 text-slate-900">
                <Header />
                <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <p className="text-center text-slate-600">Hozircha hech qanday uy topilmadi</p>
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
                <div className={`rounded-3xl bg-linear-to-br ${house.accent} shadow-2xl overflow-hidden mb-12 text-white`}>
                    <div className="h-96 bg-gradient-to-br opacity-20" />
                    <div className="p-12 -mt-80 relative z-10">
                        <p className="text-sm uppercase tracking-[0.3em] opacity-90">Featured Property</p>
                        <h1 className="mt-3 text-5xl font-bold">{house.name}</h1>
                        <p className="mt-4 text-lg opacity-90">{house.location}</p>
                        <p className="mt-4 text-4xl font-bold">{house.price}</p>
                        <span className="inline-block mt-4 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                            {house.status}
                        </span>
                    </div>
                </div>

                {/* Property Details Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    <div className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50 border border-slate-200/70">
                        <div className="flex items-center gap-3 mb-3">
                            <Bed size={24} className="text-sky-600" />
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Bedrooms</p>
                        </div>
                        <p className="text-3xl font-bold text-slate-900">{house.bedrooms}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50 border border-slate-200/70">
                        <div className="flex items-center gap-3 mb-3">
                            <Bath size={24} className="text-emerald-600" />
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Bathrooms</p>
                        </div>
                        <p className="text-3xl font-bold text-slate-900">{house.bathrooms}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50 border border-slate-200/70">
                        <div className="flex items-center gap-3 mb-3">
                            <Ruler size={24} className="text-amber-600" />
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Area</p>
                        </div>
                        <p className="text-2xl font-bold text-slate-900">{house.area}</p>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50 border border-slate-200/70">
                        <div className="flex items-center gap-3 mb-3">
                            <Zap size={24} className="text-rose-600" />
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Pool Type</p>
                        </div>
                        <p className="text-sm font-bold text-slate-900">{house.amenities.poolType}</p>
                    </div>
                </div>

                {/* Description */}
                <div className="rounded-3xl bg-white p-12 shadow-xl shadow-slate-200/40 border border-slate-200/70 mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Batafsil Ma'lumot</h2>
                    <p className="text-lg leading-8 text-slate-600 mb-8">
                        {house.fullDescription}
                    </p>
                </div>

                {/* Features */}
                <div className="grid gap-6 lg:grid-cols-2 mb-12">
                    <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/40 border border-slate-200/70">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Xususiyatlar</h3>
                        <div className="space-y-4">
                            {house.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-sky-50 hover:border-sky-200 transition">
                                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-sky-100 text-sky-700">
                                        ✓
                                    </div>
                                    <p className="text-slate-700 font-medium">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/40 border border-slate-200/70">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Qulayliklar</h3>
                        <div className="space-y-4">
                            {Object.entries(house.amenities).map(([key, value]) => (
                                <div key={key} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-emerald-50 hover:border-emerald-200 transition">
                                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-emerald-100 text-emerald-700">
                                        ⚙️
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-slate-500">{key}</p>
                                        <p className="text-slate-700 font-medium">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`rounded-3xl bg-linear-to-r ${house.accent} p-12 text-white shadow-xl`}>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Bu Mulkni Xohlaysizmi?</h2>
                        <p className="text-lg mb-8 opacity-90">
                            Bizning agentlar sizga ushbu hashamatli mulkni olish yoki ijaraga olish uchun yordam berishadi.
                        </p>
                        <div className="flex gap-4 flex-wrap justify-center">
                            <button className="rounded-full bg-white px-8 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition">
                                Muqobala Qilish
                            </button>
                            <button className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 transition">
                                Ko'proq Ma'lumot
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FeaturedHouseDetail
