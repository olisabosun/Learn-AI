import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { LayoutDashboardIcon, GlobeIcon, DollarSignIcon } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Unleash the Power of AI for Your Website
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aether Design AI offers a suite of features designed to elevate your online presence effortlessly.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <LayoutDashboardIcon className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>AI-Powered Remodeling</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our intelligent algorithms analyze your existing site and generate a stunning, modern redesign tailored
                to your brand.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <GlobeIcon className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Seamless Hosting Included</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Every new design comes with integrated, high-performance hosting, ensuring your site is fast, secure,
                and always online.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <DollarSignIcon className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Affordable & Transparent Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get premium web design and hosting without the premium price tag. Our subscription models are designed
                for every budget.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
