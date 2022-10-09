
export enum Location{Eight=100/8,Quoter=0.25,Half=0.5,All=0}
export class Topping{
    name:string;
    price:number;
    location:Location;
    public ToString(){
        return `${this.name}  ${this.price}₪`;
    }
    constructor(name:string,price:number,loc:Location){
        this.name=name;
        this.price=price;
        this.location=loc;
    }
}