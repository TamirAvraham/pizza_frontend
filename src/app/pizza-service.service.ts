import { Pizza } from './pizza/pizza';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PizzaServiceService {
  pizzas:Pizza[]=[];
  url='http://192.168.14.155:6000/'
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
  getAllPizzas(){
    let ret=this.http.get<Map<string,any>>(`${this.url}GetAllPizzas`,this.httpOptions)
    ret.forEach((value)=>{value.forEach((v,k)=>{
      console.log(`${k}:${v}`)
    })

    })
     
    
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }
}