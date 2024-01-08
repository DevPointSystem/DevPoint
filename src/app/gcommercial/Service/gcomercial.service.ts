import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class GcomercialService {

  constructor(private http: HttpClient) { }

  GetProduitActif() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}produit/actif?actif=true`);
  }
  GetProduitInActif() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}produit/actif?actif=false`);
  }

  GetUniteByCode(code: number) {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}unite/` + code);
  }

  GetAllUnite() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}unite/all`);
  }

  GetAllMarqueActif() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}marque/actif?actif=true`);
  }


  GetAllNatureProduitActif() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}nature_produit/actif?actif=true`);
  }


  GetAllComposantActif() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}composant/actif?actif=true`);
  }

  GetAllComposantInActif() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}composant/actif?actif=false`);
  }

  GetComposantByCode(code: number) {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}composant/` + code);
  }



  GeColorisActif() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}coloris/actif?actif=true`);
  }

  GeColorisByCode(code : number) {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}coloris/`+code);
  }

  GeColorisInActif() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}coloris/actif?actif=false`);
  }

  PostColoris(body :any) {
    return this.http.post(`${environment.API_BASE_URL_ACHAT}coloris/coloris`,body);
  }

  PutColoris(body :any) {
    return this.http.put(`${environment.API_BASE_URL_ACHAT}coloris/update`,body);
  }

  DeleteColoris(code :any) {
    return this.http.delete(`${environment.API_BASE_URL_ACHAT}coloris/delete/`+code);
  }
}
