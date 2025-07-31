"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2Icon, CheckCircle2Icon, XCircleIcon } from "lucide-react"

export function WebsiteAnalysisForm() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) {
      setStatus("error")
      setMessage("Please enter a valid URL.")
      return
    }

    setIsLoading(true)
    setStatus("loading")
    setMessage("Analyzing your website with AI...")

    try {
      const response = await fetch("/api/websites/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(
          `Analysis complete! Your site scored ${data.data.score}/100. We found ${data.data.suggestions.length} improvement opportunities.`,
        )
        setUrl("")
      } else {
        setStatus("error")
        setMessage(data.error || "Analysis failed. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="analyze" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See Your Website Transformed</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Enter your current website URL below, and our AI will provide a preliminary analysis and show you the
            potential for a stunning redesign.
          </p>
        </div>
        <Card className="w-full max-w-md p-6 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle>Analyze Your Website</CardTitle>
            <CardDescription>Enter your website URL to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="website-url">Website URL</Label>
                <Input
                  id="website-url"
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value)
                    setStatus("idle") // Reset status on input change
                  }}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Now"
                )}
              </Button>
            </form>
          </CardContent>
          {status !== "idle" && message && (
            <CardFooter className="flex flex-col items-center pt-4">
              {status === "success" && <CheckCircle2Icon className="h-8 w-8 text-green-500 mb-2" />}
              {status === "error" && <XCircleIcon className="h-8 w-8 text-red-500 mb-2" />}
              <p
                className={`text-sm ${status === "success" ? "text-green-600" : status === "error" ? "text-red-600" : "text-gray-500"}`}
              >
                {message}
              </p>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  )
}
