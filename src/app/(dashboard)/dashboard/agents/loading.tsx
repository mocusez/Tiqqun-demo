import { CardSkeleton } from "~/components/card-skeleton"
import { DashboardShell } from "~/components/shell"

export default function DashboardAgentsLoading() {
  return (
    <DashboardShell>
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
