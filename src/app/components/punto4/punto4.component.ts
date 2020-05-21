import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/models/palabra';
import { PalabraService } from 'src/app/service/palabra.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
   palabra:Palabra;
   palabraElegida:Array<any>;
   palabraIngresada:Array<any>;
   categoria:string;
   
   principal:boolean;
   mostrar:boolean;
   vidas:number;
   puntaje:number;
  constructor(private palabraService: PalabraService) {
     this.vidas = 6;
     this.puntaje = 0;
     this.palabra = new Palabra();
     this.palabraIngresada = new Array<any>();
     this.mostrar = false;
     this.principal = false;
    }

  ngOnInit(): void {
  }


  elegirPalabra(){
    this.limpiarCampos();
    this.palabra = this.palabraService.seleccionarObjetoPalabra(this.categoria); 
    this.palabraElegida = this.palabra.palabraIngles.split("");
  }


   formatearJuego(){
    this.vidas = 6;
    this.puntaje = 0;
    this.limpiarCampos();
    this.palabra = this.palabraService.seleccionarObjetoPalabra(this.categoria); 
    this.palabraElegida = this.palabra.palabraIngles.split("");
    this.principal = true;
    this.mostrar = false;
  }

  validarLetraIngresada(){ 
    console.log(this.palabraIngresada);
   if(this.vidas >0){
        for(var i=0; i< this.palabraElegida.length;i++){
            if(this.palabraIngresada[i] != undefined){
              if(this.palabraIngresada[i] != ''){
                    if(this.palabraElegida[i] != this.palabraIngresada[i]){
                      this.vidas --;
                    }
              }

            } 
          }
          this.palabraCorrecta();
   }else{
    this.juegoTerminado();
   }
  }

  juegoTerminado(){
    this.mostrar = true;
    this.principal = false;
  }


  palabraCorrecta(){
    if(JSON.stringify(this.palabraElegida)==JSON.stringify(this.palabraIngresada)){
      this.puntaje = this.puntaje + 1;
      this.limpiarCampos();
      this.elegirPalabra();
    } 
  }


  limpiarCampos(){
    this.palabraIngresada = new Array<any>();
    this.palabraElegida = new Array<any>();
    this.palabra = new Palabra();
  }

  


}
