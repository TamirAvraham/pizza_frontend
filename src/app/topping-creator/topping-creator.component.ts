import { Topping } from './../pizza/toping';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topping-creator',
  templateUrl: './topping-creator.component.html',
  styleUrls: ['./topping-creator.component.css']
})
export class ToppingCreatorComponent implements OnInit {
  topping:Topping=Topping.baseTopping();
  constructor() { }
  
  ngOnInit(): void {
  }

}
