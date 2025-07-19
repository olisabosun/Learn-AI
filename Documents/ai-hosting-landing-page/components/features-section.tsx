import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitPullRequestArrow, Brain, Globe, TrendingUp, Bot } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experience the next generation of web hosting, powered by AI and designed for simplicity.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col items-center p-6 text-center">
            <CardHeader>
              <GitPullRequestArrow className="h-10 w-10 text-purple-600" />
              <CardTitle className="mt-4">One-click Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Integrate seamlessly with GitHub, Vercel, and Render for instant deployments.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center">
            <CardHeader>
              <Brain className="h-10 w-10 text-purple-600" />
              <CardTitle className="mt-4">AI-assisted Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Automatic framework detection, DNS configuration, and SSL certificate setup.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center">
            <CardHeader>
              <Globe className="h-10 w-10 text-purple-600" />
              <CardTitle className="mt-4">Free Branded Subdomain</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Get a free subdomain like {"yourapp.aidomains.io"} to launch instantly.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-purple-600" />
              <CardTitle className="mt-4">AI-based Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Intelligent traffic management and performance optimization for blazing speed.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 text-center">
            <CardHeader>
              <Bot className="h-10 w-10 text-purple-600" />
              <CardTitle className="mt-4">GPT-powered Control Panel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Manage your hosting with natural language, no tech jargon required.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
