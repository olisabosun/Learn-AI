import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm for demo
    })

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    // Create user profile in database
    const { error: profileError } = await supabaseAdmin.from("users").insert({
      id: authData.user.id,
      email: authData.user.email!,
      subscription_tier: "starter",
      subscription_status: "active",
    })

    if (profileError) {
      console.error("Profile creation error:", profileError)
      // Continue anyway - user is created in auth
    }

    return NextResponse.json({
      success: true,
      message: "Account created successfully!",
      user: authData.user,
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
