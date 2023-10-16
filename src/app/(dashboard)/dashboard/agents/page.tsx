// import { authOptions } from "~/lib/auth"
// import { getCurrentUser } from "~/lib/session"
import { DashboardHeader } from "~/components/header"
import { DashboardShell } from "~/components/shell"
// import { UserNameForm } from "~/components/user-name-form"
import { AgentsForm } from "~/components/agents-form"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Agents",
  description: "agent download",
}

export default async function AgentsPage() {
  // const user = await getCurrentUser()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login")
  // }
  

  return (
    <DashboardShell>
      <div className="grid gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Agents</CardTitle>
            <CardDescription>下载客户端</CardDescription>
          </CardHeader>
          <CardContent>
            <AgentsForm/>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
    </DashboardShell>
  )
}
