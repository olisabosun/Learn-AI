import { UploadIcon, BrainIcon, RocketIcon } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your New Website in 3 Simple Steps
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the future of web design with our streamlined, AI-powered process.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <UploadIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">1. Upload Your URL</h3>
            <p className="text-gray-500">
              Simply provide your current website address. Our AI will instantly begin analyzing its content and
              structure.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <BrainIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">2. AI Designs Your Site</h3>
            <p className="text-gray-500">
              Our intelligent system generates a brand-new, modern design concept, optimizing for aesthetics and user
              experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <RocketIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">3. Launch & Host</h3>
            <p className="text-gray-500">
              Review your new design, make any final tweaks, and launch your stunning, AI-powered website with
              integrated hosting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
