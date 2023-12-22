import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor(private http: HttpClient) { }


  GetProduitActif() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}produit/actif?actif=true`);
  }

  GetUniteByCode(code: number) {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}unite/` + code);
  }

  GetAllUnite() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}unite/all`);
  }

  GetAllOfActif() {
    return this.http.get(`${environment.API_BASE_URL_ACHAT}of/actif?actif=true`);
  }

  GetOFBySatisfactionComp(){
    return this.http.get(`${environment.API_BASE_URL_ACHAT}of/satisfaction?satisfaction=COMP`);
  }

  GetOFBySatisfactionPART(){
    return this.http.get(`${environment.API_BASE_URL_ACHAT}of/satisfaction?satisfaction=PART`);
  }

  GetOFBySatisfactionNONE(){
    return this.http.get(`${environment.API_BASE_URL_ACHAT}of/satisfaction?satisfaction=NONE`);
  }

  GetOFByDetailsOrderFabricationByCode(codeOF: any){
    return this.http.get(`${environment.API_BASE_URL_ACHAT}details_order_fabrication/codeOf?codeOf=`+codeOF);
  }

  GetDetailsUniteByCode(code: any){
    return this.http.get(`${environment.API_BASE_URL_ACHAT}unite/`+code);
  }


}
