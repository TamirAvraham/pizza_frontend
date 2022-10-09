import { Pizza } from './pizza/pizza';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaServiceService {
  pizzas:Pizza[]=[];
  addPizza(pizza:Pizza){
    this.pizzas.push(pizza)
  }
  ALLClear(){
    this.pizzas=[];
  }
  remove(remove:Pizza){
    this.pizzas=this.pizzas.filter((pizza)=>{
      return pizza!=remove;
    });
    
  }
  constructor() { }
}
