import { Adelanto } from './adelanto';

export class Pasaje {

    _id:string;
  dniPasajero:number;
  precioPasaje:number;
  categoriaPasajero:string;
  fechaCompra:Date;
  adelantos: Array<Adelanto> = new Array<Adelanto>();

  constructor(dniPasajero?:number,precioPasaje?:number,categoriaPasajero?:string,fechaCompra?:Date){
      this.dniPasajero = dniPasajero;
      this.precioPasaje = precioPasaje;
      this.categoriaPasajero = categoriaPasajero;
      this.fechaCompra = fechaCompra;
  }


}
