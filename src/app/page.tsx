"use client"
import { useState } from 'react';
import { Input } from "@/components/ui/input"
import RecipeCard from "@/components/recipecard/recipe_card"
import recipes from "@/data/recipes.json"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 flex-1 min-h-0">
      <div className="grid gap-4">
        <h1 className="text-2xl font-semibold">Recipes</h1>
        <div className="flex items-center gap-4">
          <Input
            className="w-[300px]"
            placeholder="Search Recipes"
            type="search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index + filteredRecipes.length} recipe={recipe} />
        ))}
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard key={index + filteredRecipes.length} recipe={recipe} />
        ))}
        </div>

      </div>
    </div>
  );
}