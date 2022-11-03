import { PizzaServiceService } from './../pizza-service.service';

import { Component, OnInit } from '@angular/core';
import { Pizza, Size } from '../pizza/pizza';
import { Topping } from '../pizza/toping';

@Component({
  selector: 'app-pizza-creater',
  templateUrl: './pizza-creater.component.html',
  styleUrls: ['./pizza-creater.component.css']
})
export class PizzaCreaterComponent implements OnInit {
  public tostr(){
    console.log("Pizza name:%s,price:%f,Size:%d,toppings:%d",this.pizza.name,this.pizza.price,this.pizza.size,this.pizza.toppings)
  }
  pizza:Pizza={
    price:69.9,
    name:"peperoni pizza",
    size:Size.normal,
    toppings:[],
    pngPath:"https://th.bing.com/th/id/OIP.CAcetvx4AqSwEsKHi-Yq5gHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    
  }
  constructor(private pizzaService:PizzaServiceService) { }

 private CompToPizza(obj:object):Pizza{
  type key=keyof typeof obj;
  let name=obj['name' as key] as string;
  let price=parseFloat(obj['price' as key]);
  let size=parseInt(obj['size' as key]);
  let toppings=this.CompToppings(this.pizza.toppings)
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
  newTopping(){
    this.pizza.toppings.push(Topping.baseTopping());
    console.log(this.pizza.toppings);
    
  }
  onSubmit(){
    let sendPizza=this.CompToPizza(this.pizza);
    console.log(sendPizza);
    
    this.pizzaService.AddPizza(sendPizza);
  }
  ngOnInit(): void {
  }

}
