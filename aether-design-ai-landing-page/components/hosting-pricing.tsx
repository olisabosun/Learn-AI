import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"
import { SignUpDialog } from "@/components/auth/sign-up-dialog"

export function HostingPricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Flexible Hosting, Smart Pricing
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your website, with transparent pricing and powerful AI features.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Starter</CardTitle>
              <CardDescription className="text-gray-500">Ideal for personal sites & small projects.</CardDescription>
              <div className="mt-4 text-4xl font-bold">
                $10<span className="text-base font-normal text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> 1 Website
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> 5GB Storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> AI Setup Assistant
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Free SSL Certificate
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Basic Analytics
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <SignUpDialog trigger={<Button className="w-full">Get Started</Button>} />
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between border-2 border-cyan-600 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Pro</CardTitle>
              <CardDescription className="text-gray-500">Best for growing businesses & portfolios.</CardDescription>
              <div className="mt-4 text-4xl font-bold">
                $25<span className="text-base font-normal text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> 5 Websites
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> 25GB Storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> All Starter Features
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> AI Site Suggestions
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Proactive Performance Alerts
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Priority Support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <SignUpDialog trigger={<Button className="w-full bg-cyan-600 hover:bg-cyan-700">Choose Pro</Button>} />
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Business</CardTitle>
              <CardDescription className="text-gray-500">For high-traffic sites & enterprises.</CardDescription>
              <div className="mt-4 text-4xl font-bold">Custom</div>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Unlimited Websites
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Unlimited Storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> All Pro Features
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Dedicated Account Manager
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Advanced Security Suite
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> 24/7 Premium Support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <Link href="#contact">Contact Sales</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold mb-4">Domain Management & Upsells</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Easily register and manage your domains directly within Aether Host AI. We offer competitive pricing for new
            domain registrations, premium DNS services, and integrated email hosting solutions to complete your online
            presence.
          </p>
          <Button variant="link" className="mt-4" asChild>
            <Link href="#">Learn More About Domains</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
