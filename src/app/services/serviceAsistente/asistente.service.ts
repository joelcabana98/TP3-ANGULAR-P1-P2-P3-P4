import { Injectable } from '@angular/core';
import { Asistente } from 'src/app/models/asistente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {
  urlBase:string ="http://localhost:3000/api/asistente/";
 
  listaContancias: Array<Asistente>;
  
  constructor(private _http:HttpClient) {
    this.listaContancias = new Array<Asistente>();
  }


  getConstancias():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }   
    return this._http.get(this.urlBase , httpOptions );
  }

  addConstancia(constancia:Asistente):Observable<any>{
    console.log("entro al service"); 
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }; 
    var body = JSON.stringify(constancia);
    return this._http.post(this.urlBase,body,httpOptions);
  }

  deleteConstancia(constancia:Asistente):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }   
    return this._http.delete(this.urlBase + constancia._id, httpOptions );
  }

  updateConstancia(constancia:Asistente):Observable<any>{
    //var idBorrar = this.puntosInteres.findIndex((item: PuntoInteres)=>item.id == punto.id);
    //this.puntosInteres.splice(idBorrar,1,punto);
    console.log("SERVICE UPDATE...."); 
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }; 
    var body = JSON.stringify(constancia);
    return this._http.put(this.urlBase + constancia._id,body,httpOptions);;
  }

}
