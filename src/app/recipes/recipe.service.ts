import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";

 @Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Idly Sambar',
         'Steamed food',
          'src/assets/Nungu-pine.jpeg', 
          [
            new Ingredient('Maavu', 1), 
            new Ingredient('water', 3)
            ]),

        new Recipe('Mutton Chukka', 
        'Oil Fried food', 
        './src/assets/Nungu-pine.jpeg', 
        [
            new Ingredient('Meat',1),  
            new Ingredient('Masala', 3)
        ])
      ];

    constructor(private slService: ShoppingListService){
    }

    getRecipes() {
        return this.recipes.slice()
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}[]