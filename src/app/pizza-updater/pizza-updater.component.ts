
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
    this.NewPizza=this.CompToPizza(this.NewPizza);
    console.log('new pizza is:');
    console.log(this.NewPizza);
    this.pizzaService.updatePizza(this.pizza!.id!,this.NewPizza);
    this.pizzaService.ALLClear();
    this.pizzaService.getAllPizzas();

  }
 private CompToPizza(obj:object):Pizza{
  type key=keyof typeof obj;
  let name=obj['name' as key] as string;
  let price=parseFloat(obj['price' as key]);
  let size=parseInt(obj['size' as key]);
  let toppings=this.CompToppings(this.pizza?.toppings!)
  console.log(toppings);
  
  let ret:Pizza={
    id:this.pizza?.id,
    name:name,
    price:price,
    size:size,
    toppings:toppings,
  };
  console.log(ret);
  return ret;
 } 
  private CompToppings(objs:object[]){
    let ret:Topping[]=[]
    for (const obj of objs) {
      ret.push(Topping.CreateNewToppingFromObj(obj));
    }
    return ret;
    
  }
  constructor(private pizzaService:PizzaServiceService) { }

  ngOnInit() {
    
    console.log(this.NewPizza.toppings);
    
  }

}
