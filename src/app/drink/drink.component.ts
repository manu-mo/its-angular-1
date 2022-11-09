import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {
  drink: any = {
    ingredients: [],
    instructions: []
  };

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idDrink')!;
    this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
      .subscribe( (response: any) => {
        this.drink = response.drinks[0];
        this.drink.ingredients = [];
        this.drink.instructions = [];
        Object.keys(this.drink).forEach( (key) => {
          if (key.startsWith('strIngredient') && this.drink[key]) {
            const index = key.replace('strIngredient', '');
            console.log(index);
            this.drink.ingredients.push({
              name: this.drink[key],
              measure: this.drink['strMeasure' + index]
            });
          }
          if (key.startsWith('strInstructions') && this.drink[key]) {
            let lang = key.replace('strInstructions', '');
            if (!lang) {
              lang = 'EN';
            }
            console.log(lang);
            this.drink.instructions[lang] = this.drink[key]
          }
        });
        console.log(this.drink);
      })
  }

}
