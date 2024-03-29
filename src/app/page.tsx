"use client"
import { useState } from 'react';
import { Input } from "@/components/ui/input"
import RecipeCard from "@/components/recipecard/recipe_card"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const recipes = [
    {
      title: "Chicken Alfredo",
      description: "A creamy pasta dish with chicken",
      imageUrl: "https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Alfredo-Pasta-1-1.jpg",
      link: "/",
      time_to_cook: "30 minutes",
      good_in_weather: "cloudy",
      difficulty: "Medium"
    },
    {
      title : "Spaghetti and Meatballs",
      description: "A classic Italian dish",
      imageUrl: "https://static01.nyt.com/images/2017/04/05/dining/05COOKING-NIGMEATBALLS2/05COOKING-NIGMEATBALLS2-superJumbo.jpg",
      link: "/",
      time_to_cook: "30 minutes",
      good_in_weather: "sunny",
      difficulty: "Medium"
    },
    {
      title: "Grilled Cheese",
      description: "A classic American sandwich",
      imageUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese.jpg",
      link: "/",
      time_to_cook: "30 minutes",
      good_in_weather: "snowy",
      difficulty: "Hard"
    },
  ];

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