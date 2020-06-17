import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  urlBase:string ="http://localhost:3000/api/mensaje/";

  constructor(private _http:HttpClient) { 
    
  }

  getMensaje():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }   
    return this._http.get(this.urlBase , httpOptions );
  }

  addMensaje(mensaje:Mensaje):Observable<any>{
    console.log("entro al service add mensaje"); 
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }; 
    var body = JSON.stringify(mensaje);
    return this._http.post(this.urlBase,body,httpOptions);
  }

}
