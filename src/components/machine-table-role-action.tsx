"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import { MachineFileManagerDialog } from "~/components/machine-file-manager-dialog"

// interface MachineTableRowActionsProps<TData> {
//   row: Row<TData>
// }

export function MachineTableRowActions<TData>() {
  return (
    <Dialog onOpenChange={() => { setTimeout(() => (document.body.style.pointerEvents = ""), 100) }}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem>Offline</DropdownMenuItem>
          <DropdownMenuItem>Capture</DropdownMenuItem>
          <DropdownMenuItem>Change Remark</DropdownMenuItem>
            <DialogTrigger asChild>
                <DropdownMenuItem>File Manager</DropdownMenuItem>
            </DialogTrigger>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
        <MachineFileManagerDialog/>
      </DropdownMenu>
    </Dialog>
  )
}