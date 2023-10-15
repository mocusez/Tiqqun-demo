"use client"

import * as React from "react"

import { cn } from "~/lib/utils"
import { Input } from "~/components/ui/input"
import { toast } from "~/components/ui/use-toast"

interface MachineSearchProps extends React.HTMLAttributes<HTMLFormElement> {}

export function MachineSearch({ className, ...props }: MachineSearchProps) {
  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    return toast({
      title: "Not implemented",
      description: "We're still working on the search.",
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("relative w-full left-1.5", className)}
      {...props}
    >
      <Input
        type="search"
        placeholder="Search machine..."
        className="h-8 w-full sm:w-64 sm:pr-12 "
      />
    </form>
  )
}
