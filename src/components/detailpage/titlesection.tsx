import { Recipe } from "@/types/recipe";
import { Clock, TrendingUpIcon } from "lucide-react";
import { WeatherIcon } from "@/components/WeatherIcon";

export default function DetailTitleSection(recipe: Recipe) {
    return(
        <div className="grid gap-4">
            <h1 className="font-bold text-3xl">{recipe.title}</h1>
            <p>
            {recipe.description}
            </p>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <WeatherIcon weather={recipe.good_in_weather} />
                    <span className="text-sm font-medium">Best for {recipe.good_in_weather} days</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">30 min</span>
                </div>
                <div className="flex items-center gap-2">
                    <TrendingUpIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Easy</span>
                </div>
            </div>
        </div>
    )
}