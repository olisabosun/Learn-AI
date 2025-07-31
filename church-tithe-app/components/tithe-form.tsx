"use client"

import type React from "react"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export function TitheForm() {
  const [amount, setAmount] = useState("")
  const [frequency, setFrequency] = useState("one-time")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!amount || Number.parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount for your tithe.",
        variant: "destructive",
      })
      return
    }

    if (frequency !== "one-time") {
      toast({
        title: "Feature Coming Soon",
        description: "Weekly and Monthly payments are not yet supported in this demo.",
        variant: "default",
      })
      return
    }

    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: Number.parseFloat(amount) * 100 }), // Convert to cents
      })

      const session = await response.json()

      if (session.error) {
        toast({
          title: "Payment Error",
          description: session.error,
          variant: "destructive",
        })
        return
      }

      const stripe = await stripePromise
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        })

        if (error) {
          console.error("Stripe checkout error:", error)
          toast({
            title: "Checkout Failed",
            description: error.message || "Could not redirect to Stripe checkout.",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      console.error("Error initiating checkout:", error)
      toast({
        title: "Network Error",
        description: "Could not connect to payment service. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-2">
        <Label htmlFor="amount">Amount (USD)</Label>
        <Input
          id="amount"
          type="number"
          placeholder="100.00"
          step="0.01"
          min="0.01"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label>Payment Frequency</Label>
        <RadioGroup
          defaultValue="one-time"
          className="grid grid-cols-3 gap-4"
          onValueChange={setFrequency}
          value={frequency}
        >
          <div>
            <RadioGroupItem value="one-time" id="one-time" className="peer sr-only" />
            <Label
              htmlFor="one-time"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              One-time
            </Label>
          </div>
          <div>
            <RadioGroupItem value="weekly" id="weekly" className="peer sr-only" />
            <Label
              htmlFor="weekly"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Weekly
            </Label>
          </div>
          <div>
            <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
            <Label
              htmlFor="monthly"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Monthly
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button type="submit" className="w-full">
        Proceed to Payment
      </Button>
    </form>
  )
}
