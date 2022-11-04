import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  drinks: any[] = [];
  alphabeth: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  currentLetter: any = undefined;
  
  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {
      this.searchByFirstLetter('A');    
  }

  searchByFirstLetter(letter: string) {
    this.apiService.searchCocktailByFirstLetter(letter)
    .subscribe((response: any) => {
      this.drinks = response.drinks;
      this.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink))
    })
  }


}    
