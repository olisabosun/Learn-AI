import type React from "react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-gray-600">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2 text-sm">
          <SparklesIcon className="h-5 w-5 text-cyan-600" />
          <span>© 2025 Aether Host AI. All rights reserved.</span>
        </div>
        <nav className="flex gap-4 text-sm">
          <Link href="#" className="hover:text-cyan-600" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-cyan-600" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-cyan-600" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
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
