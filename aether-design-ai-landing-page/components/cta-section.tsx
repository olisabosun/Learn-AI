import { Button } from "@/components/ui/button"
import { SignUpDialog } from "@/components/auth/sign-up-dialog"

export function CallToActionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-cyan-600 text-white">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready to Launch Your AI-Powered Website?
        </h2>
        <p className="max-w-[800px] text-lg md:text-xl">
          Join Aether Host AI today and experience the simplest way to get your website online, fast and secure, with
          zero code.
        </p>
        <SignUpDialog
          trigger={
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              Get Started Free
            </Button>
          }
        />
      </div>
    </section>
  )
}
