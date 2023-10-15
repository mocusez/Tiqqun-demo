import { redirect } from "next/navigation"

// import { authOptions } from "~/lib/auth"
// import { getCurrentUser } from "~/lib/session"
import { DashboardHeader } from "~/components/header"
import { DashboardShell } from "~/components/shell"
// import { UserNameForm } from "~/components/user-name-form"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { cn } from "~/lib/utils"
import { buttonVariants } from "~/components/ui/button"

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
}

export default async function SettingsPage() {
  // const user = await getCurrentUser()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login")
  // }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>开启basic认证可防止被资产测绘收录</CardDescription>
          </CardHeader>
          <CardContent>
          <div className="grid gap-1">
              <p>User</p>
              <Input id="user" className="w-[400px]" size={32} />
            </div>
          </CardContent>
          <CardContent>
            <div className="grid gap-1">
              <p>Password</p>
              <Input id="password" className="w-[400px]" size={32} />
            </div>
          </CardContent>
          <CardFooter>
            <button
              type="submit"
              className={cn(buttonVariants())}
            >
              <span>Save</span>
            </button>
          </CardFooter>
        </Card>
      </div>
    </DashboardShell>
  )
}
