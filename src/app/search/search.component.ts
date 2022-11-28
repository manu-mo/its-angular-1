import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {
  drinks: any[] = [];
  list: any = [];
  ingredients: any = [];
  jsonIn = {
    name: '',
    ingredient: ''
  }

  @BlockUI()
  blockUI!: NgBlockUI;

  constructor(private apiService: ApiService) { }

  startBlockUI() {
    this.blockUI.start();
    setTimeout(() => {
      this.blockUI.stop();
    }, 1000);
  }

  ngOnInit(): void {
    this.apiService.listAllIngredients()
      .subscribe((response: any) => {
        this.list = response.drinks;
        console.log(this.list);
        this.list.sort((a: { strIngredient1: string; }, b: { strIngredient1: any; }) => a.strIngredient1.localeCompare(b.strIngredient1))
      })
  }

  searchByName(name: string) {
    if (this.jsonIn.name === '') {
      alert('Name is empty!');
    }
    else {
      this.startBlockUI();
      this.apiService.searchCocktailByName(name)
        .subscribe((response: any) => {
          if (response.drinks === null) {
            alert('No drinks found with this name!')
          } else {
            this.drinks = response.drinks;
            this.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink))
          }
        })
    }
  }

  searchByIngredient(ingredient: string) {
    if (ingredient === '') {
      alert('Please select an ingredient!')
    } else {
      this.startBlockUI();
      this.apiService.searchCocktailByIngredient(ingredient)
        .subscribe((response: any) => {
          this.drinks = response.drinks;
        })
    }
  }

}