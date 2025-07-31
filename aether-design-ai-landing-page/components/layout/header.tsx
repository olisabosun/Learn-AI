import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SignUpDialog } from "@/components/auth/sign-up-dialog" // Reusing from previous project

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
          <SparklesIcon className="h-6 w-6 text-cyan-600" />
          Aether Host AI
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-cyan-600" prefetch={false}>
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-cyan-600" prefetch={false}>
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-cyan-600" prefetch={false}>
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#">Sign In</Link>
          </Button>
          <SignUpDialog trigger={<Button size="sm">Sign Up</Button>} />
        </div>
      </div>
    </header>
  )
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.9375 1.25L12 6.25L14.0625 1.25L19.0625 3.3125L14.0625 8.3125L19.0625 13.3125L14.0625 15.375L12 20.375L9.9375 15.375L4.9375 13.3125L9.9375 8.3125L4.9375 3.3125L9.9375 1.25Z" />
      <path d="M12 12L12 12" />
      <path d="M12 12L12 12" />
      <path d="M12 12L12 12" />
    </svg>
  )
}
