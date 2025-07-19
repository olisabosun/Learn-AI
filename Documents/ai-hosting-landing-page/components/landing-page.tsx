import { HeroSection } from "./hero-section"
import { FeaturesSection } from "./features-section"
import { TestimonialsSection } from "./testimonials-section"
import { PricingSection } from "./pricing-section"
import { FAQSection } from "./faq-section"
import { EmailCaptureSection } from "./email-capture-section"
import { ModeToggle } from "./mode-toggle" // Add this import

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="fixed top-4 right-4 z-50">
        {" "}
        {/* Add this header */}
        <ModeToggle />
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <EmailCaptureSection />
      </main>
      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>{"© 2024 AIHost. All rights reserved."}</p>
      </footer>
    </div>
  )
}
