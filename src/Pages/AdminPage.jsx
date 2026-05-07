import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthProvider.jsx'
import Header from '../components/Header'

const AdminPage = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const [userForm, setUserForm] = useState({ name: '', email: '', password: '', role: 'user' })
  const [feedback, setFeedback] = useState('')

  const stats = useMemo(
    () => [
      { label: 'Total Users', value: auth.users.length },
      { label: 'Active Properties', value: auth.properties.length },
      { label: 'User Role', value: auth.user?.role || 'guest' },
    ],
    [auth.users.length, auth.properties.length, auth.user],
  )

  const handleChange = (field) => (event) => {
  const auth = useAuth()
  const navigate = useNavigate()
  const [userForm, setUserForm] = useState({ name: '', email: '', password: '', role: 'user' })
  const [feedback, setFeedback] = useState('')

  const stats = useMemo(
    () => [
      { label: 'Total Users', value: auth.users.length },
      { label: 'Active Properties', value: auth.properties.length },
      { label: 'User Role', value: auth.user?.role || 'guest' },
    ],
    [auth.users.length, auth.properties.length, auth.user],
  )

  const handleChange = (field) => (event) => {
    const value = event.target.value
    setUserForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleCreateUser = async (event) => {
    event.preventDefault()
    setFeedback('')

    if (!userForm.name.trim() || !userForm.email.trim() || !userForm.password) {
      setFeedback('Iltimos, barcha maydonlarni to‘ldiring.')
      return
    }

    try {
      await auth.api.createUser({
        name: userForm.name.trim(),
        email: userForm.email.trim(),
        password: userForm.password,
        role: userForm.role,
      })

      setFeedback('Yangi foydalanuvchi muvaffaqiyatli yaratildi.')
      setUserForm({ name: '', email: '', password: '', role: 'user' })
    } catch (error) {
      setFeedback(error.message || 'Foydalanuvchi yaratishda xatolik yuz berdi.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <header className="mb-10 flex flex-col gap-6 rounded-[2rem] bg-gradient-to-r from-sky-600 via-cyan-600 to-slate-900 p-8 text-white shadow-2xl shadow-slate-400/20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-200/90">Admin Dashboard</p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Welcome back, {auth.user?.name || 'Admin'}.</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-100/90">
              Monitor property listings, review account activity, and manage your real estate dashboard with ease.
            </p>
          </div>
          <button
            onClick={() => {
              auth.logout()
              navigate('/')
            }}
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Sign out
          </button>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/70">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>

        <main className="mt-10 grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
          <section className="space-y-6">
            <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/70">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Latest properties</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">Recent listings</h2>
                </div>
                <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Add new
                </button>
              </div>

              <div className="mt-8 space-y-4">
                {auth.properties.map((property) => (
                  <div key={property.id} className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{property.title}</p>
                        <p className="mt-2 text-sm text-slate-500">{property.location}</p>
                      </div>
                      <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                        {property.status}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-4 text-sm text-slate-600">
                      <p>{property.price}</p>
                      <button className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 transition hover:bg-slate-100">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/70">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Create new user</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">Post user to database</h2>
                </div>
              </div>

              <form onSubmit={handleCreateUser} className="mt-8 space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Name</label>
                  <input
                    value={userForm.name}
                    onChange={handleChange('name')}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    placeholder="User name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Email</label>
                  <input
                    type="email"
                    value={userForm.email}
                    onChange={handleChange('email')}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    placeholder="user@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Password</label>
                  <input
                    type="password"
                    value={userForm.password}
                    onChange={handleChange('password')}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    placeholder="Password"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Role</label>
                  <select
                    value={userForm.role}
                    onChange={handleChange('role')}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                {feedback && (
                  <p className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700">{feedback}</p>
                )}

                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Create user
                </button>
              </form>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/70">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Registered users</p>
              <div className="mt-6 space-y-3">
                {auth.users.map((item) => (
                  <div key={item.id} className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-5 text-sm">
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-slate-500">{item.email}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/70">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Your account</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Name</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{auth.user?.name}</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{auth.user?.email}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/70">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Quick actions</p>
              <div className="mt-5 grid gap-4">
                <button className="rounded-[1.5rem] bg-slate-900 px-5 py-4 text-left text-sm font-semibold text-white transition hover:bg-slate-800">
                  Review new messages
                </button>
                <button className="rounded-[1.5rem] border border-slate-200 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                  Manage listings
                </button>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}

export default AdminPage
