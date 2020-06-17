import { Component, OnInit,NgModule } from '@angular/core';
//import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{Mensaje} from '../../models/mensaje';
import { MensajeService } from 'src/app/services/serviceMensaje/mensaje.service';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/serviceEmpresa/empresa.service';



@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})


export class Punto1Component implements OnInit {
  mensaje:Mensaje;
  tamMax:number;
  tamText:number;

  listaEmpresas: Array<Empresa>;

  constructor(private mensajeService:MensajeService,private empresaService:EmpresaService) {
       this.mensaje = new Mensaje();
       this.tamMax = 130;
       this.tamText = this.tamMax;

       this.listaEmpresas = new Array<Empresa>();
       this.reflescarEmpresas();
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


  guardarConstancia(){
    this.mensaje.fecha = new Date();
    this.mensajeService.addMensaje(this.mensaje).subscribe(
     (result)=>{
        alert("Mensaje Guardada");
     }, 
   (error)=>{
        console.log("error"+ error);
   })
   this.mensaje = new Mensaje();
 }


 reflescarEmpresas(){
  this.listaEmpresas = new Array<Empresa>();
  this.empresaService.getEmpresas().subscribe(
    (result)=>{
        var vempresa: Empresa = new Empresa();
        result.forEach(element => {
          Object.assign(vempresa,element);
          this.listaEmpresas.push(vempresa);
          vempresa = new Empresa();
        });
    },
    (error)=>{
      console.log(error);
    }
  )
}
  


}

