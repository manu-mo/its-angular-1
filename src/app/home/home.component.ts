import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  drinks: any[] = [];
  alphabeth =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  currentLetter = '';
  
  constructor(private apiService: ApiService, private elementRef:ElementRef) {}
  
  ngOnInit(): void {
      this.searchByFirstLetter('A');    
  }

  searchByFirstLetter(letter: string) {
    this.currentLetter = letter;
    this.apiService.searchCocktailByFirstLetter(this.currentLetter)
    .subscribe( (response: any) => {
      if(response.drinks === null) { 
        alert('No drinks available for this letter!')
    } else {
        this.drinks = response.drinks;
        this.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink))
      }
    })
  }

  onCardSelectChange(drink: any, $event: boolean) {
    console.log("drink", drink, "selezionato?", $event);
    drink.selected = $event;
  }


}    
