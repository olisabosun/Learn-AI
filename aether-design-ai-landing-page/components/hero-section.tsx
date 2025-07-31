import { Button } from "@/components/ui/button"
import { DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Transform Your Online Presence with AI
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl mx-auto lg:mx-0">
              Aether Design AI leverages cutting-edge artificial intelligence to remodel your website, provide seamless
              hosting, and deliver stunning designs at an unbeatable price.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
            <DialogTrigger asChild>
              <Button size="lg">Get Started</Button>
            </DialogTrigger>
            <Button variant="outline" size="lg" asChild>
              <a href="#analyze">Analyze My Website</a>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] w-full lg:h-[400px] xl:h-[500px] flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=500&width=600"
            width={600}
            height={500}
            alt="AI Web Design"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent rounded-xl" />
        </div>
      </div>
    </section>
  )
}
