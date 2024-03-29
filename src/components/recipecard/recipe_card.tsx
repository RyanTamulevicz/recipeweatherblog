import { 
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from "@/components/ui/card"; 
import Link from "next/link";
import { Timer, Cloud, Sun, CloudRain, Snowflake } from "lucide-react";

interface Recipe {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  time_to_cook: string;
  good_in_weather: string;
  difficulty: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const weather_icons: { [key: string]: JSX.Element } = {
    'cloudy': <Cloud />,
    'sunny': <Sun />,
    'rainy': <CloudRain />,
    'snowy': <Snowflake />,
    'default': <Cloud />
  }

  const weatherIcon = weather_icons[recipe.good_in_weather] || weather_icons['default'];

    return(
    <Link href={recipe.link}>
        <Card className="w-full  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="grid gap-4 p-6">
          <CardTitle className="text-lg font-semibold leading-none">
            <div className="flex flex-row justify-between">
              <span>{recipe.title}</span>
              <span>{weatherIcon}</span>
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
          <img
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