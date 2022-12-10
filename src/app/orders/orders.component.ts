import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  drinks: any[] = [];
  jsonIn = {
    name: '',
  }
  selectedDrinks: any = [];
  count: number = 0;

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
    this.startBlockUI();
    this.apiService.searchCocktailByFirstLetter('a')
      .subscribe((response: any) => {
        this.drinks = response.drinks;
      });
  }

  searchByName(name: string) {
    if (this.jsonIn.name === '') {
      alert('Name is empty!');
      //TODO: disabled button
    }
    else {
      this.startBlockUI();
      this.apiService.searchCocktailByName(name)
        .subscribe((response: any) => {
          this.drinks = response.drinks;
          this.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink))
        })
    }
  }

  onCardSelectChange(drinks: any, $event: boolean) {
    drinks.selected = $event;
    if ($event === true) {
      this.selectedDrinks.push(drinks);
      this.count++;
    }
    else {
      // this.selectedDrinks = this.selectedDrinks.filter((el:any) => el !== this.selectedDrinks);
      const index = this.selectedDrinks.indexOf(drinks);
      this.selectedDrinks.splice(index, 1);
      this.count--;
    }
  }

}
