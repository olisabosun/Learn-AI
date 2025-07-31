import { MousePointerClickIcon, ZapIcon, TrendingUpIcon } from "lucide-react"

export function HostingHowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Launch Your Site in 3 Easy Steps
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From idea to live website, Aether Host AI makes it incredibly simple.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
              <MousePointerClickIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">1. Choose Your Plan</h3>
            <p className="text-gray-500">Select a hosting tier that fits your needs, from basic to business-grade.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
              <ZapIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">2. AI Guides Setup</h3>
            <p className="text-gray-500">
              Our AI wizard helps you configure your site, connect domains, and optimize settings with zero code.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
              <TrendingUpIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">3. Launch & Grow</h3>
            <p className="text-gray-500">
              Go live instantly and leverage AI insights to continuously improve your online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
