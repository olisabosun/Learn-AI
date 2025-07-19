import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about AIHost.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How is this different from Vercel/Netlify?</AccordionTrigger>
              <AccordionContent>
                AIHost focuses on zero-config, AI-powered automation for setup, optimization, and management, making it
                even simpler for solo founders and creators. While Vercel/Netlify are excellent platforms, we aim to
                abstract away more technical complexities with intelligent AI tools.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need to know coding?</AccordionTrigger>
              <AccordionContent>
                While basic coding knowledge helps for building your web app, AIHost's AI-assisted setup and GPT-powered
                control panel significantly reduce the need for deep technical expertise in hosting and infrastructure
                management.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What’s the AI doing under the hood?</AccordionTrigger>
              <AccordionContent>
                Our AI handles framework detection, DNS configuration, SSL setup, traffic routing, performance
                optimization, and provides natural language interaction for managing your projects. It learns and adapts
                to ensure your app runs efficiently without manual intervention.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
