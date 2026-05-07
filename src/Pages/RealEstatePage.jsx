import { useEffect, useState } from "react";
import {
  Star,
  MapPin,
  Users,
  Building2,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Mail,
  Share2,
  MessageCircle,
  Link,
  Play,
  ArrowRight,
  Home,
  Layers,
  Award,
  TrendingUp,
} from "lucide-react";
import Header from "../components/Header";

function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-6 right-16 w-5 h-5 rounded-full bg-orange-400 opacity-90" />
      <div className="absolute bottom-10 left-6 w-8 h-8 bg-emerald-400 opacity-30 rotate-45 rounded-sm" />

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">
            About us
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </h1>

          <div className="mt-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 inline-flex items-center gap-5">
            <div className="w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-slate-600">
              <div className="w-full h-full bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center">
                <Building2 size={24} className="text-slate-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-4xl font-bold">4.8</p>
              <p className="text-xs text-white/60 mt-0.5">1200+ reviews</p>
            </div>
          </div>

          <div className="mt-6 flex gap-8">
            <div>
              <p className="text-2xl font-bold">300+</p>
              <p className="text-xs text-white/60">Listed Properties</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-2xl font-bold">550+</p>
              <p className="text-xs text-white/60">Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/20 rounded-full" />

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-4">
            <h3 className="text-xl font-semibold mb-3">
              Fusce placerat enim et odio molestie sagittis
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-blue-900 to-slate-800 flex items-center justify-center relative">
            <Building2 size={64} className="text-blue-300 opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <p className="absolute bottom-3 left-3 text-xs text-white/80 font-medium">
              Premium Properties
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBanner() {
  const stats = [
    { icon: <Building2 size={28} className="text-emerald-500" />, value: "+20M", label: "Open Works" },
    { icon: <Users size={28} className="text-emerald-500" />, value: "+100", label: "Supported Cities" },
    { icon: <TrendingUp size={28} className="text-emerald-500" />, value: "+50M", label: "Infrastructural" },
    { icon: <Award size={28} className="text-emerald-500" />, value: "+200K", label: "Registered Users" },
  ];

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-0">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`flex flex-col items-center py-6 ${i < stats.length - 1
              ? "border-r border-gray-100"
              : ""
              }`}
          >
            <div className="mb-3 p-3 bg-emerald-50 rounded-xl">{s.icon}</div>
            <p className="text-2xl font-bold text-gray-800">{s.value}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="absolute top-8 right-8 w-6 h-6 bg-orange-400 rounded-full" />
      <div className="absolute bottom-16 left-8 w-10 h-10 bg-emerald-300/30 rotate-45 rounded" />

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <Users size={48} className="text-slate-400" />
          </div>
          <div className="rounded-2xl overflow-hidden h-32 bg-gradient-to-br from-emerald-100 to-teal-200 flex items-center justify-center">
            <Home size={36} className="text-emerald-500" />
          </div>
          <div className="rounded-2xl bg-emerald-500 flex flex-col items-center justify-center h-32 text-white">
            <p className="text-2xl font-bold">+100</p>
            <p className="text-xs text-emerald-100 mt-1">Supported Cities</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Pellentesque ac tortor
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Cras convallis varius eros, interdum pretium magna commodo. In
            commodo mi id. Lorem ipsum dolor sit amet consectetur adipiscing.
          </p>

          {[
            { icon: <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />, text: "Verified listings from trusted agencies" },
            { icon: <MapPin size={18} className="text-emerald-500 flex-shrink-0" />, text: "Location-based smart property search" },
            { icon: <Layers size={18} className="text-emerald-500 flex-shrink-0" />, text: "Compare multiple properties instantly" },
            { icon: <Award size={18} className="text-emerald-500 flex-shrink-0" />, text: "Award-winning customer support team" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 mb-4">
              {item.icon}
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}

          <div className="mt-8 flex gap-8 pt-6 border-t border-gray-200">
            <div>
              <p className="text-xl font-bold text-gray-800">+20M</p>
              <p className="text-xs text-gray-500">Open Works</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">+200K</p>
              <p className="text-xs text-gray-500">Registered Users</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">+50M</p>
              <p className="text-xs text-gray-500">Infrastructural</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      name: "Alicia Johnson",
      role: "Home Buyer",
      avatar: "AJ",
      text: "Nam duis eleifend dapibus nam rutrum, ullamcorper vitae. Adipiscing nec vulputate nec. Id dictum morbi parturient rhoncus ornare pellentesque. Adipiscing ullamcorper sit adipiscing in id. Pellentesque ullamcorper ullamcorper adipisicus.",
      rating: 5,
    },
    {
      name: "Marcus Lee",
      role: "Property Investor",
      avatar: "ML",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet.",
      rating: 5,
    },
    {
      name: "Sara Williams",
      role: "Real Estate Agent",
      avatar: "SW",
      text: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, justo diam iaculis tortor. Pellentesque ullamcorper ullamcorper.",
      rating: 4,
    },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));
  const r = reviews[current];

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          What our members said ?
        </h2>
        <p className="text-gray-400 text-sm mb-12">
          Testimonials from our most valuable clients
        </p>

        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5 border-4 border-emerald-200">
          <span className="text-emerald-700 font-bold text-lg">{r.avatar}</span>
        </div>

        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < r.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-200 fill-gray-200"
              }
            />
          ))}
        </div>

        <blockquote className="text-gray-600 text-sm leading-relaxed italic max-w-xl mx-auto mb-6">
          "{r.text}"
        </blockquote>

        <p className="font-semibold text-gray-800">{r.name}</p>
        <p className="text-xs text-gray-400 mb-8">{r.role}</p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={18} className="text-gray-500" />
          </button>

          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-emerald-500 w-5" : "bg-gray-300"
                  }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={18} className="text-gray-500" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl overflow-hidden grid md:grid-cols-2 bg-slate-800 min-h-48 relative">
          <div className="absolute top-4 left-4 w-4 h-4 bg-orange-400 rounded-full opacity-80" />
          <div className="absolute bottom-4 right-48 w-3 h-3 bg-emerald-400 rounded-full opacity-60" />

          <div className="p-10 flex flex-col justify-center text-white z-10">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
              Find your best <br />
              <span className="text-emerald-400">Real Estate</span>
            </h2>
            <p className="text-white/60 text-sm mb-6">
              We provide a complete service for the sale, purchase or rental of
              real estate.
            </p>
            <button className="self-start flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 transition-colors text-white text-sm font-semibold px-6 py-3 rounded-full">
              Contact Us
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative h-56 md:h-auto bg-gradient-to-br from-blue-900 to-slate-700 flex items-end justify-end overflow-hidden">
            <div className="absolute bottom-0 right-0 flex items-end gap-1 px-4">
              {[60, 90, 70, 110, 80].map((h, i) => (
                <div
                  key={i}
                  className="bg-blue-300/20 border-t border-blue-300/30"
                  style={{ width: 22, height: h }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-transparent md:from-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    {
      title: "Take a tour",
      links: ["Features", "Pricing", "Blog", "Finance", "Premium"],
    },
    {
      title: "Our Company",
      links: ["About Us", "Careers", "Blog", "Blogs", "Contact Us"],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="#1A9C6E" />
              <path d="M7 14L14 7L21 14V22H17V17H11V22H7V14Z" fill="white" />
            </svg>
            <span className="font-bold text-gray-800">
              logo<span className="text-emerald-500">ipsum</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mb-5">
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Share2, label: "Facebook" },
              { Icon: MessageCircle, label: "Twitter" },
              { Icon: Link, label: "Instagram" },
              { Icon: Play, label: "Youtube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-emerald-100 flex items-center justify-center transition-colors"
              >
                <Icon size={14} className="text-gray-600 hover:text-emerald-600" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-4">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-xs text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-4">
            Subscribe
          </h4>
          <p className="text-xs text-gray-400 mb-3">
            Get the latest news and updates.
          </p>
          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
            <div className="pl-3">
              <Mail size={13} className="text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 text-xs py-2 px-2 outline-none bg-transparent placeholder-gray-400"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 transition-colors text-white p-2 pr-3">
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4">
        <p className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Logoipsum. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function RealEstatePage() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Header />
      <AboutHero />
      <StatsBanner />
      <FeaturesSection />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}