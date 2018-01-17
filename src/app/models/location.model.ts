import { Inverter } from './inverter.model';

export class Location {

    public _id
    public name: string;
    public adress: string;
    public inverters = [];
      
    constructor(name: string, adress: string) {
        this.name = name;
        this.adress = adress;

    }
}  