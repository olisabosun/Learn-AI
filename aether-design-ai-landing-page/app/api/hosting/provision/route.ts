import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const { userId, domain, plan } = await request.json()

    if (!userId || !domain || !plan) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create website record
    const { data: website, error: websiteError } = await supabaseAdmin
      .from("websites")
      .insert({
        user_id: userId,
        domain,
        status: "pending",
      })
      .select()
      .single()

    if (websiteError) {
      return NextResponse.json({ error: "Failed to create website record" }, { status: 500 })
    }

    // Simulate hosting provisioning
    setTimeout(async () => {
      await supabaseAdmin.from("websites").update({ status: "active" }).eq("id", website.id)
    }, 5000)

    return NextResponse.json({
      success: true,
      website,
      message: "Hosting provisioning started. Your site will be ready in a few minutes.",
    })
  } catch (error) {
    console.error("Provisioning error:", error)
    return NextResponse.json({ error: "Provisioning failed" }, { status: 500 })
  }
}
