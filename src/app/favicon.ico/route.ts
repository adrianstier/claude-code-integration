import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  // Serve the SVG icon as favicon
  const iconPath = join(process.cwd(), 'public', 'icon.svg')
  const iconContent = readFileSync(iconPath)

  return new NextResponse(iconContent, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
