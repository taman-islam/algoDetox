import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const socialMediaPlatforms = [
  { id: "instagram", name: "Instagram" },
  { id: "tiktok", name: "TikTok" },
  { id: "twitter", name: "Twitter (X)" },
  { id: "facebook", name: "Facebook" },
  { id: "youtube", name: "YouTube" },
  { id: "snapchat", name: "Snapchat" },
  { id: "linkedin", name: "LinkedIn" },
  { id: "pinterest", name: "Pinterest" },
  { id: "reddit", name: "Reddit" },
  { id: "whatsapp", name: "WhatsApp" },
  { id: "telegram", name: "Telegram" },
  { id: "discord", name: "Discord" },
  { id: "tumblr", name: "Tumblr" },
  { id: "twitch", name: "Twitch" },
  { id: "clubhouse", name: "Clubhouse" },
  { id: "bereal", name: "BeReal" },
  { id: "mastodon", name: "Mastodon" },
  { id: "threads", name: "Threads" },
  { id: "nextdoor", name: "Nextdoor" },
  { id: "quora", name: "Quora" },
]

interface SocialMediaSelectorProps {
  onSave: (selectedPlatforms: string[]) => void
}

export function SocialMediaSelector({ onSave }: SocialMediaSelectorProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const handleToggle = (platformId: string) => {
    setSelectedPlatforms((current) =>
      current.includes(platformId) ? current.filter((id) => id !== platformId) : [...current, platformId],
    )
  }

  const handleSave = () => {
    onSave(selectedPlatforms)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Your Social Media Platforms</CardTitle>
        <CardDescription>Choose the platforms you want to focus on for your detox</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {socialMediaPlatforms.map((platform) => (
            <div key={platform.id} className="flex items-center space-x-2">
              <Checkbox
                id={platform.id}
                checked={selectedPlatforms.includes(platform.id)}
                onCheckedChange={() => handleToggle(platform.id)}
              />
              <label
                htmlFor={platform.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {platform.name}
              </label>
            </div>
          ))}
        </div>
        <Button onClick={handleSave} className="mt-4 w-full">
          Save Selected Platforms
        </Button>
      </CardContent>
    </Card>
  )
}

