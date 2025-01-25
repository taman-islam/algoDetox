import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DailyLogProps {
  platforms: string[]
  onLogEntry: (platform: string, duration: number, impact: string, feeling: string) => void
}

export function DailyLog({ platforms, onLogEntry }: DailyLogProps) {
  const [platform, setPlatform] = useState("")
  const [duration, setDuration] = useState("")
  const [impact, setImpact] = useState<"positive" | "neutral" | "negative">("neutral")
  const [feeling, setFeeling] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (platform && duration) {
      onLogEntry(platform, Number.parseInt(duration), impact, feeling)
      setPlatform("")
      setDuration("")
      setImpact("neutral")
      setFeeling("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Social Media Log</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="platform">Social Media Platform</Label>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger id="platform">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                {platforms.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="duration">Time Spent (minutes)</Label>
            <Input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Enter time in minutes"
            />
          </div>
          <div>
            <Label>Impact on Your Day</Label>
            <RadioGroup value={impact} onValueChange={(value: "positive" | "neutral" | "negative") => setImpact(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="positive" id="positive" />
                <Label htmlFor="positive">Positive</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="neutral" id="neutral" />
                <Label htmlFor="neutral">Neutral</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="negative" id="negative" />
                <Label htmlFor="negative">Negative</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="feeling">How did you feel after using it?</Label>
            <Input
              id="feeling"
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
              placeholder="Describe your feelings"
            />
          </div>
          <Button type="submit">Log Usage</Button>
        </form>
      </CardContent>
    </Card>
  )
}

