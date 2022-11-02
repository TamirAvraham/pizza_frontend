
import { PizzaServiceService } from './../pizza-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pizza, Size } from '../pizza/pizza';
import { CommonModule, Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-pizza-updater',
  templateUrl: './pizza-updater.component.html',
  styleUrls: ['./pizza-updater.component.css']
})
export class PizzaUpdaterComponent implements OnInit {

  
  @Input() pizza?:Pizza;
  NewPizza:Pizza={
   id:this.pizza?.id,
   name:this.pizza?.name!,
   price:this.pizza?.price!,
   size:this.pizza?.size!,
    toppings:this.pizza?.toppings!
  }
  onclick(){
    this.pizzaService.updatePizza(this.pizza!,this.NewPizza);

  }
  
  
  constructor(private pizzaService:PizzaServiceService) { }

  ngOnInit() {
    
    
  }

}
