import { Component, OnInit } from '@angular/core';

import{Cedear} from '../../models/cedear';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cedear:Cedear;
  cedears:Array<Cedear>;
  
  constructor() {
       this.cedear = new Cedear();
       this.cedears= new Array<Cedear>();
       
       this.cedear.nombre = "apple";
       this.cedear.simbolo = "appl";
       this.cedear.precioApertura = 2500;
       this.cedear.precioCierre = 2650;
       this.cedear.variacion = 0.043;
       this.cedear.fecha = new Date();

       this.cedears.push(this.cedear);
       this.cedear = new Cedear();
       this.cedear.nombre = "adobe systems incorporated";
       this.cedear.simbolo = "adbe";
       this.cedear.precioApertura = 1650;
       this.cedear.precioCierre = 1570;
       this.cedear.variacion = -0.009;
       this.cedear.fecha = new Date();

       this.cedears.push(this.cedear);
       this.cedear = new Cedear();
       this.cedear.nombre = "mercado libre";
       this.cedear.simbolo = "meli";
       this.cedear.precioApertura = 850;
       this.cedear.precioCierre = 1090;
       this.cedear.variacion = 0.21;
       this.cedear.fecha = new Date();

       this.cedears.push(this.cedear);
      }


  ngOnInit(): void {
  }

}
