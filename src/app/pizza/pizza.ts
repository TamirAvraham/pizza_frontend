import { Topping } from './toping';
export enum Size{small=0.5,normal=1,xl=2,xxl=3}
export interface Pizza{
    price:number,
    size:Size,
    id?:string,
    name:string,
    toppings:Topping[]
    pngPath?:string

}
export function GetAllPizzas() {
    let res=fetch('http://192.168.14.155:6000/GetAllPizzas').then(res=>res.json())
    console.log(res)
}