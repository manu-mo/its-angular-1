import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html'
})

export class IngredientComponent implements OnInit {
  drinks: any[] = [];
  ingredientImg: string = "";

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const ingredientName = this.route.snapshot.paramMap.get('ingredientName')!;
    
    this.apiService.searchCocktailByIngredient(ingredientName)
    .subscribe((response: any) => {
      this.drinks = response.drinks;
      this.ingredientImg = `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Medium.png`;
    })
  }

}
