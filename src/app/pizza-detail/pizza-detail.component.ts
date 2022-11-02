import { PizzaServiceService } from './../pizza-service.service';
import { Pizza } from './../pizza/pizza';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  @Input() pizza?:Pizza;
  edit:boolean=false;
  GetPizza(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.pizza=this.pizzaService.getPizza(id);

  }
  Edit(){
    this.edit=true;
  }
  CloseEdit(){
    this.edit=false;
  }
  constructor(private route:ActivatedRoute,private pizzaService:PizzaServiceService) { }

  ngOnInit(): void {
  }

}
