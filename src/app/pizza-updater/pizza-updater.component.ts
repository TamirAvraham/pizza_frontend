
import { PizzaServiceService } from './../pizza-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pizza, Size } from '../pizza/pizza';
import { CommonModule, Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { Topping } from '../pizza/toping';



@Component({
  selector: 'app-pizza-updater',
  templateUrl: './pizza-updater.component.html',
  styleUrls: ['./pizza-updater.component.css']
})
export class PizzaUpdaterComponent implements OnInit {

  
  @Input() pizza?:Pizza;
  NewPizza:Pizza={
   id:this.pizza?.id!,
   name:this.pizza?.name!,
   price:this.pizza?.price!,
   size:this.pizza?.size!,
    toppings:this.pizza?.toppings!
  }
  onclick(){
    console.log(`pizza id:${this.pizza?.id} NewPizza id:${this.NewPizza.id}`);
    console.log("bla bla");
    
    this.NewPizza=this.CompToPizza(this.NewPizza);
    console.log('new pizza is:');
    console.log(this.NewPizza);
    this.pizzaService.updatePizza(this.pizza!.id!,this.NewPizza);

  }
 private CompToPizza(obj:object):Pizza{
  type key=keyof typeof obj;
  let name=obj['name' as key] as string;
  let price=parseInt(obj['price' as key]);
  let size=parseInt(obj['size' as key]);
  let ret:Pizza={
    id:this.pizza?.id,
    name:name,
    price:price,
    size:size,
    toppings:obj['toppings' as key] as Topping[],
  };
  console.log(ret);
  return ret;
 } 
  
  constructor(private pizzaService:PizzaServiceService) { }

  ngOnInit() {
    
    
  }

}
