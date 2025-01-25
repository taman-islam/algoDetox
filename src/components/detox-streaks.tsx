import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

interface SocialMediaStreak {
  platform: string
  days: number
}

interface DetoxStreaksProps {
  streaks: SocialMediaStreak[]
  onSlipEntry: (platform: string) => void
}

export function DetoxStreaks({ streaks, onSlipEntry }: DetoxStreaksProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media Detox Streaks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {streaks.map((streak) => (
            <div key={streak.platform} className="flex items-center justify-between">
              <div className="flex-1 mr-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{streak.platform}</span>
                  <span className="text-sm font-medium">{streak.days} days</span>
                </div>
                <Progress value={(streak.days / 30) * 100} className="h-2" />
              </div>
              <Button variant="outline" size="sm" onClick={() => onSlipEntry(streak.platform)}>
                Log Slip
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/all-streaks">
            <Button variant="link" className="w-full">
              View All Streaks
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

