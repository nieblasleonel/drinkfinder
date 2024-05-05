import { StateCreator } from "zustand";
import { getCategories, GetRecipeById, GetRecipes } from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";

export type RecipeSliceType= {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal:boolean
    fetchCategories: ()=>Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink'])=>Promise<void>
    closeModal: ()=>void
}

export const createRecipeSlice : StateCreator<RecipeSliceType> = (set) =>({
   categories: {
    drinks:[]
   },
   drinks:{
    drinks: []
   },
   selectedRecipe:{} as Recipe,
   modal: false,
   fetchCategories: async()=>{
    const categories = await getCategories();
    set({
        categories: categories
    })
   },
   searchRecipes: async (filters) =>{
     const drinks = await GetRecipes(filters);
     set({
        drinks
     })
   },
   selectRecipe: async (id)=>{
     const selectedRecipe = await GetRecipeById(id); 
     set({
      selectedRecipe,
      modal: true
     })
   },
   closeModal:()=>{
    set({
      modal: false,
      selectedRecipe: {} as Recipe
    })
   }
})