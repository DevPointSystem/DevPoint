import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor(private http: HttpClient) { }


  GetProduitActif(){
    return this.http.get(`${environment.API_BASE_URL_ACHAT}/produit/actif?actif=true`);
  }

  GetUniteByCode(code :number){
    return this.http.get(`${environment.API_BASE_URL_ACHAT}/unite/`+code);
  }

  GetAllUnite(){
    return this.http.get(`${environment.API_BASE_URL_ACHAT}/unite/all`);
  }

}
