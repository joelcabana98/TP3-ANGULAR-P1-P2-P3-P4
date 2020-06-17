import { Component, OnInit } from '@angular/core';
import {Asistente} from '../../models/asistente';
import { AsistenteService } from 'src/app/services/serviceAsistente/asistente.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  asistente:Asistente;
  asistentes:Array<Asistente>;
  clients: Array<any>

  constancia:Asistente;
  listaConstancias:Array<Asistente>;

  constructor(private asistenteService:AsistenteService) { 
    this.asistente = new Asistente();
    this.asistentes = new Array<Asistente>();
    


    this.constancia = new Asistente();
    this.listaConstancias = new Array<Asistente>();
    this.refrescarPuntos();
  }

  guardarConstancia(){
     this.asistenteService.addConstancia(this.constancia).subscribe(
      (result)=>{
         alert("Constancia Guardada");
         this.refrescarPuntos();
      }, 
    (error)=>{
         console.log("error"+ error);
    })
    this.refrescarPuntos();
    this.constancia = new Asistente();
  }


  refrescarPuntos(){
    console.log("REFRESCANDO......");
    this.listaConstancias = new Array<Asistente>();
    this.asistenteService.getConstancias().subscribe(
      (result)=>{
        var consta: Asistente = new Asistente();
        result.forEach(element => {
          Object.assign(consta,element);
          this.listaConstancias.push(consta);
          consta = new Asistente();
          });
      },
      (error)=>{
        console.log(error);
      }
    )
  }
 
  borrarConstancia(constancia:Asistente){  
    this.asistenteService.deleteConstancia(constancia).subscribe(
      (result)=>{
        alert("Constancia Eliminada");
        this.refrescarPuntos();
      },
      (error)=>{
        console.log(error);
      }
    );

   // this.refrescarPuntos();
  }


  modificarConstancia(){
    this.asistenteService.updateConstancia(this.constancia).subscribe(
      (result)=>{
          alert("Constancia Modificada");
          this.refrescarPuntos();
      },
      (error)=>{
        console.log(error);
      }
    );
    this.constancia = new Asistente();
    //this.refrescarPuntos();
  }

  elegirConstancia(constancia:Asistente){
   // constancia.sector = this.sectores.find(element=>element._id == punto.sector._id);
    //this.constancia = constancia;
   // console.log("contancia: "+ this.constancia.requiereConstancia);

    var tconstancia = new Asistente();
    Object.assign(tconstancia,constancia);
    this.constancia = tconstancia
 
  }


  public registrarAsistente(){
    this.asistentes.push(this.asistente);
    this.asistente = new Asistente();
  }

  limpiarCampos(){
    this.constancia = new Asistente();
  }



  ngOnInit(): void {
  }
}
