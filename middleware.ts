// middleware.ts
import { NextResponse, type NextRequest } from 'next/server'

export function middleware(_req: NextRequest) {
  // no logic — just let it pass
  return NextResponse.next()
}

export const config = {
  // อย่าจับ asset/_next รูปไฟล์ต่าง ๆ
  matcher: ['/((?!_next|api|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|txt)).*)'],
}