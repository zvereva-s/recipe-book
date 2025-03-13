'use client'
import Image from "next/image";
import Link from "next/link";

import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"


import {Recipe} from '@/app/recipes/page';
import {useToggleState} from '@/hooks/useToggleLengthDescription'

import {handleLengthDescription} from '@/helpers/handleLengthDescription'

export const CardComponent = (recipe:Recipe) => {
    const {isOpen, toggleIsOpen} = useToggleState()

    return <Card style={{paddingTop: 0}} className='pt-0 hover:shadow-lg hover:scale-105 transition-all duration-300'>
        <Link href={`/recipes/${recipe.idMeal}`} className="flex">
            <div className="flex items-center justify-center w-100">
                <Image
                    src={recipe.strMealThumb ?? ''}
                    alt={recipe.strMeal ?? ''}
                    width={250}
                    height={250}
                    style={{borderTopRightRadius: 10, borderTopLeftRadius: 10}}
                    className="w-full h-auto object-cover m-0 p-0"
                />
            </div>
        </Link>
            <CardHeader>
                <CardTitle>{recipe.strMeal ?? ''}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription
                    className="cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation()
                        toggleIsOpen()
                    }}>{isOpen ? handleLengthDescription(recipe.strInstructions) : recipe.strInstructions}</CardDescription>
            </CardContent>
        <CardFooter>
<div className='flex items-center gap-2 w-100'>
    <Link href={{ pathname: "/recipes", query: { category:recipe.strCategory } }} className="flex"><Badge>{recipe.strCategory}</Badge></Link>
    <Link href={{ pathname: "/recipes", query: { category:recipe.strArea } }} className="flex"><Badge>{recipe.strArea}</Badge></Link>
    <Link href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
        <Avatar>
            <AvatarImage height={20} src='data:image/png;base64,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' />
            {recipe.strCategory}
        </Avatar>
    </Link>
</div>
        </CardFooter>
    </Card>
}