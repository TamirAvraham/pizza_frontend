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
  pizza?:Pizza;
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
  updatePizza(OldPizza:Pizza,NewPizza:Pizza){
    let ret=this.http.put<Object>(`${this.url}UpdatePizza/${NewPizza.id}`,JSON.stringify(NewPizza),this.httpOptions);
    ret.subscribe(res=>console.log(res));
  }
  getPizza(id:string){
    for (const Pizza of this.pizzas) {
      if (Pizza.id===id) {
        return Pizza;
      }
      console.log(Pizza.id);
      console.log(Pizza);
      
    }
    return undefined;
  }
  getPizzaFromServer(id:string){
    let ret=this.http.get<Object>(`${this.url}GetPizza/${id}`,this.httpOptions);
    let retVal:Pizza={
      name:"null",
      price:-1,
      size:0.25,
      toppings:[]
    };
    ret.subscribe(responce=>{
      
        type ObjectKey = keyof typeof responce;
        
        console.log(responce['data' as ObjectKey]);
        let arr=responce['data' as ObjectKey];
        
        let data=arr['data' as ObjectKey];
        console.log(data);
        

        
        
          let toppings:Topping[]=[];
          for (const top of data['toppings' as ObjectKey] as unknown as Array<Object>) {
            toppings.push(this.ToppingFromObj(top))
          }
          let piz:Pizza={
              id:data['id' as ObjectKey] as unknown as string,
              price:data['price'as ObjectKey] as unknown as number,
              name:data['name'as ObjectKey] as unknown as string,
              pngPath: data['png_path'as ObjectKey] as unknown as string!='none'?data['png_path'as ObjectKey] as unknown as string:undefined,
              size:data['size'as ObjectKey] as unknown as number,
              toppings:toppings
            }
          console.log(piz);
            
          this.pizza=piz;
          
          
          
         
    });
    
    return retVal;
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
        

        let temp:Pizza[]=[];
        for (const pizza of data) {
          let toppings:Topping[]=[];
          for (const top of pizza['toppings']) {
            toppings.push(this.ToppingFromObj(top))
          }
          let piz:Pizza={
              id:pizza['id'],
              price:pizza['price'],
              name:pizza['name'],
              pngPath: pizza['png_path']!='none'?pizza['png_path']:null,
              size:pizza['size'],
              toppings:toppings
            }
          temp.push(piz);
          
          
          
          console.log(pizza['name' as ObjectKey]);
        }
        this.pizzas=this.uniqByReduce<Pizza>(temp);
        console.log(this.pizzas)
        
      })
    } catch (error) {
      console.log(error);
        
    }
    
    
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Credentials':'true' })
  };
  private uniqByReduce<T>(array: T[]): T[] {
    return array.reduce((acc: T[], cur: T) => {
        if (!acc.includes(cur)) {
            acc.push(cur);
        }
        return acc;
    }, [])
}
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