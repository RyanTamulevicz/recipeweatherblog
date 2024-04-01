"use client"
import * as React from "react"
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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectItem } from "@/components/ui/select"
import { createRecipe } from "@/lib/recipe_creation"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const recipeSchema = z.object({
  Title: z.string().min(1, "Title is required"),
  Description: z.string().min(1, "Description is required"),
  ImageUrl: z.string().min(1, "Image URL is required"),
  Time_to_cook: z.string().min(1, "Time to cook is required"),
  Good_in_weather: z.string().min(1, "Select a weather condition"),
  Difficulty: z.string().min(1, "Select a difficulty level"),
  Methods: z.string().min(1, "Method of preparation is required"),
  Ingredients: z.string().min(1, "Ingredients are required"),
  Blog: z.string().min(1, "Blog content is required"),
})

export default function AdminPage() {
  const form = useForm({
    resolver: zodResolver(recipeSchema),
  })

  const onSubmit = async (data: any) => {
    const response = await createRecipe(data)
    if (response && response.error) {
      form.setError("Title", {
        type: "manual",
        message: response.error,
      })
    }
  }

  return (
    <>
    <div className="flex justify-center pt-5">
        <Card className="w-1/2">
        <CardHeader>
            <CardTitle>Create recipe</CardTitle>
            <CardDescription></CardDescription>
        </CardHeader>
      <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => onSubmit(data))}>
        <CardContent>
            <div className="grid w-full items-center gap-4">
                <FormField 
                  control={form.control}
                  name="Title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Title of your dish" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                 />
                 <FormField
                  control={form.control}
                  name="Description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Description of your dish" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />
                  <FormField
                  control={form.control}
                  name="ImageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="URL of the image" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />  

                <FormField
                  control={form.control}
                  name="Time_to_cook"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time to Prepare</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Time to prepare in minutes" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />
                <FormField
                  control={form.control}
                  name="Good_in_weather"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Good for weather</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger id="Good_in_weather">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="cloudy">Cloudy</SelectItem>
                            <SelectItem value="sunny">Sunny</SelectItem>
                            <SelectItem value="snowy">Snowy</SelectItem>
                            <SelectItem value="rainy">Rainy</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />

                <FormField
                  control={form.control}
                  name="Difficulty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Difficulty</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger id="difficulty">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="hard">Hard</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />

                <FormField
                  control={form.control}
                  name="Methods"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Method</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Method of preparation" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />

                <FormField
                  control={form.control}
                  name="Ingredients"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ingredients</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Ingredients required" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />

                <FormField
                  control={form.control}
                  name="Blog"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blog</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Blog content" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />
            </div>

        </CardContent>
        <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Create</Button>
        </CardFooter>
          </form>
        </Form>
        </Card>
    </div>
</>
  )
}
