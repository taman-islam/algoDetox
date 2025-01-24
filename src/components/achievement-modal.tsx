"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AchievementModalProps {
  onAchievementAdded: (type: string, value: string) => void
}

export function AchievementModal({ onAchievementAdded }: AchievementModalProps) {
  const [open, setOpen] = useState(false)
  const [achievementType, setAchievementType] = useState("")
  const [achievementValue, setAchievementValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAchievementAdded(achievementType, achievementValue)
    setOpen(false)
    setAchievementType("")
    setAchievementValue("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Achievement</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Achievement</DialogTitle>
          <DialogDescription>Record your digital detox milestones here.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="achievement-type" className="text-right">
                Type
              </Label>
              <Select value={achievementType} onValueChange={setAchievementType}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select achievement type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="app-deleted">App Deleted</SelectItem>
                  <SelectItem value="website-blocked">Website Blocked</SelectItem>
                  <SelectItem value="account-deleted">Account Deleted</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="achievement-value" className="text-right">
                Value
              </Label>
              <Input
                id="achievement-value"
                value={achievementValue}
                onChange={(e) => setAchievementValue(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Achievement</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

