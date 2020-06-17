import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {
  urlBase:string ="http://localhost:3000/api/palabra/";

  constructor(private _http:HttpClient) {
   }


   getPalabrasByCategory(categoria:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      })
    }   
    return this._http.get(this.urlBase+categoria , httpOptions );
  }

  addPalabra(palabra:Palabra):Observable<any>{
    console.log("entro al service add palabra"); 
    const httpOptions  = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    var body = JSON.stringify(palabra);
    return this._http.post(this.urlBase,body,httpOptions);
  }

  
}
