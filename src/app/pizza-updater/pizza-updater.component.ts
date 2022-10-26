import { Location } from './../pizza/toping';
import { PizzaServiceService } from './../pizza-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pizza, Size } from '../pizza/pizza';

import { Topping } from '../pizza/toping';

@Component({
  selector: 'app-pizza-updater',
  templateUrl: './pizza-updater.component.html',
  styleUrls: ['./pizza-updater.component.css']
})
export class PizzaUpdaterComponent implements OnInit {

  public SizeEnum=Size;
  public Size=Size.small;
  public tostr(){
    console.log("Pizza name:%s,price:%f,Size:%d,toppings:%d",this.pizza!.name,this.pizza!.price,this.pizza!.size,this.pizza!.toppings);
  }
  @Input() pizza?:Pizza={
    price:5.5,
    name:"pizza peperoni",
    size:Size.normal,
    toppings:[new Topping("peperoni",3.5,Location.Half), new Topping("olives",3.5,Location.Half)]
    

  };
  NewPizza:Pizza={
   id:this.pizza?.id,
   name:"Base Name",
   price:-1,
   size:0.1,
    toppings:[]
  }
  onclick(){
    this.pizzaService.updatePizza(this.pizza!,this.NewPizza);

  }
  constructor(private pizzaService:PizzaServiceService) { }

  ngOnInit(): void {
  }

}
