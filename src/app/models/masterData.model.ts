export class MasterData {
    
    public _id
    public name: string;
    public energy: number;
    public time : string;
    public raw = []
      
    constructor(name: string, energy: number,time :string) {
        this.name = name;
        this.energy = energy;
        this.time = time;
    }
}  