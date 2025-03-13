import {Injectable} from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import {FilterType,FilterMap} from "../recipes/interfaces/recipe.interface";

@Injectable()
export class MealDbService {
    private readonly baseUrl: string;

    constructor(private configService: ConfigService) {
        this.baseUrl = this.configService.get<string>('API_BASE_URL');
    }

    async getAllMeals() {
        const url = `${this.baseUrl}/search.php?s=`;
        const response = await fetch(url);
        const data = await response.json();
        return data.meals;
    }
    async getMealByFilter(key:FilterType, value:string) {
        const url = `${this.baseUrl}/filter.php?${FilterMap[key]}=${value}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.meals;
    }

    async getMealById(mealId: string) {
        const url = `${this.baseUrl}/lookup.php?i=${mealId}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.meals[0];
    }

}