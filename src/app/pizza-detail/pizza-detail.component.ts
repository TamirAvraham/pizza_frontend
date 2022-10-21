import { Pizza } from './../pizza/pizza';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  @Input() pizza?:Pizza;
  constructor() { }

  ngOnInit(): void {
  }

}
