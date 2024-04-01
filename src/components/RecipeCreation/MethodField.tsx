"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react';

// unused currently
export default function MethodField() {
    const [methods, setMethods] = useState<string[]>([]);

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>, setMethods: React.Dispatch<React.SetStateAction<string[]>>) => {
        const values = [...methods];
        values[index] = event.target.value;
        setMethods(values);
    }

    const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number, setMethods: React.Dispatch<React.SetStateAction<string[]>>, methods: string[]) => {
        event.preventDefault();
        const values = [...methods];
        values.splice(index, 1);
        setMethods(values);
    }

    const handleAddClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, setMethods: React.Dispatch<React.SetStateAction<string[]>>, methods: string[]) => {
        event.preventDefault();
        setMethods([...methods, '']);
    }

    return (
    <>
      <Label htmlFor="method">Method</Label>
      {methods.map((method, idx) => (
        <div key={idx} className="pt-2">
          <Input
            id={`Step-${idx}`}
            placeholder={`Step ${idx + 1}`}
            value={method}
            onChange={e => handleInputChange(idx, e, setMethods)}
          />
          <Button onClick={(event) => handleRemoveClick(event, idx, setMethods, methods)}>Remove</Button>
        </div>
      ))}
      <Button onClick={(event) => handleAddClick(event, setMethods, methods)}>Add Method</Button>
    </>
    )
}