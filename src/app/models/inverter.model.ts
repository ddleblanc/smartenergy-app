export class Inverter {
    
    public _id
    SN: String
    DeviceName: String
    Online: Boolean
    Location: String
    DeviceModel: String
    DisplaySoftwareVersion: String
    MasterControlSoftwareVersion: String
    SlaveControlVersion: String
    alerts = []
    solarpanels = []

      
    constructor(name: string, location: string) {
        this.SN = name;
        this.Location = location;
    }
    
}  