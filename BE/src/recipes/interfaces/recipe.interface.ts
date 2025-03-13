export type FilterType= 'ingredient' | 'category' | 'country';
export const enum FilterEnum {
    ingredient = 'i',
    category = 'c',
    country = 'a',
}
export const FilterMap: Record<FilterType, FilterEnum> = {
    ingredient: FilterEnum.ingredient,
    category: FilterEnum.category,
    country: FilterEnum.country,
};

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
    ingredients: { [key: `strIngredient${number}`]: string };
    measures: { [key: `strMeasure${number}`]: string };
    strSource: string;
    strImageSource: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: string | null;
}
