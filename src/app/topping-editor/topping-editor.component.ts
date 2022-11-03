import { Component, Input, OnInit } from '@angular/core';
import { Topping } from '../pizza/toping';

@Component({
  selector: 'app-topping-editor',
  templateUrl: './topping-editor.component.html',
  styleUrls: ['./topping-editor.component.css']
})
export class ToppingEditorComponent implements OnInit {
  @Input() topping?:Topping

  NewTopping:Topping=new Topping(this.topping?.name!,this.topping?.price!,this.topping?.location!);
  
  onClick(){
    let NewTopping=Topping.CreateNewToppingFromObj(this.NewTopping);
    this.topping?.name!=NewTopping.name;
    this.topping?.price!=NewTopping.price;
    this.topping?.location!=NewTopping.location;
  }
  constructor() { }
  ngOnInit(): void {
    
  }

}
