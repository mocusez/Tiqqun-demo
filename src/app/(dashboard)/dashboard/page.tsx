import { redirect } from "next/navigation"
import { DashboardShell } from "~/components/shell"
import { DashboardHeader } from "~/components/header"
import { MachineTable } from "~/components/machine-table"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  return (
    <DashboardShell>
        <MachineTable/>
    </DashboardShell>
  )
}
