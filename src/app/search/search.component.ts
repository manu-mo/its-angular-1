import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit {
  drinks: any[] = [];
  list: any = [];
  ingredients: any = [];
  jsonIn = {
    name: '',
    ingredient: ''
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.listAllIngredients()
      .subscribe( (response: any) => {
        this.list = response.drinks;
      })
    
  }

  searchByName(name: string) {
    if(this.jsonIn.name === '') {
      console.log('Name is empty!');

    }
    else {
      this.apiService.searchCocktailByName(name)
      .subscribe( (response: any) => {
        this.drinks = response.drinks;
      })
    }
  }

  searchByIngredient(ingredient: string) {
    this.apiService.searchCocktailByIngredient(ingredient)
      .subscribe( (response: any) => {
        this.drinks = response.drinks;
      })
  }

}