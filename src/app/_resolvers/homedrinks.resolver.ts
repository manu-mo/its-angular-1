import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Drink } from "../_models/drink.model";
import { ApiService } from "../_service/api.service";

@Injectable({ providedIn: 'root' })

export class HomedrinksResolver implements Resolve<Drink> {
    constructor(private service: ApiService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Drink> {
        return this.service.searchCocktailByFirstLetter(route.paramMap.get('letter')!);
    }
}