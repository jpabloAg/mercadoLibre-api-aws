import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MercadoLibreService {
  url:string = "https://api.mercadolibre.com/sites/MCO/search?&q=";
  constructor(private _http:HttpClient) { }

  getItems(item:any){
    let headers = new HttpHeaders().set('Type-content','aplication/json');
    return this._http.get(`${this.url}${item}`, { headers });
  }
}
