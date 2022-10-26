
import { PizzaServiceService } from './../pizza-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pizza, Size } from '../pizza/pizza';
import { Location } from '@angular/common';
import { Topping } from '../pizza/toping';
import { ActivatedRoute } from '@angular/router';

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
    toppings:[new Topping("peperoni",3.5,0.5), new Topping("olives",3.5,0.5)]
    

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
  
  GetPizza(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.pizza=this.pizzaService.getPizza(id);

  }
  goBack(){
    this.Loc.back();
  }
  constructor(private pizzaService:PizzaServiceService,private route:ActivatedRoute,private Loc:Location) { }

  ngOnInit(): void {
    this.GetPizza();
  }

}
