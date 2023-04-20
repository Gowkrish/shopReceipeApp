import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'a test desc', '../src/assets/Nungu-pine.jpeg'),
    new Recipe('A Test Recipe', 'a test desc', '../src/assets/Nungu-pine.jpeg')
  ];
   
  constructor() { }

  ngOnInit(): void {
  }

}
