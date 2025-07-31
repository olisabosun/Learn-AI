import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20", // Use the latest API version
})

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json()

    if (isNaN(amount) || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount provided." }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Tithe & Offering",
              description: "Support our church's mission",
            },
            unit_amount: amount, // amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/tithe?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/tithe?canceled=true`,
    })

    return NextResponse.json({ id: session.id })
  } catch (err: any) {
    console.error("Error creating checkout session:", err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
