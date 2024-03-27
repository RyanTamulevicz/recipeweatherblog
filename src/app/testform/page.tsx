'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"

export default function TestFormPage() {
  const [firstName , setFirstName] = useState("John");
  const [lastName , setLastName] = useState("Doe");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("form submitted");
  }

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }

  return (
    <div>
      <main className="w-1/2 mx-auto py-12">
        <h1 className="mb-8">Test Form Page</h1>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <Input onChange={handleFirstNameChange} value={firstName} placeholder="First Name" />
          <Input onChange={handleLastNameChange} value={lastName}  placeholder="Last Name" />
          <Button type="submit">Submit</Button>
        </form>
      </main>
    </div>
  )
}