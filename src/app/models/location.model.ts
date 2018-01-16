import { Inverter } from './inverter.model';

export class Location {

    public _id
    public name: string;
    public adress: string;
    public inverters: Inverter[];
      
    constructor(name: string, adress: string, inverters: Inverter[]) {
        this.name = name;
        this.adress = adress;
        this.inverters = inverters;

    }
}  