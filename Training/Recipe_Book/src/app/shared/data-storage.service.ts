import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

//Since we will inject a service into a service (we will inject Http Service), we need to add @Injectable
@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipies(){
        const recipes = this.recipeService.getRecipes();
        this.http
            .put('https://ng-course-recipe-book-3b641-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(response => { console.log(response); });
    }
}