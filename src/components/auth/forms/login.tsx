"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
interface userSchema {
    Email: string;
    Password: string;
}

let errorString = "Email or Password was incorrect or not found!";
const formSchema = z.object({
    Email: z.string().refine(value => value === 'ryan@orchidsoftsolutions.com', {
        message: errorString,
    }),
    Password: z.string().refine(value => value === 'Iyan!', {
        message: errorString,
    }),
})

export function LoginForm() {
    const form = useForm<userSchema>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (data: userSchema) => {
        alert('Successful login');
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="Password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="Password" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}