import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    public boolVal?: boolean;

    constructor(name:string, desc:string, imagePath:string, ingredients: Ingredient[], boolVal: boolean){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.boolVal = boolVal;
    }
    
}