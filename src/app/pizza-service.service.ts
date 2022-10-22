import { RestResponce } from './pizza/RestResponce';
import { Pizza, Size } from './pizza/pizza';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, tap,of } from 'rxjs';
import { Topping, Location } from './pizza/toping';
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
    let ret=this.http.get<Map<string,any>>(`${this.url}GetAllPizzas`,this.httpOptions);
    
    try {
      
      ret.subscribe(res=>{
        let responce:Object=res;
        type ObjectKey = keyof typeof responce;
        
        console.log(responce['data' as ObjectKey]);
        let arr=responce['data' as ObjectKey];
        
        let data=arr['data' as ObjectKey] as unknown as Array<any>;
        

        
        for (const pizza of data) {
          let toppings:Topping[]=[];
          for (const top of pizza['toppings']) {
            toppings.push(this.ToppingFromObj(top))
          }
          this.addPizza({
              price:pizza['price' as ObjectKey],
              name:pizza['name'],
              size:pizza['size'],
              toppings:toppings})
          console.log(pizza['name' as ObjectKey]);
        }
        console.log(this.pizzas)
        
      })
    } catch (error) {
      console.log(error);
        
    }
    
    
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Credentials':'true' })
  };
  private ToppingFromObj(obj:object){
    
    type ObjectKey = keyof typeof obj;
    return new Topping(obj['name' as ObjectKey],obj['price' as ObjectKey],obj['location' as ObjectKey])
  }
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