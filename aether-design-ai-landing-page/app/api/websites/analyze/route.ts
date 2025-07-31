import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    // Validate URL format
    try {
      new URL(url)
    } catch {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 })
    }

    // Fetch website content
    let websiteContent = ""
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "Aether-Host-AI-Bot/1.0",
        },
        timeout: 10000,
      })

      if (response.ok) {
        websiteContent = await response.text()
        // Limit content size for AI processing
        websiteContent = websiteContent.slice(0, 8000)
      }
    } catch (fetchError) {
      console.error("Website fetch error:", fetchError)
      websiteContent = "Unable to fetch website content"
    }

    // AI Analysis using OpenAI
    const { text: analysis } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `Analyze this website and provide recommendations for improvement:

URL: ${url}
Content: ${websiteContent}

Please provide:
1. Overall assessment of the current design
2. Performance recommendations
3. SEO improvement suggestions
4. User experience enhancements
5. Modern design trends that could be applied

Keep the analysis concise and actionable.`,
      maxTokens: 1000,
    })

    // Generate improvement suggestions
    const { text: suggestions } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `Based on this website analysis, provide 3-5 specific, actionable improvement suggestions:

${analysis}

Format as a JSON array of objects with 'title' and 'description' fields.`,
      maxTokens: 500,
    })

    let parsedSuggestions = []
    try {
      parsedSuggestions = JSON.parse(suggestions)
    } catch {
      parsedSuggestions = [
        {
          title: "Modern Design Update",
          description: "Implement a clean, modern design with better typography and spacing",
        },
        {
          title: "Performance Optimization",
          description: "Optimize images and implement caching for faster load times",
        },
        {
          title: "Mobile Responsiveness",
          description: "Ensure the website works perfectly on all device sizes",
        },
      ]
    }

    const analysisResult = {
      url,
      analysis,
      suggestions: parsedSuggestions,
      score: Math.floor(Math.random() * 30) + 60, // Demo score 60-90
      analyzedAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      data: analysisResult,
    })
  } catch (error) {
    console.error("Analysis error:", error)
    return NextResponse.json({ error: "Analysis failed. Please try again." }, { status: 500 })
  }
}
