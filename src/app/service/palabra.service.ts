import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {
  palabra:Palabra;
  palabras:Array<Palabra>;

  palabrasTematica:Array<Palabra>;

  constructor() {
    this.palabras = new Array<Palabra>();
    this.palabrasTematica = new Array<Palabra>();
    this.cargarPalabras();
   }

  
   seleccionarObjetoPalabra(p:string){
      this.palabra = new Palabra();
  
      this.palabrasTematica = new Array<Palabra>();

      for(var i=0; i < this.palabras.length; i++){
          if(this.palabras[i].categoria == p){
              this.palabrasTematica.push(this.palabras[i]);  
           }
      }

      var indice = Math.round(Math.random() * (10 - 0) + 0 );
      this.palabra.palabraEspanol = this.palabrasTematica[indice].palabraEspanol;
      this.palabra.palabraIngles = this.palabrasTematica[indice].palabraIngles;
      this.palabra.urlImagen = this.palabrasTematica[indice].urlImagen;
      this.palabra.categoria = this.palabrasTematica[indice].categoria;

      return this.palabra;
   }

  
    cargarPalabras(){
      this.palabra = new Palabra();
      this.palabra.palabraIngles = "cycling";
      this.palabra.palabraEspanol ="ciclismo";
      this.palabra.urlImagen = "ciclismo.jpg";
      this.palabra.categoria = "deportes";
    
      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "tennis";
      this.palabra.palabraEspanol ="tenis";
      this.palabra.urlImagen = "tennis.jpg";
      this.palabra.categoria = "deportes";
      this.palabra.categoria = "deportes";

      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "swimming";
      this.palabra.palabraEspanol ="natación";
      this.palabra.urlImagen = "natacion.jpg";
      this.palabra.categoria = "deportes";

    
      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "boxing";
      this.palabra.palabraEspanol ="boxeo";
      this.palabra.urlImagen = "boxeo.jpg";
      this.palabra.categoria = "deportes";

    
      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "basketball";
      this.palabra.palabraEspanol ="basket";
      this.palabra.urlImagen = "basket.jpg";
      this.palabra.categoria = "deportes";

    
      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "rugby";
      this.palabra.palabraEspanol ="rugby";
      this.palabra.urlImagen = "rugby.jpg";
      this.palabra.categoria = "deportes";
    
      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "baseball";
      this.palabra.palabraEspanol ="beisbol";
      this.palabra.urlImagen = "beisbol.jpg";
      this.palabra.categoria = "deportes";
    
      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "football";
      this.palabra.palabraEspanol ="futbol";
      this.palabra.urlImagen = "futbol.jpg";
      this.palabra.categoria = "deportes";
    
      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      
      this.palabra = new Palabra();
      this.palabra.palabraIngles = "hiking";
      this.palabra.palabraEspanol ="senderismo";
      this.palabra.urlImagen = "senderismo.jpg";
      this.palabra.categoria = "deportes";
    
      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "karate";
      this.palabra.palabraEspanol ="karate";
      this.palabra.urlImagen = "karate.jpg";
      this.palabra.categoria = "deportes";
    
      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "skating";
      this.palabra.palabraEspanol ="patinar";
      this.palabra.urlImagen = "patinar.jpg";
      this.palabra.categoria = "deportes";
    
      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      //ANIMALES

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "dog";
      this.palabra.palabraEspanol ="perro";
      this.palabra.urlImagen = "perro.jpg";
      this.palabra.categoria = "animales";

      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "cat";
      this.palabra.palabraEspanol ="gato";
      this.palabra.urlImagen = "gato.jpg";
      this.palabra.categoria = "animales";

      this.palabras.push(this.palabra);

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "cow";
      this.palabra.palabraEspanol ="vaca";
      this.palabra.urlImagen = "vaca.jpg";
      this.palabra.categoria = "animales";

      this.palabras.push(this.palabra);

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "sheep";
      this.palabra.palabraEspanol ="oveja";
      this.palabra.urlImagen = "oveja.jpg";
      this.palabra.categoria = "animales";

      this.palabras.push(this.palabra);

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "rabbit";
      this.palabra.palabraEspanol ="conejo";
      this.palabra.urlImagen = "conejo.jpg";
      this.palabra.categoria = "animales";

      this.palabras.push(this.palabra);

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "duck";
      this.palabra.palabraEspanol ="pato";
      this.palabra.urlImagen = "pato.jpg";
      this.palabra.categoria = "animales";

      this.palabras.push(this.palabra);

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "pig";
      this.palabra.palabraEspanol ="cerdo";
      this.palabra.urlImagen = "cerdo.jpg";
      this.palabra.categoria = "animales";

      this.palabras.push(this.palabra);

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "chicken";
      this.palabra.palabraEspanol ="pollito";
      this.palabra.urlImagen = "pollito.jpg";
      this.palabra.categoria = "animales";

      this.palabras.push(this.palabra);

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "mouse";
      this.palabra.palabraEspanol ="raton";
      this.palabra.urlImagen = "raton.jpg";
      this.palabra.categoria = "animales";

      this.palabras.push(this.palabra);

      this.palabra = new Palabra();
      this.palabra.palabraIngles = "wolf";
      this.palabra.palabraEspanol ="lobo";
      this.palabra.urlImagen = "lobo.jpg";
      this.palabra.categoria = "animales";

      this.palabras.push(this.palabra);
      this.palabra = new Palabra();

      this.palabra.palabraIngles = "wolf";
      this.palabra.palabraEspanol ="lobo";
      this.palabra.urlImagen = "lobo.jpg";
      this.palabra.categoria = "animales";

      this.palabras.push(this.palabra);
      this.palabra = new Palabra();
      

    }

}
