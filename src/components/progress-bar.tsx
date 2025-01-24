import { Progress } from "@/components/ui/progress"

interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.min(Math.round((current / total) * 100), 100)

  return (
    <div className="w-full">
      <Progress value={percentage} className="w-full" />
      <div className="mt-2 text-sm text-gray-600 flex justify-between">
        <span>Day {current}</span>
        <span>{percentage}% Complete</span>
      </div>
    </div>
  )
}

