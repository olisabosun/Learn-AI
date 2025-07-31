import { type NextRequest, NextResponse } from "next/server"

// Mock domain availability check - replace with real domain API
export async function POST(request: NextRequest) {
  try {
    const { domain } = await request.json()

    if (!domain) {
      return NextResponse.json({ error: "Domain is required" }, { status: 400 })
    }

    // Simulate domain availability check
    const isAvailable = Math.random() > 0.3 // 70% chance available
    const price = Math.floor(Math.random() * 20) + 10 // $10-30

    const suggestions = [
      `${domain}.net`,
      `${domain}.org`,
      `${domain}.io`,
      `get${domain}.com`,
      `${domain}app.com`,
    ].slice(0, 3)

    return NextResponse.json({
      domain: `${domain}.com`,
      available: isAvailable,
      price: isAvailable ? price : null,
      suggestions: isAvailable
        ? []
        : suggestions.map((s) => ({
            domain: s,
            available: true,
            price: Math.floor(Math.random() * 15) + 12,
          })),
    })
  } catch (error) {
    console.error("Domain search error:", error)
    return NextResponse.json({ error: "Domain search failed" }, { status: 500 })
  }
}
