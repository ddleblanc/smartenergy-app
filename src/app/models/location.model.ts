import { Inverter } from './inverter.model';

export class Location {

    public _id
    public name: string;
    public inverters: Inverter[];
      
    constructor(name: string, inverters: Inverter[]) {
        this.name = name;
        this.inverters = inverters;

    }
}  