import { RestResponce } from './pizza/RestResponce';
import { Pizza } from './pizza/pizza';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, tap,of } from 'rxjs';
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
    let ret=this.http.get<RestResponce>(`${this.url}GetAllPizzas`,this.httpOptions);
    console.log(`${ret}`)
    console.log("fuck my life they both sucked");
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Credentials':'true' })
  };
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      
      console.error(error); // log to console instead

      
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(private http:HttpClient) { }
}