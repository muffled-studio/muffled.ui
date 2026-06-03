"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";

import { Calendar } from "@/registry/ui/calendar";

function SingleCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border border-border"
    />
  );
}

function RangeCalendar() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
  });
  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className="rounded-md border border-border"
    />
  );
}

export function CalendarDemo() {
  return (
    <div className="flex flex-col gap-8">
      <SingleCalendar />
      <RangeCalendar />
    </div>
  );
}
