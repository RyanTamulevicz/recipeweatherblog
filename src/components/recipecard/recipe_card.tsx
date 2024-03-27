import { 
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from "@/components/ui/card"; 
import Link from "next/link";
import Image from "next/image";

interface Recipe {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    return(
    <Link href={recipe.link}>
        <Card className="w-full  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="grid gap-4 p-6">
            <CardTitle className="text-lg font-semibold leading-none">{recipe.title}</CardTitle>
            <CardDescription className="text-sm/relaxed">{recipe.description}</CardDescription>
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