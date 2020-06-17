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
   listaPalabras:Array<Palabra>;

   nuevaPlabra : Palabra;

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
     this.listaPalabras = new Array<Palabra>();
     this.nuevaPlabra = new Palabra();
    }

  ngOnInit(): void {
  }

  AgregarPalabra(){

   this.palabraService.addPalabra(this.nuevaPlabra).subscribe(
    (result)=>{
       alert("Palabra Agregada");
    }, 
  (error)=>{
       console.log("error"+ error);
  });
  this.nuevaPlabra = new Palabra();
}

limpiarPalabraNueva(){
  this.nuevaPlabra = new Palabra();
}

 cargarListaPalabra(){
   this.listaPalabras = new Array<Palabra>();
   console.log("Entro a cargar lista de palabras");
  this.palabraService.getPalabrasByCategory(this.categoria).subscribe(
    (result)=>{
      var p: Palabra = new Palabra();
      result.forEach(element => {
        Object.assign(p,element);
        this.listaPalabras.push(p);
        p = new Palabra();
        });
       }, 
     (error)=>{
       console.log("error"+ error);
   });

 }

 seleccionarObjetoPalabra(){
   console.log("entro a seleccionar objecto palabra")
  var indice = Math.round(Math.random() * ((this.listaPalabras.length - 1) - 0) + 0 );
  this.palabra.palabraEspanol = this.listaPalabras[indice].palabraEspanol;
  this.palabra.palabraIngles = this.listaPalabras[indice].palabraIngles;
  this.palabra.urlImagen = this.listaPalabras[indice].urlImagen;
  this.palabra.categoria = this.listaPalabras[indice].categoria;
  return this.palabra;
}

  elegirPalabra(){
    console.log("entro a elegir palabra");
    this.limpiarCampos();
    this.palabra = this.seleccionarObjetoPalabra(); 
    this.palabraElegida = this.palabra.palabraIngles.split("");
  }


   formatearJuego(){
    this.vidas = 6;
    this.puntaje = 0;
    this.limpiarCampos();
    this.palabra = this.seleccionarObjetoPalabra(); 
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
