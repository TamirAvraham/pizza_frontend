import { PizzaServiceService } from './../pizza-service.service';
import { GetAllPizzas, Pizza } from './../pizza/pizza';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-list-from-api',
  templateUrl: './pizza-list-from-api.component.html',
  styleUrls: ['./pizza-list-from-api.component.css']
})
export class PizzaListFromApiComponent implements OnInit {
  pizzas?:Pizza[]=this.pizzaService.pizzas;
  public getFunc(){
    this.pizzaService.getAllPizzas();
    this.pizzas=this.pizzaService.pizzas;
  }
  constructor(private pizzaService:PizzaServiceService) { }

  ngOnInit(): void {
    this.pizzaService.getAllPizzas();
    this.getFunc();
  }

}
