import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DrinkComponent } from './drink/drink.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { CardDrinkComponent } from './shared/card-drink/card-drink.component';
import { OrdersComponent } from './orders/orders.component';
import { ListDrinkComponent } from './shared/list-drink/list-drink.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinkComponent,
    SearchComponent,
    LoginComponent,
    IngredientComponent,
    CardDrinkComponent,
    OrdersComponent,
    ListDrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
