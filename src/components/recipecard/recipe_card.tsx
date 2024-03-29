import { 
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from "@/components/ui/card"; 
import Link from "next/link";
import { Timer } from "lucide-react";
import { WeatherIcon } from "@/components/weathericon";
import { Recipe } from "@/types/recipe";
import Image from "next/image";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    return(
    <Link href={`/recipe/blog/${recipe.slug}`}>
        <Card className="w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="grid gap-4 p-6">
          <CardTitle className="text-lg font-semibold leading-none">
            <div className="flex flex-row justify-between">
              <span>{recipe.title}</span>
              <WeatherIcon weather={recipe.good_in_weather} />
            </div>
            <div className="text-sm font-normal text-gray-500 pt-2">
              {recipe.difficulty} Difficulty
            </div>
            <div className="flex items-center gap-1 text-sm font-normal text-gray-500">
              <Timer className="h-4 w-4 text-red-500" />
              <span>{recipe.time_to_cook}</span>
            </div>
          </CardTitle>
            <CardDescription className="text-sm/relaxed">
              {recipe.description}
            </CardDescription>
          </div>
          <CardContent>
          <Image
            alt={recipe.title}
            height="225"
            src={recipe.imageUrl}
            style={{
              aspectRatio: "400/225",
              objectFit: "cover",
            }}
            width="400"
            className="rounded-lg"
          />
          </CardContent>
        </Card>
    </Link>
    )
}