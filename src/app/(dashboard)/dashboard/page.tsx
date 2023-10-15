import { redirect } from "next/navigation"
import { DashboardShell } from "~/components/shell"
import { DashboardHeader } from "~/components/header"
import { columns,MachineTable } from "~/components/machine-table"
import { Machine } from "~/types"

export const metadata = {
  title: "Dashboard",
}

async function getData(): Promise<Machine[]> {
  return [
    {
      id: "1",
      ip: "192.168.92.1",
      remark: "MyComputer",
      user: "Administrator",
      hostname: "Mocus",
      os: "Windows",
      connect: "Online",
    },
    {
      id: "2",
      ip: "192.168.92.2",
      remark: "",
      user: "root",
      hostname: "Susan",
      os: "Linux",
      connect: "Offline",
    },
  ]
}

export default async function DashboardPage() {
  const data = await getData()
  return (
    <DashboardShell>
        <MachineTable data={data} columns={columns}/>
    </DashboardShell>
  )
}
