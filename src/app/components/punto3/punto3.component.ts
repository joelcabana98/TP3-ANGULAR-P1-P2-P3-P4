import { Component, OnInit } from '@angular/core';
import { Pasaje } from '../../models/pasaje';
import { PasajeService } from 'src/app/service/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
   pasaje:Pasaje;
   listaPasajes:Array<Pasaje>;


   precioConDescuento:number;
   filtro:string;
   listaFiltrada:Array<Pasaje>;
   precioTotal:number;
   mostrar:boolean;

  constructor(private pasajeService:PasajeService) {
    this.pasaje = new Pasaje();
    this.listaPasajes = new Array<Pasaje>();
    this.refrescarPasajes();

    this.listaFiltrada = new Array<Pasaje>();
    this.mostrar = false;
   }

  ngOnInit(): void {
  }

  /**en un array agrega los objetos que cumplan con la cateogira de pasaje seleccionada */
  filtrarPasajes(){
    this.precioTotal = null;
    this.listaFiltrada = new Array<Pasaje>();
     switch (this.filtro) {
                case "m":
                  this.filtroRecorrido(this.filtro);     
                    break;
                case "a":
                  this.filtroRecorrido(this.filtro);
                    break;
                case "j":
                  this.filtroRecorrido(this.filtro);
                    break;
                default:
                  this.listaFiltrada = this.listaPasajes;
                  for(var i=0;i< this.listaPasajes.length;i++){
                    this.precioTotal += this.listaPasajes[i].precioPasaje;
                  };
                  break;
   }           
  }

  filtroRecorrido(id:string){
    for(var i=0;i< this.listaPasajes.length;i++){
      if(this.listaPasajes[i].categoriaPasajero == id){
        this.listaFiltrada.push(this.listaPasajes[i]);
        this.precioTotal +=this.listaPasajes[i].precioPasaje;
      }           
     }

  }

  /**asigna un valor a la variable que se usa en el ngIf */
  mostrarTotalDescuento(){
   if( (this.pasaje.precioPasaje != null) &&(this.pasaje.categoriaPasajero != null)){
     this.mostrar=true;
   }else{
     this.mostrar=false;
   }
  }

  refrescarPasajes(){
    this.listaPasajes = this.pasajeService.getPasaje();
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

  guardarPasaje(){
    this.pasaje.precioPasaje = this.precioConDescuento;
    this.pasaje.fechaCompra = new Date();
    this.pasajeService.addPasaje(this.pasaje);
     this.limpiar();
    this.refrescarPasajes();
  }

  elegirPasaje(pasaje:Pasaje){
    this.pasaje = pasaje;
  }

  borrarPasaje(pasaje:Pasaje){
    this.pasajeService.deletePasaje(pasaje);
  }

  modificarPasaje(){
   this.pasajeService.updatePasaje(this.pasaje);
  }

  limpiar(){
    this.pasaje = new Pasaje();
    this.precioConDescuento = null;
    this.mostrar = false;
  }

}
