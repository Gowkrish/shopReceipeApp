import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Idly Sambar', 'a test desc', 'src/assets/Nungu-pine.jpeg'),
    new Recipe('Mutton Chukka', 'a test desc', './src/assets/Nungu-pine.jpeg')
  ];
   
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);  }

    
  @Output() featureSelcted = new EventEmitter<string>();
 

}
