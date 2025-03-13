import {RecipesService} from '@/api/recipes';

import {RecipeComponent} from '@/components/recipe-component'

type Props = {
    params: { recipe: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const RecipePage = async(props:Props)=>{
    const {recipe:recipeId} = await props?.params
    const recipe = await RecipesService.getRecipe(recipeId);

    return <div>
        <h1 className="sticky top-0 left-0 w-full bg-background text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground border-b border-border py-4 text-center z-50">{recipe?.strMeal ?? ''}</h1>
        <RecipeComponent {...recipe} />
    </div>
}

export default RecipePage;