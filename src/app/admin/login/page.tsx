import { loginAction } from '../actions'

export const metadata = { title: 'Painel Admin | Relojoaria Monaco' }
export const dynamic = 'force-dynamic'

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>
}) {
  const { erro } = await searchParams

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: '#070706' }}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-2"
            style={{ color: '#B8943E' }}
          >
            Relojoaria Monaco
          </p>
          <h1 className="heading-display" style={{ fontSize: '1.75rem' }}>
            Painel Administrativo
          </h1>
        </div>

        <form
          action={loginAction}
          className="flex flex-col gap-4 p-6"
          style={{ border: '1px solid #2E2C28', backgroundColor: '#0D0C0A' }}
        >
          <div>
            <label
              className="block text-xs tracking-wider uppercase mb-2"
              style={{ color: '#8A8780' }}
            >
              Senha
            </label>
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="w-full px-4 py-3 text-sm"
              style={{
                backgroundColor: '#1E1C19',
                border: '1px solid #2E2C28',
                color: '#F0EDE5',
              }}
            />
          </div>

          {erro && (
            <p className="text-xs" style={{ color: '#C8574A' }}>
              Senha incorreta. Tente novamente.
            </p>
          )}

          <button type="submit" className="btn-primary w-full mt-2">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
