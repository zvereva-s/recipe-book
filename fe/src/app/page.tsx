import { Button } from "@/components/ui/button"
import {RecipesService} from "@/api/recipes";
import {Recipe} from "@/app/recipes/page";
import {CardComponent} from "@/components/card";
import {Container} from "@/components/container";

type Props = {
    params: { recipe: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Home({params}:Props) {
    const recipes: Recipe[] = await RecipesService.getRecipes();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Container>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground border-b border-border pb-3 text-center">
                All Recipes
              </h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                  {recipes.map((recipe: Recipe) => (
                      <CardComponent key={recipe.idMeal} {...recipe} />
                  ))}
              </ul>
          </Container>
      </main>
    </div>
  );
}
