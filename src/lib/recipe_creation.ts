"use server"
import { cookies } from "next/headers";

export async function createRecipe(formData: any) {
    formData.Time_to_cook = parseInt(formData.Time_to_cook)
    // make formData.Method and formData.Ingredients json objects that get separated by the new lines and store it as a json string

    formData.Methods = JSON.stringify(formData.Methods.split("\n"))
    formData.Ingredients = JSON.stringify(formData.Ingredients.split("\n"))


    console.log(formData)
    const session = cookies().get("session");
    if (!session) {
        return null;
    }

    const new_entry = await fetch("http://localhost:5001/api/recipes/create", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + session.value,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((res) => res.json());
    console.log(new_entry)

    return await new_entry;
}