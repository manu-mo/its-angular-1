import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DrinkComponent } from './drink/drink.component';
import { SearchComponent } from './search/search.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'drink/:idDrink', component: DrinkComponent },
  { path: 'ingredient/:ingredientName', component: IngredientComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
