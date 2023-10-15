import { redirect } from "next/navigation"
import { DashboardShell } from "~/components/shell"
import { DashboardHeader } from "~/components/header"
import { MachineSearch } from "~/components/machine-search"
import { MachineTableRowActions } from "~/components/machine-table-role-action"
import { Machine } from "~/types"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { Badge } from "~/components/ui/badge"


export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const machines:Machine[] = [
    {
      ID: "1",
      IP: "192.168.92.1",
      Remark: "MyComputer",
      User: "Administrator",
      HostName: "Mocus",
      OS: "Windows",
      Connect: "Online",
    },
    {
      ID: "2",
      IP: "192.168.92.2",
      Remark: "",
      User: "root",
      HostName: "Susan",
      OS: "Linux",
      Connect: "Offline",
    },
  ]

  function Situation({ situation }:{situation:string}) {
    if (situation == "Online") return <Badge variant="online">{situation}</Badge>
    return <Badge variant="offline">{situation}</Badge>
  }

  return (
    <DashboardShell>
        <DashboardHeader
          heading="Machines"
        />
        <MachineSearch />
        <div>
          <Table>
          <TableCaption>Total {machines.length} Machines</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead className="w-[100px]">Remark</TableHead>
              <TableHead className="w-[100px]">IP</TableHead>
              <TableHead>User</TableHead>
              <TableHead>HostName</TableHead>
              <TableHead>OS</TableHead>
              <TableHead>Connect</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {machines.map((machine:Machine) => (
              <TableRow key={machine.ID}>
                <TableCell className="font-medium">{machine.ID}</TableCell>
                <TableCell>{machine.Remark}</TableCell>
                <TableCell>{machine.IP}</TableCell>
                <TableCell>{machine.User}</TableCell>
                <TableCell>{machine.HostName}</TableCell>
                <TableCell>{machine.OS}</TableCell>
                <TableCell>
                  <Situation situation={machine.Connect} />
                </TableCell>
                <TableCell>
                  <MachineTableRowActions />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
    </DashboardShell>
  )
}
