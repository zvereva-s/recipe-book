import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {Container} from "@/components/container"
import {RecipesService} from "@/api/recipes";



export default async function LayoutRecipe({ children, params }: { children: React.ReactNode,params: { recipe: string }}) {
    const {recipe} = await params;
    const recipeData = await RecipesService.getRecipe(recipe);

    const category = recipeData?.strCategory || '';
    const recipesByCategory = await RecipesService.getRecipes({category})

    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar list={recipesByCategory} category={category}/>
            <div className="flex flex-col sm:flex-row min-h-screen">
                <SidebarTrigger/>
                <Container>
                    {children}
                </Container>
            </div>
        </SidebarProvider>
    )
}
