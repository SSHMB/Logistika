import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs/promises'
import path from 'path'
import { Buffer } from 'buffer'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbFile = path.resolve(__dirname, 'db.json')

const readJsonFile = async () => {
  const raw = await fs.readFile(dbFile, 'utf-8')
  return JSON.parse(raw)
}

const writeJsonFile = async (data) => {
  await fs.writeFile(dbFile, JSON.stringify(data, null, 2) + '\n', 'utf-8')
}

const parseJsonBody = async (req) => {
  const chunks = []
  for await (const chunk of req) {
    chunks.push(chunk)
  }

  const body = Buffer.concat(chunks).toString('utf-8').trim()
  return body ? JSON.parse(body) : null
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'db-json-api',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (!req.url?.startsWith('/api/')) {
            return next()
          }

          res.setHeader('Content-Type', 'application/json')

          try {
            if (req.method === 'GET' && req.url === '/api/users') {
              const db = await readJsonFile()
              res.end(JSON.stringify(db.users || []))
              return
            }

            if (req.method === 'GET' && req.url === '/api/properties') {
              const db = await readJsonFile()
              res.end(JSON.stringify(db.properties || []))
              return
            }

            if (req.method === 'POST' && req.url === '/api/users') {
              const body = await parseJsonBody(req)
              const name = body?.name?.trim()
              const email = body?.email?.trim()
              const password = body?.password
              const role = body?.role || 'user'

              if (!name || !email || !password) {
                res.statusCode = 400
                res.end(JSON.stringify({ message: 'Name, email and password are required.' }))
                return
              }

              const db = await readJsonFile()
              const users = db.users || []
              const exists = users.some((item) => item.email.toLowerCase() === email.toLowerCase())

              if (exists) {
                res.statusCode = 400
                res.end(JSON.stringify({ message: "Bu email allaqachon ro'yxatdan o'tgan." }))
                return
              }

              const newUser = {
                id: Date.now(),
                name,
                email,
                password,
                role,
              }

              db.users = [...users, newUser]
              await writeJsonFile(db)
              res.statusCode = 201
              res.end(JSON.stringify(newUser))
              return
            }

            res.statusCode = 404
            res.end(JSON.stringify({ message: 'API route not found.' }))
          } catch (error) {
            res.statusCode = 500
            res.end(JSON.stringify({ message: error?.message || 'Internal server error.' }))
          }
        })
      },
    },
  ],
})
