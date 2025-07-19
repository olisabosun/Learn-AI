import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The Smartest Way to Host Your Web App
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl">
                AI-optimized, blazing fast, and zero-setup web hosting for creators & developers.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700">
                Start Hosting Free
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                Try Demo in 60s
              </Button>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            width="600"
            height="400"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}
