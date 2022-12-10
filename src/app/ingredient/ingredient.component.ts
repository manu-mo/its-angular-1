import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../_service/api.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html'
})

export class IngredientComponent implements OnInit {
  drinks: any[] = [];
  ingredientImg: string = "";
  ingredientName: string = "";

  @BlockUI()
  blockUI!: NgBlockUI;
  
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  startBlockUI() {
    this.blockUI.start();
    setTimeout(() => {
      this.blockUI.stop();
    }, 1000);
  }

  ngOnInit(): void {
    this.startBlockUI();
    
    const name = this.route.snapshot.paramMap.get('ingredientName')!;
    this.ingredientName = name;
    
    this.apiService.searchCocktailByIngredient(this.ingredientName)
    .subscribe((response: any) => {
      this.drinks = response.drinks;
      this.ingredientImg = `https://www.thecocktaildb.com/images/ingredients/${this.ingredientName}-Medium.png`;
    })
  }

}
