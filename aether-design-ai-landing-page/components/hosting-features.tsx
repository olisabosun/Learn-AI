import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { SettingsIcon, LightbulbIcon, BellRingIcon, MessageSquareIcon } from "lucide-react"

export function HostingFeatures() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Intelligent Hosting, Simplified
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aether Host AI leverages cutting-edge artificial intelligence to make web hosting effortless and
              efficient.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-4 lg:gap-12">
          <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <SettingsIcon className="h-10 w-10 text-cyan-600 mb-4" />
              <CardTitle>AI Setup & Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our AI guides you through setup, optimizing your site for speed and performance from day one.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <LightbulbIcon className="h-10 w-10 text-cyan-600 mb-4" />
              <CardTitle>Smart Site Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get AI-driven recommendations for design, content, and SEO to enhance your website's impact.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <BellRingIcon className="h-10 w-10 text-cyan-600 mb-4" />
              <CardTitle>Proactive Performance Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our AI monitors your site 24/7, alerting you to potential issues before they impact your visitors.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <MessageSquareIcon className="h-10 w-10 text-cyan-600 mb-4" />
              <CardTitle>AI Customer Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get instant answers and solutions to common queries with our intelligent support assistant.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
