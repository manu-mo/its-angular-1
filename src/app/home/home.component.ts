import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  drinks: any[] = [];
  alphabeth = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  currentLetter = 'A';

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
    this.handleFirstLetter(this.currentLetter)
  }

  handleFirstLetter(letter: string) {
    this.currentLetter = letter;
    this.apiService.searchCocktailByFirstLetter(letter)
      .subscribe((response: any) => {
        if (response.drinks === null) {
          alert('No drinks available for this letter!')
        } else {
          this.startBlockUI();
          this.drinks = response.drinks;
          this.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
        }
      })
  }

  onCardSelectChange(drink: any, $event: boolean) {
    // console.log("drink", drink, "selezionato?", $event);
    drink.selected = $event;
  }

}    
