import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle2 } from "lucide-react"

const socialMediaUrges = [
  "Boredom",
  "FOMO (Fear of Missing Out)",
  "Procrastination",
  "Seeking validation",
  "Habit",
  "Loneliness",
  "Stress relief",
  "Curiosity",
]

const suggestions = {
  Boredom: ["Read a book for 10 minutes", "Do a quick workout", "Start a creative project"],
  FOMO: [
    "Write down three things you're grateful for",
    "Plan a real-life meetup with friends",
    "Engage in a hobby you've been neglecting",
  ],
  Procrastination: [
    "Break your task into smaller, manageable steps",
    "Set a timer for 25 minutes of focused work",
    "Change your environment to reduce distractions",
  ],
  "Seeking validation": [
    "Write down three of your recent accomplishments",
    "Compliment someone else instead",
    "Practice positive self-talk",
  ],
  Habit: [
    "Do a different habitual action (e.g., drink water)",
    "Practice mindfulness for 2 minutes",
    "Stretch or do quick exercises",
  ],
  Loneliness: [
    "Call or text a friend",
    "Join an online community discussion",
    "Write in a journal about your feelings",
  ],
  "Stress relief": ["Practice deep breathing for 1 minute", "Listen to calming music", "Take a short walk"],
  Curiosity: ["Read an educational article", "Listen to an informative podcast", "Learn a new skill for 10 minutes"],
}

interface UrgeInterventionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onComplete: (data: { urge: string; suggestion: string; helpful: boolean; note: string }) => void
}

export function UrgeInterventionModal({ open, onOpenChange, onComplete }: UrgeInterventionModalProps) {
  const [step, setStep] = useState(1)
  const [selectedUrge, setSelectedUrge] = useState<string | null>(null)
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null)
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null)
  const [note, setNote] = useState("")

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      onComplete({
        urge: selectedUrge!,
        suggestion: selectedSuggestion!,
        helpful: isHelpful!,
        note,
      })
      handleReset()
    }
  }

  const handleReset = () => {
    setStep(1)
    setSelectedUrge(null)
    setSelectedSuggestion(null)
    setIsHelpful(null)
    setNote("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Social Media Urge Intervention</DialogTitle>
        </DialogHeader>
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">What's triggering your urge to use social media?</h3>
            <RadioGroup value={selectedUrge || ""} onValueChange={setSelectedUrge}>
              <div className="grid grid-cols-2 gap-2">
                {socialMediaUrges.map((urge) => (
                  <div key={urge} className="flex items-center space-x-2">
                    <RadioGroupItem value={urge} id={urge} />
                    <Label htmlFor={urge}>{urge}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        )}
        {step === 2 && selectedUrge && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Try one of these alternatives:</h3>
            <RadioGroup value={selectedSuggestion || ""} onValueChange={setSelectedSuggestion}>
              <div className="space-y-2">
                {suggestions[selectedUrge as keyof typeof suggestions].map((suggestion) => (
                  <div key={suggestion} className="flex items-center space-x-2">
                    <RadioGroupItem value={suggestion} id={suggestion} />
                    <Label htmlFor={suggestion}>{suggestion}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Did it help reduce your urge?</h3>
            <RadioGroup
              value={isHelpful === null ? "" : isHelpful.toString()}
              onValueChange={(value) => setIsHelpful(value === "true")}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="helpful-yes" />
                  <Label htmlFor="helpful-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="helpful-no" />
                  <Label htmlFor="helpful-no">No</Label>
                </div>
              </div>
            </RadioGroup>
            <div className="space-y-2">
              <Label htmlFor="note">Any additional thoughts? (Optional)</Label>
              <Textarea
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="I realized I was just procrastinating..."
              />
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="space-y-4 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
            <h3 className="text-lg font-medium">Great job resisting the urge!</h3>
            <p>You're making progress in your social media detox. Keep it up!</p>
          </div>
        )}
        <DialogFooter>
          {step < 4 ? (
            <Button
              onClick={handleNext}
              disabled={
                (step === 1 && !selectedUrge) ||
                (step === 2 && !selectedSuggestion) ||
                (step === 3 && isHelpful === null)
              }
            >
              Next
            </Button>
          ) : (
            <Button onClick={handleReset}>Return to Dashboard</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

