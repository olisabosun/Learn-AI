"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useActionState } from "react"
import { joinWaitlist } from "@/app/actions"

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
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1 bg-white text-gray-900 placeholder:text-gray-500"
                required
                disabled={isPending}
              />
              <Button
                type="submit"
                className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700"
                disabled={isPending}
              >
                {isPending ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
            {state?.message && (
              <p className={`text-sm ${state.success ? "text-green-200" : "text-red-200"}`}>{state.message}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
