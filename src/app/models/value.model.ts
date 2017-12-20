export class Value {
    public property
    public value: any
    public isArray = false;

    constructor(property: String){
        this.property = property;
    }

    getValue():any {
        return this.value;
    }

    getProperty():String{
        return this.property;
    }

    addValue(value:any){
        if(this.isArray){
            this.value.push(value);
        }else{
            this.value = value;
        }
    }

    makeArray(){
        this.isArray = true;
        this.value = [];
    }

    
}