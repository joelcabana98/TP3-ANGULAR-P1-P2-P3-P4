export class Pasaje {
 idPasaje:number;
 dniPasajero:number;
 precioPasaje:number;
 categoriaPasajero:string;
 fechaCompra:Date;


 Pasaje(idPasaje:number,dniPasajero:number,precioPasaje:number,categoriaPasajero:string,fechaCompra:Date){
     this.idPasaje= idPasaje;
     this.dniPasajero = dniPasajero;
     this.precioPasaje = precioPasaje;
     this.categoriaPasajero = categoriaPasajero;
     this.fechaCompra = fechaCompra;
 }


}
