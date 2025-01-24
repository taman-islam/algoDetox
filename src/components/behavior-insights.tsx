import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BehaviorInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Behavior Insights</CardTitle>
        <CardDescription>Understanding your digital habits</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>Most active hours: 8 PM - 10 PM</li>
          <li>Top app: Instagram (2 hours daily average)</li>
          <li>Most common emotion: Stress relief</li>
          <li>Trigger: Work-related stress</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Tip: Try mindfulness exercises during your peak usage times to reduce stress without relying on social media.
        </p>
      </CardContent>
    </Card>
  )
}

