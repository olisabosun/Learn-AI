"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useActionState } from "react" // Import useActionState
import { joinWaitlist } from "@/app/actions" // Import the server action

export function EmailCaptureSection() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, null)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Our Waitlist & Get 3 Months Free Pro Plan!
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            Be among the first to experience AI-powered web hosting. Limited spots available.
          </p>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form action={formAction} className="flex space-x-2">
              {" "}
              {/* Use formAction here */}
              <Input
                type="email"
                name="email" // Add name attribute for form data
                placeholder="Enter your email"
                className="max-w-lg flex-1 bg-white text-gray-900 placeholder:text-gray-500"
                required
                disabled={isPending} // Disable input while pending
              />
              <Button
                type="submit"
                className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700"
                disabled={isPending}
              >
                {isPending ? "Joining..." : "Join Waitlist"} {/* Update button text */}
              </Button>
            </form>
            {state?.message && ( // Display feedback message
              <p className={`text-sm ${state.success ? "text-green-200" : "text-red-200"}`}>{state.message}</p>
            )}
            <p className="text-xs text-gray-300">Sign up to receive updates and exclusive offers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
