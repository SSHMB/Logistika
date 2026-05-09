import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getPropertyById } from '../data/properties'
import Header from '../components/Header'

const PropertyCard = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const property = getPropertyById(id)

    if (!property) {
        return (
            <div className="min-h-screen bg-slate-50 text-slate-900">
                <Header />
                <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <p className="text-center text-slate-600">Hozircha hech qanday mulk topilmadi</p>
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

                <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-lg shadow-slate-200/40 max-w-2xl">
                    <div className="h-96 bg-gradient-to-br from-sky-600 via-slate-800 to-slate-900" />
                    <div className="p-8">
                        <div className="mb-6 flex items-center justify-between gap-3">
                            <div>
                                <p className="text-3xl font-semibold text-slate-900">{property.name}</p>
                                <p className="mt-2 text-lg text-slate-500">{property.location}</p>
                            </div>
                            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 whitespace-nowrap">
                                {property.status}
                            </span>
                        </div>
                        <p className="text-4xl font-semibold text-slate-900">{property.price}</p>

                        <div className="mt-8 space-y-4">
                            <button className="w-full rounded-lg bg-sky-700 px-6 py-3 font-semibold text-white hover:bg-sky-800 transition">
                                Batafsil ma'lumot
                            </button>
                            <button className="w-full rounded-lg border border-sky-700 px-6 py-3 font-semibold text-sky-700 hover:bg-sky-50 transition">
                                Muqobala qilish
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PropertyCard
