import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  listaPasaje:Array<Pasaje>;

  constructor() {
    this.listaPasaje = new Array<Pasaje>();
   }



  getPasaje(){
     return this.listaPasaje;
  }

  addPasaje(pasaje:Pasaje){
    console.log("entro a add puntos service");
    pasaje.idPasaje = this.getIdDisponible();
    this.listaPasaje.push(pasaje);
    console.log("saliendo de add puntos service");
  }

  deletePasaje(pasaje:Pasaje){
    var idBorrar = this.listaPasaje.findIndex((item: Pasaje)=>item.idPasaje == pasaje.idPasaje);
    this.listaPasaje.splice(idBorrar,1);
  }

  updatePasaje(pasaje:Pasaje){
    var idBorrar = this.listaPasaje.findIndex((item: Pasaje)=>item.idPasaje == pasaje.idPasaje);
    this.listaPasaje.splice(idBorrar,1,pasaje);
  }

  getIdDisponible(){
    var maxId: number;
    maxId = 0;

    for(var i = 0; i < this.listaPasaje.length;i++){
      if(maxId < this.listaPasaje[i].idPasaje){
        maxId = this.listaPasaje[i].idPasaje;
      }
    }
  return (maxId + 1);
  }
}
