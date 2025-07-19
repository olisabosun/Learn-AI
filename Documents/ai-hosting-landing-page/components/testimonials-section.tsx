import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Trusted by indie hackers, startup founders, and creators worldwide.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  width="64"
                  height="64"
                  alt="Avatar"
                  className="rounded-full"
                />
                <div>
                  <CardTitle>Jane Doe</CardTitle>
                  <CardDescription>Indie Hacker</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                {"“AIHost made launching my side project incredibly easy. The AI setup saved me hours!”"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  width="64"
                  height="64"
                  alt="Avatar"
                  className="rounded-full"
                />
                <div>
                  <CardTitle>John Smith</CardTitle>
                  <CardDescription>Startup Founder</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                {"“The auto-scaling and performance optimization are game-changers. Highly recommend!”"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  width="64"
                  height="64"
                  alt="Avatar"
                  className="rounded-full"
                />
                <div>
                  <CardTitle>Sarah Lee</CardTitle>
                  <CardDescription>Creator</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                {"“Finally, a hosting solution that understands creators. The GPT-powered control panel is genius.”"}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
          <p>As featured on Product Hunt and Hacker News.</p>
        </div>
      </div>
    </section>
  )
}
