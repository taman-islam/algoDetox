"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Brain } from "lucide-react"

export default function Onboarding() {
  const [selectedIssues, setSelectedIssues] = useState<string[]>([])
  const [error, setError] = useState("")
  const router = useRouter()

  const mentalHealthIssues = [
    "Always thinking about sex",
    "Fatigued",
    "Depression",
    "Anxiety",
    "Difficulty concentrating",
    "Insomnia",
    "Low self-esteem",
    "Mood swings",
    "Stress",
    "Social isolation",
  ]

  const handleIssueToggle = (issue: string) => {
    setSelectedIssues((prev) => (prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (selectedIssues.length === 0) {
      setError("Please select at least one issue.")
      return
    }

    // Here you would typically call your API to save the user's selected issues
    // For demonstration, we'll just simulate a successful save
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to dashboard after successful onboarding
      router.push("/dashboard")
    } catch (err) {
      setError("An error occurred. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Brain className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to algoDetox</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Let's personalize your experience. Select the mental health issues you're experiencing:
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {mentalHealthIssues.map((issue) => (
                <div key={issue} className="flex items-center">
                  <Checkbox
                    id={issue}
                    checked={selectedIssues.includes(issue)}
                    onCheckedChange={() => handleIssueToggle(issue)}
                  />
                  <Label htmlFor={issue} className="ml-2 text-sm text-gray-900">
                    {issue}
                  </Label>
                </div>
              ))}
            </div>

            <div>
              <Button type="submit" className="w-full">
                Continue
              </Button>
            </div>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}

