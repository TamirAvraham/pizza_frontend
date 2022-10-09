import { Location, Topping } from './toping';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Pizza, Size } from './pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input() pizza:Pizza={
    price:5.5,
    name:"pizza peperoni",
    size:Size.normal,
    toppings:[new Topping("peperoni",3.5,Location.Half), new Topping("olives",3.5,Location.Half)]
    

  };
  constructor() {}
    ngOnInit(): void {
  }

}
