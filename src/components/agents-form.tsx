"use client"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export function AgentsForm() {
  const FormSchema = z.object({
    os: z.enum(["Windows", "Linux", "Mac"], {
        required_error: "You need to select a system.",
    }),
    arch: z.enum(["64bit", "32bit"], {
        required_error: "You need to select a arch.",
    }),
    type: z.string({
        required_error: "Please select a type.",
      }),
  })


    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    })
   
    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
            control={form.control}
            name="os"
            render={({ field }) => (
            <FormItem className="space-y-3">
                <FormLabel>OS</FormLabel>
                <FormControl>
                <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                        <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                        Windows
                    </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                        <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                        Linux
                    </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                        <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Mac</FormLabel>
                    </FormItem>
                </RadioGroup>
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="arch"
            render={({ field }) => (
            <FormItem className="space-y-3">
                <FormLabel>Arch</FormLabel>
                <FormControl>
                <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                        <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                        64bit
                    </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                        <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                        32bit
                    </FormLabel>
                    </FormItem>
                </RadioGroup>
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                    <SelectTrigger>
                    <SelectValue placeholder="Select a type to connect control" />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    <SelectItem value="TCP">TCP</SelectItem>
                    <SelectItem value="UDP">UDP</SelectItem>
                    <SelectItem value="QUIC">QUIC</SelectItem>
                </SelectContent>
                </Select>
                <FormDescription>
                </FormDescription>
                <FormMessage />
            </FormItem>
            )}
        />
        <Button type="submit">Download</Button>
        </form>
    </Form>
  )
}
