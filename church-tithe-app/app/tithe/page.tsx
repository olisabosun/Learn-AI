import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TitheForm } from "@/components/tithe-form"

export default function TithePage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Give Your Tithes & Offerings</CardTitle>
          <CardDescription>
            "Every man shall give as he is able, according to the blessing of the LORD thy God which he hath given
            thee."
            <br />
            <span className="font-semibold text-gray-700">— Deuteronomy 16:17</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TitheForm />
        </CardContent>
      </Card>
    </div>
  )
}
