import { Component, OnInit } from '@angular/core';
import { Pasaje } from '../../models/pasaje';
import { PasajeService } from 'src/app/service/pasaje.service';
import { Adelanto } from 'src/app/models/adelanto';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
   pasaje:Pasaje;
   listaPasajes:Array<Pasaje>;
   adelanto:Adelanto;



   precioConDescuento:number;
   mostrar:boolean;
   mensajeError:boolean;

  constructor(private pasajeService:PasajeService) {
    this.pasaje = new Pasaje();
    this.pasaje.adelantos = new Array<Adelanto>();
    this.listaPasajes = new Array<Pasaje>();
    this.adelanto = new Adelanto();
    this.refrescarPasajes();

    this.mostrar = false;
    this.mensajeError = false;
   }


   guardarPasaje(){
     this.pasaje.fechaCompra = new Date();
     this.pasaje.precioPasaje = this.precioConDescuento;

     console.log("metodo guardar pasaje");
    this.pasajeService.addPasaje(this.pasaje).subscribe(
     (result)=>{
        alert("Pasaje Guardado");
       this.refrescarPasajes();
     }, 
   (error)=>{
        console.log("error"+ error);
   });
   this.pasaje = new Pasaje();
 }


 refrescarPasajes(){
   console.log("REFRESCANDO......");
   this.listaPasajes = new Array<Pasaje>();
   this.pasajeService.getPasajes().subscribe(
     (result)=>{
       var pasa: Pasaje = new Pasaje();
       result.forEach(element => {
         Object.assign(pasa,element);
         this.listaPasajes.push(pasa);
         pasa = new Pasaje();
         });
     },
     (error)=>{
       console.log(error);
     }
   )
 }

 borrarPasaje(pasaje:Pasaje){  
   this.pasajeService.deletePasaje(pasaje).subscribe(
     (result)=>{
       alert("Pasaje Eliminada");
       this.refrescarPasajes();
     },
     (error)=>{
       console.log(error);
     }
   );

  // this.refrescarPuntos();
 }


 modificarPasaje(){
   this.pasajeService.updatePasaje(this.pasaje).subscribe(
     (result)=>{
         alert("Pasaje Modificado");
         this.refrescarPasajes();
     },
     (error)=>{
       console.log(error);
     }
   );
   this.pasaje = new Pasaje();
   //this.refrescarPuntos();
 }

 


 agregarAdelanto(){
   var montoTotal =0 ;
    this.adelanto.fecha = new Date();
   for(var i =0 ; i< this.pasaje.adelantos.length;i++){
         montoTotal = montoTotal + this.pasaje.adelantos[i].montoAdelanto;
   }

   if(( montoTotal + this.adelanto.montoAdelanto) <= this.pasaje.precioPasaje){
          this.pasaje.adelantos.push(this.adelanto);
          this.adelanto = new Adelanto();
          this.modificarPasaje();
          this.mensajeError = false;
   }else {
    this.mensajeError = true;
   }
 }

 elimiarAdelanto(adelanto:Adelanto){
   var indice = this.pasaje.adelantos.findIndex((element)=> element._id == adelanto._id);
   this.pasaje.adelantos.splice(indice,1);
   
   this.modificarPasaje();
 }


  ngOnInit(): void {
  }

  
  /**asigna un valor a la variable que se usa en el ngIf */
  mostrarTotalDescuento(){
   if( (this.pasaje.precioPasaje != null) &&(this.pasaje.categoriaPasajero != null)){
     this.mostrar=true;
   }else{
     this.mostrar=false;
   }
  }

  realizarDescuento(){
    this.mostrarTotalDescuento();
    //25% de descuento
    if(this.pasaje.categoriaPasajero == "m"){
         this.precioConDescuento = this.pasaje.precioPasaje - (25*this.pasaje.precioPasaje/100);
     }else {
       //50% de descuento
       if(this.pasaje.categoriaPasajero == "j"){
        this.precioConDescuento = this.pasaje.precioPasaje - (50*this.pasaje.precioPasaje/100);
       }else{//descuento no aplica
         this.precioConDescuento = this.pasaje.precioPasaje;
       }
     }
  }

  elegirPasaje(pasaje:Pasaje){
    var tpasaje = new Pasaje();
    Object.assign(tpasaje,pasaje);
    this.pasaje = tpasaje;
  }


  limpiar(){
    this.pasaje = new Pasaje();
    this.precioConDescuento = null;
    this.mostrar = false;
  }


}
