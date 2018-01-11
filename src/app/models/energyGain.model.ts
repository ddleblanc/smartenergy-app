export class EnergyGain {
    
    public _id
    public name: string;
    public energy: number;
    public time : string;
      
    constructor(name: string, energy: number,time :string) {
        this.name = name;
        this.energy = energy;
        this.time = time;
    }
}  