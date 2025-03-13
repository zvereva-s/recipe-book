
import { Controller, Get,Param, Logger,Query} from '@nestjs/common';

import {RecipesService} from './recipes.service';
import {Recipe,FilterType} from './interfaces/recipe.interface'

@Controller('recipes')
export class RecipesController {
    private readonly logger = new Logger(RecipesController.name);
    constructor(private recipesService: RecipesService) {}

    @Get()
    async findAll(@Query() query:string):Promise<Recipe[]> {
        this.logger.log('findAll' + `Query: ${JSON.stringify(query)}`);
        const value = Object.values(query)[0];
        const key = Object.keys(query)[0] as FilterType;
        if(value){
            return await this.recipesService.findByFilter({key,value });
        }
        return await this.recipesService.findAll();
    }
    @Get(':id')
    async findOne(@Param() params:{id:string|number}):Promise<Recipe | string> {
        this.logger.log('findOne' + `Params:: ${JSON.stringify(params)}`)
        return await this.recipesService.findOne(params?.id);
    }
}
