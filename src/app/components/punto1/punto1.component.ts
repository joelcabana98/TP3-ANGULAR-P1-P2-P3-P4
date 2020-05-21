import { Component, OnInit,NgModule } from '@angular/core';
//import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{Mensaje} from '../../models/mensaje';



@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})


export class Punto1Component implements OnInit {
  mensaje:Mensaje;
  tamMax:number;
  tamText:number;

  constructor() {
       this.mensaje = new Mensaje();
       this.tamMax = 130;
       this.tamText = this.tamMax;
   }

   

  ngOnInit(): void {
  }
 

  public cambiarTamanioText(){
    this.tamText = this.tamMax - this.mensaje.texto.length;
  }

  public enviarMensaje(){
    console.log(this.mensaje.de +"  "+ this.mensaje.para + "  " +this.mensaje.texto );
  }

  public limpiarMensaje(){
    this.mensaje = new Mensaje();
    this.tamText = this.tamMax;
  }

}

