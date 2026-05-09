import React from 'react'

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
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
                    <a href="#home" className="transition hover:text-slate-900">Home</a>
                    <a href="#properties" className="transition hover:text-slate-900">Properties</a>
                    <a href="#agents" className="transition hover:text-slate-900">Agents</a>
                    <a href="#blog" className="transition hover:text-slate-900">Blog</a>
                </nav>

                <button className="hidden rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 lg:inline-flex">
                    Sign In
                </button>
            </header>

            <main className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
                <section id="home" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                            Easy way to find a perfect property
                        </div>

                        <div className="space-y-6">
                            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                                Discover your next home with modern real estate solutions.
                            </h1>
                            <p className="max-w-xl text-base leading-8 text-slate-600">
                                We provide a complete service for the sale, purchase or rental of real estate. Search trusted listings and get expert support every step of the way.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50">
                                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Properties sold</p>
                                <p className="mt-3 text-3xl font-semibold text-slate-900">2.3k+</p>
                            </div>
                            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50">
                                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Countries</p>
                                <p className="mt-3 text-3xl font-semibold text-slate-900">12+</p>
                            </div>
                            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50">
                                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Agents</p>
                                <p className="mt-3 text-3xl font-semibold text-slate-900">220</p>
                            </div>
                        </div>

                        <div className="rounded-[2rem] bg-white p-5 shadow-xl shadow-slate-200/60">
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                <div className="flex items-center gap-4 rounded-3xl bg-slate-50 p-3">
                                    <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Buy</button>
                                    <button className="rounded-full px-4 py-2 text-sm text-slate-700">Rent</button>
                                    <button className="rounded-full px-4 py-2 text-sm text-slate-700">Sell</button>
                                </div>
                                <div className="overflow-hidden rounded-3xl bg-slate-100 p-4 text-sm text-slate-500">
                                    Search among 10,000+ premium properties around the globe.
                                </div>
                            </div>

                            <div className="mt-6 grid gap-4 sm:grid-cols-[1.5fr_5rem]">
                                <input
                                    type="text"
                                    placeholder="Search by city, property or neighbourhood"
                                    className="w-full rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                                />
                                <button className="rounded-[1.5rem] bg-sky-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-sky-700">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-600 via-slate-800 to-slate-900 p-6 text-white shadow-2xl shadow-slate-900/30">
                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_32%)]" />
                        <div className="relative grid gap-6">
                            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-xl shadow-slate-900/20">
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-200">Featured</p>
                                <h2 className="mt-4 text-3xl font-semibold">Modern villa for family</h2>
                                <p className="mt-3 text-sm leading-6 text-slate-200">
                                    A luxury home with all amenities, quiet neighborhood and great city view.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[1.75rem] bg-white/10 p-5 shadow-lg shadow-slate-900/25">
                                    <div className="mb-4 h-40 rounded-3xl bg-slate-300/40" />
                                    <p className="text-sm font-semibold text-white">Ocean View House</p>
                                    <p className="mt-2 text-sm text-slate-200">Miami Beach, USA</p>
                                </div>
                                <div className="rounded-[1.75rem] bg-white/10 p-5 shadow-lg shadow-slate-900/25">
                                    <div className="mb-4 h-40 rounded-3xl bg-slate-300/40" />
                                    <p className="text-sm font-semibold text-white">City Loft</p>
                                    <p className="mt-2 text-sm text-slate-200">London, UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-16 grid gap-8 xl:grid-cols-[1.3fr_1fr]">
                    <div className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/60">
                        <div className="mx-auto max-w-3xl">
                            <div className="rounded-[2rem] bg-slate-50 p-6 shadow-inner shadow-slate-100">
                                <div className="flex items-center justify-between gap-4 text-slate-500">
                                    <p className="text-sm uppercase tracking-[0.28em]">Insights</p>
                                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">+12% this month</span>
                                </div>
                                <div className="mt-8 flex items-end justify-between gap-4">
                                    <div className="space-y-2">
                                        <p className="text-3xl font-semibold text-slate-900">7.8k</p>
                                        <p className="text-sm text-slate-500">New visitors</p>
                                    </div>
                                    <div className="relative h-36 w-full overflow-hidden rounded-[1.5rem] bg-slate-100">
                                        <div className="absolute bottom-4 left-6 h-24 w-1.5 rounded-full bg-sky-500" />
                                        <div className="absolute bottom-8 left-20 h-28 w-1.5 rounded-full bg-slate-400/70" />
                                        <div className="absolute bottom-6 left-32 h-32 w-1.5 rounded-full bg-slate-400/90" />
                                        <div className="absolute bottom-10 left-48 h-20 w-1.5 rounded-full bg-slate-300" />
                                        <div className="absolute bottom-3 left-60 h-28 w-1.5 rounded-full bg-sky-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/60">
                        <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">
                                📈
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900">Fusce placerat enim et odio</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Donec mollis nulla et himenaeos mauris, molestias sagittis. Enim neque tellus ipsum eros.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl bg-slate-50 p-5">
                                <p className="text-sm text-slate-500">Trusted agents</p>
                                <p className="mt-3 text-2xl font-semibold text-slate-900">3,250</p>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-5">
                                <p className="text-sm text-slate-500">Available homes</p>
                                <p className="mt-3 text-2xl font-semibold text-slate-900">1,170</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-16">
                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/50">
                            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-100 text-amber-700">🏡</div>
                            <h3 className="mt-6 text-xl font-semibold text-slate-900">Pellentesque ac tortor</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                Cras ultricies mi eu turpis consectetur malesuada praesent in dolor sollicitudin.
                            </p>
                        </div>
                        <div className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/50">
                            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">🛡️</div>
                            <h3 className="mt-6 text-xl font-semibold text-slate-900">Safe & secure booking</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                Aliquam urna elit, pellentesque id facilisis vitae, luctus nec quam.
                            </p>
                        </div>
                        <div className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/50">
                            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">🌍</div>
                            <h3 className="mt-6 text-xl font-semibold text-slate-900">Worldwide listing</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                                Curabitur non tortor fermentum, aliquam augue at, commodo ex.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mt-16">
                    <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/40">
                        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">We are available</p>
                                <h2 className="mt-3 text-3xl font-semibold text-slate-900">We are available in many well-known countries</h2>
                            </div>
                            <button className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                                Explore all
                            </button>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {[
                                { title: 'America', label: 'New York', color: 'bg-slate-900 text-white' },
                                { title: 'Spain', label: 'Barcelona', color: 'bg-sky-100 text-sky-700' },
                                { title: 'London', label: 'Mayfair', color: 'bg-slate-50 text-slate-900' },
                                { title: 'France', label: 'Paris', color: 'bg-rose-100 text-rose-700' },
                            ].map((item) => (
                                <div key={item.title} className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                                    <div className={`h-64 ${item.color} flex items-end p-6`}>
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.3em] opacity-80">{item.title}</p>
                                            <p className="mt-4 text-2xl font-semibold leading-tight">{item.label}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="properties" className="mt-16">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Recently Added</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Find your best real estate</h2>
                        </div>
                        <button className="inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
                            Contact Us
                        </button>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        {[
                            {
                                name: '103/143 West Street',
                                location: 'Crown Nest',
                                price: '$12,500/mo',
                                status: 'For Rent',
                            },
                            {
                                name: '105/143 West Street',
                                location: 'Crown Nest',
                                price: '$18,200/mo',
                                status: 'For Rent',
                            },
                            {
                                name: '103/143 West Street',
                                location: 'Crown Nest',
                                price: '$9,200/mo',
                                status: 'For Sale',
                            },
                            {
                                name: '106/143 West Street',
                                location: 'Crown Nest',
                                price: '$14,900/mo',
                                status: 'For Sale',
                            },
                        ].map((property, index) => (
                            <div key={index} className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-lg shadow-slate-200/40">
                                <div className="h-56 bg-gradient-to-br from-sky-600 via-slate-800 to-slate-900" />
                                <div className="p-6">
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-lg font-semibold text-slate-900">{property.name}</p>
                                            <p className="mt-2 text-sm text-slate-500">{property.location}</p>
                                        </div>
                                        <span className="rounded-full bg-sky-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                                            {property.status}
                                        </span>
                                    </div>
                                    <p className="mt-5 text-2xl font-semibold text-slate-900">{property.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
