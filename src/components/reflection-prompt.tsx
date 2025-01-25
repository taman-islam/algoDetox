import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface ReflectionPromptProps {
  onSaveReflection: (reflection: string) => void
}

export function ReflectionPrompt({ onSaveReflection }: ReflectionPromptProps) {
  const [reflection, setReflection] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (reflection) {
      onSaveReflection(reflection)
      setReflection("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Reflection</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Reflect on your detox journey today. How did you feel? Any struggles or small wins?"
            rows={4}
          />
          <Button type="submit">Save Reflection</Button>
        </form>
      </CardContent>
    </Card>
  )
}

