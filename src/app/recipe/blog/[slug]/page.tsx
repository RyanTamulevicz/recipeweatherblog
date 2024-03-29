import recipes from "@/data/recipes.json"
import Image from "next/image";
import { Recipe } from "@/types/recipe";
import DetailTitleSection from "@/components/detailpage/titlesection";
import RelatedRecipes from "@/components/detailpage/relatedposts";

export default function Page({ params }: { params: { slug: string } }) {
  const recipe: Recipe | undefined = recipes.find(recipe => recipe.slug === params.slug);

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 lg:col-span-2 lg:grid-cols-2 lg:gap-8">
        <div className="flex items-start">
          <DetailTitleSection {...recipe} />
        </div>
        <div className="grid gap-4">
          <h2 className="font-bold text-xl">Ingredients</h2>
          <ul className="list-disc list-inside grid gap-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4">
          <h2 className="font-bold text-xl">Method</h2>
          <ol className="list-decimal list-inside grid gap-2">
              {recipe.method.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
          </ol>
        </div>
      </div>
      <div className="grid gap-4">
        <Image
          alt="Recipe Image"
          className="aspect-16/9 rounded-lg object-cover border border-gray-200 w-full dark:border-gray-800"
          height={533}
          src={recipe.imageUrl}
          width={800}
        />
        <div className="grid gap-4">
          <RelatedRecipes />
        </div>
      </div>
      {/* make a section for the blog text */}
      <div className="grid gap-4 lg:col-span-3">
        <h2 className="font-bold text-xl">Blog</h2>
        <p>
          {recipe.blog}
        </p>
      </div>
    </div>
  )
}

