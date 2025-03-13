
import { Injectable,Logger} from '@nestjs/common';
import { Recipe,FilterType } from './interfaces/recipe.interface';
import {MealDbService} from "../api/mealDb.service";

@Injectable()
export class RecipesService {
    private readonly logger = new Logger(RecipesService.name);
    private readonly mealDbService: MealDbService;

    constructor(mealDbService: MealDbService) {
        this.mealDbService = mealDbService;
    }

    async findAll(): Promise<Recipe[]> {
        this.logger.log('findAll')
        try{
            return await this.mealDbService.getAllMeals()
        }
        catch(error){
            this.logger.error(error);
        }

    }
    async findByFilter(filter: {key:FilterType, value:string}): Promise<Recipe[]> {
        this.logger.log('findByFilter' + `Params:${JSON.stringify(filter)}`)
        try{
            return await this.mealDbService.getMealByFilter(filter.key, filter.value);

        }
        catch(error){
            this.logger.error(error);
        }
    }
    async findOne(id:string | number): Promise<Recipe | string> {
        this.logger.log('findOne')
        try{
            return await this.mealDbService.getMealById(String(id))
        }
        catch(error){
            this.logger.error(error);
        }
    }
}
