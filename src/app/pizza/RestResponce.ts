export class RestResponce{
    ID:string;
    Message:string;
    Data:Map<string,any>;
    log(){
        console.log(`id:${this.ID} message:${this.Message} data:${this.Data}`);
        
    }
    constructor(id:string,message:string,data:Map<string,any>) {
        this.ID=id;
        this.Data=data;
        this.Message=message;

    }
}