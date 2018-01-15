<<<<<<< HEAD:src/app/models/energyGain.model.ts
export class EnergyGain {

=======
export class MasterData {
    
>>>>>>> origin/development:src/app/models/masterData.model.ts
    public _id
    public name: string;
    public energy: number;
    public time : string;
<<<<<<< HEAD:src/app/models/energyGain.model.ts

=======
    public raw = []
      
>>>>>>> origin/development:src/app/models/masterData.model.ts
    constructor(name: string, energy: number,time :string) {
        this.name = name;
        this.energy = energy;
        this.time = time;

        

    }
}
