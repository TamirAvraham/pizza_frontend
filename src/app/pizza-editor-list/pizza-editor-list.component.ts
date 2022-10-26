import { PizzaServiceService } from './../pizza-service.service';
import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza/pizza';

@Component({
  selector: 'app-pizza-editor-list',
  templateUrl: './pizza-editor-list.component.html',
  styleUrls: ['./pizza-editor-list.component.css']
})
export class PizzaEditorListComponent implements OnInit {
  pizzas:Pizza[]=[]
  getPizzas(){
    this.pizzaService.getAllPizzas();
    this.pizzas=this.pizzaService.pizzas;
  }
  constructor(private pizzaService:PizzaServiceService) { }

  ngOnInit(): void {
  }

}
