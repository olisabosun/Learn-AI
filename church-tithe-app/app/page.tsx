import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to Our Church
        </h1>
        <p className="mt-3 text-xl text-gray-600">
          "Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith,
          saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there
          shall not be room enough to receive it."
          <br />
          <span className="font-semibold text-gray-700">— Malachi 3:10</span>
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/tithe">Give Tithes & Offerings</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
          >
            <Link href="/signup">Sign Up / Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
