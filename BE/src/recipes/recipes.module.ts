
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { MealDbService } from '../api/mealDb.service';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [RecipesController],
    providers: [RecipesService, MealDbService],
})
export class RecipesModule {}
