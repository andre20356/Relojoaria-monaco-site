import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import crypto from 'crypto'

const COOKIE_NAME = 'monaco_admin_session'

// Token derivado da senha (não a senha em si) — se ADMIN_PASSWORD mudar no
// .env, sessões antigas param de bater automaticamente.
function expectedToken(): string {
  const secret = process.env.ADMIN_PASSWORD || ''
  return crypto.createHash('sha256').update(secret).digest('hex')
}

export async function createSession() {
  const store = await cookies()
  store.set(COOKIE_NAME, expectedToken(), {
    httpOnly: true,
    // NÃO usar `process.env.NODE_ENV === 'production'` aqui: `next start`
    // roda sempre em modo produção internamente, mesmo servindo em HTTP puro
    // (sem TLS, como este site em http://IP:3009). Cookie `Secure` nesse
    // cenário é descartado silenciosamente pelo navegador — a sessão nunca
    // "pegava" e todo clique em página protegida voltava pro login. Ligar
    // via env explícita própria (setar COOKIE_SECURE=1 no .env quando o
    // site estiver atrás de HTTPS de verdade).
    secure: process.env.COOKIE_SECURE === '1',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  })
}

export async function destroySession() {
  const store = await cookies()
  store.delete(COOKIE_NAME)
}

export async function isAuthenticated(): Promise<boolean> {
  if (!process.env.ADMIN_PASSWORD) return false
  const store = await cookies()
  const value = store.get(COOKIE_NAME)?.value
  return !!value && value === expectedToken()
}

export function checkPassword(password: string): boolean {
  return !!process.env.ADMIN_PASSWORD && password === process.env.ADMIN_PASSWORD
}

export async function requireAdmin() {
  const ok = await isAuthenticated()
  if (!ok) redirect('/admin/login')
}
