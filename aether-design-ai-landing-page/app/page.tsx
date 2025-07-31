import { Header } from "@/components/layout/header"
import { HeroHosting } from "@/components/hero-hosting"
import { HostingFeatures } from "@/components/hosting-features"
import { HostingHowItWorks } from "@/components/hosting-how-it-works"
import { HostingPricing } from "@/components/hosting-pricing"
import { CallToActionSection } from "@/components/cta-section"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <HeroHosting />
        <HostingFeatures />
        <HostingHowItWorks />
        <HostingPricing />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}
