export class Cedear {

     nombre: string;
     simbolo: string;
     variacion: number;
     precioApertura: number;
     precioCierre:number;
     fecha:Date;

     Cedear(nombre: string,simbolo: string,variacion: number,precioApertura: number, precioCierre:number,fecha:Date)
     {
        this.nombre = nombre;
        this.simbolo = simbolo;
        this.variacion = variacion;
        this.precioApertura = precioApertura;
        this.precioCierre = precioCierre;
        this.fecha = fecha;
     }


}
