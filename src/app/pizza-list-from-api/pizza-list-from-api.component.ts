import { GetAllPizzas, Pizza } from './../pizza/pizza';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-list-from-api',
  templateUrl: './pizza-list-from-api.component.html',
  styleUrls: ['./pizza-list-from-api.component.css']
})
export class PizzaListFromApiComponent implements OnInit {
  pizzas?:Pizza[];
  public getFunc(){GetAllPizzas()}
  constructor() { }

  ngOnInit(): void {
  }

}
