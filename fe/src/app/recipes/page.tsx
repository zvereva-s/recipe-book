import {Container} from '@/components/container'
import {CardComponent} from '@/components/card'

import {RecipesService} from '@/api/recipes';

type Props = {
    params: { recipe: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
export interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealAlternate: string | null;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string | null;
    strYoutube: string;
    ingredient: { [key: `strIngredient${number}`]: string };
    measures: { [key: `strMeasure${number}`]: string };
    strSource: string;
    strImageSource: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: string | null;
}

const RecipesPage = async(props:Props) => {
    const { country, category, ingredient } = await props.searchParams;

    const filteredParams = {
        ...(country && { country }),
        ...(category && { category }),
        ...(ingredient && { ingredient }),
    };

    const recipes: Recipe[] = await RecipesService.getRecipes(filteredParams ? {...filteredParams} : {});


    const titleParts = [
        country ? `from ${country}` : "",
        category ? `in ${category}` : "",
        ingredient ? `with ${ingredient}` : "",
    ].filter(Boolean);

    const title =
        titleParts.length > 0 ? `Recipes ${titleParts.join(" ")} ` : "All Recipes";

    return (
        <Container>
            <h1 className="sticky top-0 left-0 w-full bg-background text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground border-b border-border py-4 text-center z-50">
                {title}
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {recipes?.map((recipe: Recipe) => (
                    <CardComponent key={recipe.idMeal} {...recipe} />
                ))}
            </ul>
        </Container>
    );

}

export default RecipesPage;