import { Pizza } from './pizza/pizza';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PizzaServiceService {
  pizzas:Pizza[]=[];
  url='http://127.0.0.1:8080/'
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
    console.log(`${ret.pipe(tap(ogaboga=>console.log("got this shit")))}`);
    ret.pipe(tap(ogaboga=>console.log("got this shit")));
    ret.pipe(tap(pizzas=>pizzas.forEach((v,k)=>console.log(`${k}:${v}`))));
    console.log("fuck my life they both sucked");
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Credentials':'true' })
  };
  constructor(private http:HttpClient) { }
}