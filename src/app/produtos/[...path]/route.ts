import fs from 'fs'
import path from 'path'
import { NextRequest } from 'next/server'

// Serve as fotos enviadas pelo painel /admin a partir de uma pasta FORA de
// `public/` (uploads/produtos/), lendo do disco a cada request. Isso evita
// um comportamento do Next 16 em que arquivos estáticos de `public/` que
// ainda não existiam quando o servidor subiu ficam com 404 em cache até o
// próximo restart — inviável pra um painel que sobe fotos em tempo real.
export const dynamic = 'force-dynamic'

const UPLOADS_DIR = path.join(process.cwd(), 'uploads/produtos')

const CONTENT_TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
}

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> }
) {
  const { path: segments } = await ctx.params

  // Bloqueia qualquer tentativa de sair da pasta de uploads (ex: ../../.env)
  if (segments.some((s) => s.includes('..') || s.includes('/') || s.includes('\\'))) {
    return new Response('Not found', { status: 404 })
  }

  const filePath = path.join(UPLOADS_DIR, ...segments)
  if (!filePath.startsWith(UPLOADS_DIR) || !fs.existsSync(filePath)) {
    return new Response('Not found', { status: 404 })
  }

  const ext = path.extname(filePath).toLowerCase()
  const contentType = CONTENT_TYPES[ext] || 'application/octet-stream'
  const buffer = fs.readFileSync(filePath)

  return new Response(new Uint8Array(buffer), {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
