import {API} from "./CoreAPI";

export class RecipesService {
    static async getRecipes(params?:{[key:string]:string}|{}) {
        try {
            const res =  await API.GET({
                url: '/recipes', pathParams:params
            });
            return res;
        }catch (e){
            console.log('RecipesService ::', e);
            throw e;
        }
    }
    static async getRecipe(id:string) {
        try {
            return await API.GET({
                url: `/recipes/${id}`,
            });
        }catch (e){
            console.log('RecipesService ::', e);
            throw e;
        }
    }
}