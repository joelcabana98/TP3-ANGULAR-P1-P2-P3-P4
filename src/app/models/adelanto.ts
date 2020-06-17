export class Adelanto {
    _id:string;
    fecha:Date;
    cobrador:string;
    montoAdelanto:number;

   constructor(fecha?:Date,cobrador?:string,montoAdelanto?:number){
        this.fecha = fecha;
        this.cobrador = cobrador;
        this.montoAdelanto = montoAdelanto;
    }

}
