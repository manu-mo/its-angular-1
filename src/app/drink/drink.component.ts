import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/_models/drink.model';
import { ApiService } from '../_service/api.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})

export class DrinkComponent implements OnInit { 
  drink!: Drink;
  lang = 'EN';
  
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
    const id = this.route.snapshot.paramMap.get('idDrink')!;

    this.apiService.searchCocktailById(id)
      .subscribe((response: any) => {
        this.drink = response.drinks[0];
        this.drink.ingredients = [];
        this.drink.instructions = [];
        Object.keys(this.drink).forEach((key) => {
          if (key.startsWith('strIngredient') && (this.drink as any)[key]) {
            const index = key.replace('strIngredient', '');
            this.drink.ingredients.push({
              name: (this.drink as any)[key],
              measure: (this.drink as any)['strMeasure' + index]
            });
          }
          if (key.startsWith('strInstructions') && (this.drink as any)[key]) {
            let lang = key.replace('strInstructions', '');
            if (!lang) {
              lang = 'EN';
            }
            this.drink.instructions.push({
              lang: lang,
              [lang]: (this.drink as any)[key]
            });
          }
        });
        // this.drink.instructions[lang] = (this.drink as any)[key]
      });
  }

  changeLang(lang: string): void {
    this.lang = lang;
  }

}
