"use server"

import { supabase } from "@/lib/supabase"
import { z } from "zod" // Import zod for validation

const emailSchema = z.string().email("Invalid email address").min(1, "Email is required")

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string

  try {
    // Validate email using zod
    emailSchema.parse(email)

    const { data, error } = await supabase
      .from("waitlist_emails")
      .insert([{ email: email }])
      .select()

    if (error) {
      if (error.code === "23505") {
        // Unique constraint violation
        return { success: false, message: "This email is already on the waitlist." }
      }
      console.error("Error inserting email:", error)
      return { success: false, message: "Failed to join waitlist. Please try again." }
    }

    console.log("Email added to waitlist:", data)
    return { success: true, message: "Successfully joined the waitlist! Check your inbox for details." }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message }
    }
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred." }
  }
}
