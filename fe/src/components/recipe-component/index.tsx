import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import Link from "next/link";
import {Recipe} from '@/app/recipes/page';

const splitTextIntoSteps = (text: string) => {
    const steps = text.split(/STEP\s+\d+/i).filter(step => step.trim() !== "");
    return steps.map((step, index) => (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            <strong className="text-gray-900">STEP {index + 1}:</strong> {step.trim()}
        </p>
    ));
};

const extractIngredientsAndMeasures = (recipe: Recipe) => {
    const result: { ingredient: string; measure: string }[] = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
        const measure = recipe[`strMeasure${i}` as keyof Recipe];

        if (ingredient && ingredient !== "" && measure && measure !== "") {
            result.push({
                ingredient: ingredient as string,
                measure: measure as string,
            });
        }
    }

    return result;
};

export const RecipeComponent = (recipe:Recipe) => {
    return <div className="flex flex-col gap-3">
        <div className="flex space-x-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-[400px] h-[400px] overflow-hidden rounded-lg">
                <Image
                    src={recipe.strMealThumb ?? ''}
                    alt={recipe.strMeal ?? ''}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1">
                <p className="text-gray-700 text-base leading-relaxed">
                    {splitTextIntoSteps(recipe.strInstructions)}
                </p>
            </div>
        </div>

        <div className="flex justify-around p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className='flex items-center gap-2 w-100'>
                <Link href={`/recipes?country=${recipe.strArea}`} className="cursor-pointer"><Badge>{recipe.strArea}</Badge></Link>
            </div>
            <div className='flex flex-col gap-1 w-100'>
                <Table className="w-100">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Ingredient</TableHead>
                            <TableHead className="text-right">Measure</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {extractIngredientsAndMeasures(recipe)?.map((item, idx) => (

                                <TableRow>
                                    <TableCell  className="font-medium"><Link href={`/recipes?ingredient=${item.ingredient}`} key={idx}><Badge
                                        variant={'outline'}>{item.ingredient}</Badge></Link></TableCell>
                                    <TableCell className="text-right">{item.measure}</TableCell>
                            </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>
}