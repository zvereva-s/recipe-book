import { Apple } from "lucide-react"
import Link from "next/link"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Tooltip} from "@/components/ui/tooltip"
import {Recipe} from "@/app/recipes/page";


export function AppSidebar({list, category}:{list:Recipe[]; category:string}) {

    const menuItems = list.map((item:Recipe) => ({
        title: item.strMeal,
        url:item.idMeal,
        icon:Apple
    }))

    return (
        <Sidebar className="h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <Link
                href={{ pathname: "/recipes", query: { category } }}
                className="text-lg font-semibold text-white bg-black px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:text-gray-300 focus:ring-2 focus:ring-gray-500"
            >
                {category}
            </Link>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <Tooltip>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}</Tooltip>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
