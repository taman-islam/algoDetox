"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface QuickAddEntryProps {
  onClose: () => void
}

export function QuickAddEntry({ onClose }: QuickAddEntryProps) {
  const [app, setApp] = useState("")
  const [duration, setDuration] = useState("")
  const [feeling, setFeeling] = useState("")
  const [note, setNote] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ app, duration, feeling, note })
    // Close the quick add entry form
    onClose()
  }

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Quick Add Entry</CardTitle>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="app">App/Website Used</Label>
            <Input
              id="app"
              value={app}
              onChange={(e) => setApp(e.target.value)}
              placeholder="e.g., Instagram, YouTube"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration">Duration (in minutes)</Label>
            <Input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g., 30"
            />
          </div>
          <div className="space-y-2">
            <Label>How did you feel about this usage?</Label>
            <RadioGroup value={feeling} onValueChange={setFeeling}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="necessary" id="necessary" />
                <Label htmlFor="necessary">Necessary</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="good" id="good" />
                <Label htmlFor="good">Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bad" id="bad" />
                <Label htmlFor="bad">Bad</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="note">Optional Note</Label>
            <Textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Any reflections on this usage?"
            />
          </div>
          <Button type="submit">Add Entry</Button>
        </form>
      </CardContent>
    </Card>
  )
}

