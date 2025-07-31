import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"
import { SignUpDialog } from "@/components/auth/sign-up-dialog"

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that best fits your needs. No hidden fees, just powerful AI web design.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Starter</CardTitle>
              <CardDescription className="text-gray-500">Perfect for individuals & small projects.</CardDescription>
              <div className="mt-4 text-4xl font-bold">
                $29<span className="text-base font-normal text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> AI Redesign
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Standard Hosting
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Custom Domain Support
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Basic Analytics
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <SignUpDialog trigger={<Button className="w-full">Choose Starter</Button>} />
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between border-2 border-purple-600 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Pro</CardTitle>
              <CardDescription className="text-gray-500">Ideal for growing businesses.</CardDescription>
              <div className="mt-4 text-4xl font-bold">
                $79<span className="text-base font-normal text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> All Starter Features
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Premium Template Library
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Advanced AI Customization
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Priority Support
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> SEO Optimization Tools
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <SignUpDialog
                trigger={<Button className="w-full bg-purple-600 hover:bg-purple-700">Choose Pro</Button>}
              />
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Business</CardTitle>
              <CardDescription className="text-gray-500">For large-scale needs & enterprises.</CardDescription>
              <div className="mt-4 text-4xl font-bold">Custom</div>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> All Pro Features
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Dedicated Account Manager
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Advanced Integrations
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> Performance Guarantees
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" /> White-Label Options
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
      </div>
    </section>
  )
}
