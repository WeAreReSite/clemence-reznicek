"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isToday,
  isBefore,
  startOfDay,
} from "date-fns"
import { fr } from "date-fns/locale"

export interface CalendarProps {
  selected?: Date
  onSelect?: (date: Date) => void
  disabled?: (date: Date) => boolean
  className?: string
  minDate?: Date
}

export function Calendar({
  selected,
  onSelect,
  disabled,
  className,
  minDate = new Date(),
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-lg font-serif font-medium capitalize">
          {format(currentMonth, "MMMM yyyy", { locale: fr })}
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    )
  }

  const renderDays = () => {
    const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
    return (
      <div className="grid grid-cols-7 mb-2">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}
      </div>
    )
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 })
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 })

    const rows = []
    let days = []
    let day = startDate

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const currentDay = day
        const isDisabled =
          !isSameMonth(day, monthStart) ||
          isBefore(startOfDay(day), startOfDay(minDate)) ||
          (disabled && disabled(day))

        days.push(
          <button
            key={day.toString()}
            onClick={() => !isDisabled && onSelect?.(currentDay)}
            disabled={isDisabled}
            className={cn(
              "h-10 w-10 rounded-lg text-sm transition-all duration-200 mx-auto",
              "hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
              !isSameMonth(day, monthStart) && "text-muted-foreground/40",
              isDisabled && "opacity-30 cursor-not-allowed hover:bg-transparent",
              isToday(day) && !selected && "border border-accent",
              selected &&
                isSameDay(day, selected) &&
                "bg-primary text-primary-foreground hover:bg-primary-hover"
            )}
          >
            {format(day, "d")}
          </button>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-1">
          {days}
        </div>
      )
      days = []
    }
    return <div className="space-y-1">{rows}</div>
  }

  return (
    <div className={cn("p-4 bg-card rounded-xl", className)}>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}
