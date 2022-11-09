import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  searchByName(name: string) {
    if(this.jsonIn.name === '') {
      alert('Name is empty!');
      // FIXME: disabled button
    }
    else {
      this.apiService.searchCocktailByName(name)
      .subscribe( (response: any) => {
        this.drinks = response.drinks;
      })
    }
  }

  onCardSelectChange(drinks: any, $event: boolean) {
    console.log("drink", drinks, "selezionato?", $event);
    drinks.selected = $event;
    if($event) {
      this.selectedDrinks.push(drinks);    
    }
    else {
      this.selectedDrinks = this.selectedDrinks.filter((el:any) => el !== this.selectedDrinks);
    }
    console.log(this.selectedDrinks);
  }



}
