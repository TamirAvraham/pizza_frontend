
export enum Location{Eight=100/8,Quoter=0.25,Half=0.5,All=0}
export class Topping{
    name:string;
    price:number;
    location:number;
    public ToString(){
        return `${this.name}  ${this.price}₪`;
    }
    public static CreateNewToppingFromObj(ogj:object):Topping{
        type key=keyof typeof ogj
        let name=ogj['name' as key] as string;
        let price=parseFloat(ogj['price' as key] as string);
        let loc=parseFloat(ogj['location' as key] as string);
        return new Topping(name,price,loc);
    }
    public static baseTopping(){
        return new Topping('base',-1,0.1);
    }
    constructor(name:string,price:number,loc:number){
        this.name=name;
        this.price=price;
        this.location=loc;
    }
    
    
}
