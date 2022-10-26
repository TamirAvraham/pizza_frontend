
import { Component, OnInit } from '@angular/core';
import { Pizza, Size } from '../pizza/pizza';

@Component({
  selector: 'app-pizza-creater',
  templateUrl: './pizza-creater.component.html',
  styleUrls: ['./pizza-creater.component.css']
})
export class PizzaCreaterComponent implements OnInit {
  public SizeEnum=Size;
  public Size=Size.small;
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
  constructor() { }

  ngOnInit(): void {
  }

}
