import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  add:boolean=false;
  True(){
    this.add=true;
    console.log(this.add);
    
  }
  False(){
    this.add=false;
    console.log(this.add);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
