import {z} from 'zod';
import { CategoriesAPIResponseSchema, SearchFilterSchema, DrinksAPIResponse, DrinkAPIResponse, RecipeAPIResponseSchema } from '../utils.ts/recipes-squema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>