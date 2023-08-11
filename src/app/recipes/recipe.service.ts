import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";

 @Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Mini-idly', 'Steamed food', 'assets/small-idly.jpg', 
                    [new Ingredient('Maavu', 1), new Ingredient('water', 3) ], ),

        new Recipe('Mixed rice', 'Mix of variety rice', 'assets/variety.jpg', 
                    [new Ingredient('Rice',1), new Ingredient('MasalaGravies', 3) ], ),
                    
        new Recipe('Pathaneer', 'Palm tree drink', 'assets/kool.jpg', 
                    [new Ingredient('PalmWater',1), new Ingredient('Calcium', 3)  ], )
      ];

    constructor(private slService: ShoppingListService){
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}[]