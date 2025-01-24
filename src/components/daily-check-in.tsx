"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export function DailyCheckIn() {
  const [mood, setMood] = useState("")
  const [reflection, setReflection] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ mood, reflection })
    // Reset form
    setMood("")
    setReflection("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Check-In</CardTitle>
        <CardDescription>Reflect on your digital habits today</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>How do you feel about your digital usage today?</Label>
            <RadioGroup value={mood} onValueChange={setMood}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="great" id="great" />
                <Label htmlFor="great">Great</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="good" id="good" />
                <Label htmlFor="good">Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="neutral" id="neutral" />
                <Label htmlFor="neutral">Neutral</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bad" id="bad" />
                <Label htmlFor="bad">Bad</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="terrible" id="terrible" />
                <Label htmlFor="terrible">Terrible</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reflection">Reflect on your digital habits today:</Label>
            <Textarea
              id="reflection"
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="What went well? What could be improved?"
            />
          </div>
          <Button type="submit">Submit Check-In</Button>
        </form>
      </CardContent>
    </Card>
  )
}

