import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import * as alterify from 'alertifyjs';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { GcomercialService } from '../Service/gcomercial.service';
@Component({
  selector: 'app-param-produit',
  templateUrl: './param-produit.component.html',
  styleUrls: ['./param-produit.component.css']
})
export class ParamProduitComponent implements OnInit {

  constructor(private gcomercial_service: GcomercialService) { }

  ngOnInit(): void {
    this.GetAllProduitActif();
  }

  clear(table: Table) {
    console.log("tab", table)
    table.clear();
  }

  OrderFabricationWithDetails = new Array<Produit>();
  GetAllProduitActif(): void {
    this.gcomercial_service.GetProduitActif().pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        } else {
          alterify.set('notifier', 'position', 'top-right');
          alterify.error(` ${error.error.message}` + " Parametrage Failed");
        }
        return throwError(errorMessage);
      })

    )
      .subscribe((data: any) => {
        this.OrderFabricationWithDetails = data
        this.searchTerm = '';
        this.check_actif = true
        this.check_inactif = false
        this.onRowUnselect(event);
      });
  }
  GetAllProduitInActif(): void {
    this.gcomercial_service.GetProduitInActif().pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        } else {
          alterify.set('notifier', 'position', 'top-left');
          alterify.error(` ${error.error.message}` + " Parametrage Failed");
        }
        return throwError(errorMessage);
      })

    )
      .subscribe((data: any) => {
        this.OrderFabricationWithDetails = data
        this.searchTerm = '';
        this.check_actif = true
        this.check_inactif = false
        this.onRowUnselect(event);
      });
  }
  check_actif = false;
  check_inactif = false;

  formHeader = "إضافة طلب شراء ";

  searchTerm = '';

  visibleModal: boolean = false;
  visDelete: boolean = false;
  code!: number | null;
  codeSaisie!: string;
  designation!: string;
  // CodeSaisie!: string;
  datePrevuLivr!: Date;
  actif!: boolean;
  codeOF !: string;
  CodeCommande!: string;
  produit !: string;
  codeMarque!: number;
  codeNatureProduit!: number;
  codeInst: any;
  unitess!: Unites[];

  sourceUnites!: Unites[];
  listUnitespushed = new Array<any>();
  listUnitesrslt = new Array<any>();


  sourceMarques!: Marques[];
  listMarquespushed = new Array<any>();
  listMarquesrslt = new Array<any>();


  sourceNatureProduit!: NatureProduit[];
  listNatureProduitpushed = new Array<any>();
  listNatureProduitrslt = new Array<any>();

  sourceComposant!: Composant[];
  listComposantpushed = new Array<any>();
  listComposantrslt = new Array<any>();


  selectedComposant: any;
  listDesigCompo = new Array<Composant>();

  Compo = new Array<any>();
  compteur: number = 0;



  countries  = new Array<Unites>();



  sourceColoris!: Coloris[];
  listColorispushed = new Array<any>();
  listColorisrslt = new Array<any>();


  onRowUnselect(event: any) {
    console.log('row unselect : ', event);
    // this.code = event.data = null;
    event.data = new Array<any>();
    event.data.code == null;
    // this.clearForm(event);
    this.removeSelection();
  }
  selectedRow: any;
  removeSelection() {
    this.selectedRow = null;
    console.log(this.selectedRow);
  }


  onRowSelect(event: any) {
    // let yesterday = new Date(event.data.datePrevuLivr);
    this.code = event.data.code;
    this.actif = event.data.actif;
    this.codeSaisie = event.data.codeSaisie;
    this.designation = event.data.designation;
    console.log('vtData : ', event);
  }

  public onOpenModal(mode: string) {
    this.visibleModal = false;
    this.visDelete = false;
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode == 'add') {
      button.setAttribute('data-target', 'modal');
      this.formHeader = "Nouveau Produit"
      // this.getAllUnitesModal(); 
      this.GetcomposantActif();
      this.GetUnitesActif();
      this.GetMarquesActif();
      this.GetNatureProduitActif();
      this.GetColorisActif();
      this.actif = false;
      this.visibleModal = true;
      this.code == undefined;


      // console.log(this.compteur);
      // console.log(this.Unitess);
      // console.log(this.listDesig);

    } else if (mode == 'edit') {


      if (this.selectedRow == null) {
        // alert("Choise A row Please");

        //  
        // this.onRowUnselect(event);
        alterify.set('notifier', 'position', 'top-left');
        this.visDelete = false;
        this.visibleModal = false;
        alterify.error("Choise A row Please");
      } else {
        this.visDelete = false;
        button.setAttribute('data-target', '#Modal');
        this.formHeader = "Modifier Produit"
        this.visibleModal = true;
        // this.getAllUnitesModal();
        // this.GetDetailsOrderFabrication();

      }

    }
    else
      if (mode == 'delete') {

        if (this.code == undefined) {
          // alert("Choise A row Please");

          // 
          this.onRowUnselect;
          alterify.set('notifier', 'position', 'top-left');
          alterify.error("Choise A row Please");
          this.visDelete = false;
          this.visibleModal = false;
        } else {

          {
            button.setAttribute('data-target', '#ModalDelete');
            this.formHeader = "Delete Produit"
            this.visDelete = true;

          }
        }

      }

  }


  clearForm(): void {
    this.code == undefined;
    this.designation = '';
    this.actif = false;
    this.codeSaisie = '';



    this.onRowUnselect(event);


  }


  PostComposant() {

    // // for (let y = 0; y < this.Compo.length; y++) {
    // //   this.GetDataFromTableEditor = {
    // //     codeUnites: this.listDesig[y].code, nomdemandeur: this.nomddeur, qtedde: this.listDesig[y].qtedde, designationarUnites: this.listDesig[y].designation,
    // //     designationenUnites: this.listDesig[y].designation, usercreate: this.userCreate, codedemandeur: this.codeFlDde
    // //   }
    // //   this.final.push(this.GetDataFromTableEditor);
    // // }

    // let body = {
    //   codeSaisie: this.codeSaisie,
    //   designation: this.designation,
    //   actif: this.actif,
    //   usercreate: "SoufienCreateCompo",
    //   codeUnite: this.nomddeur,
    //   detailsDdeAchatDTOS: this.final

    // }
    // if(this.listDesig.length == 0){
    //   alterify.set('notifier', 'position', 'top-left');
    //         alterify.error('Please Select Any Items');
    // }else{
    //   if (this.code != null) {
    //     body['code'] = this.code;

    //     // this.param_achat_service.GetModeReglementActifAndVisible().pipe(
    //     //   catchError((error: HttpErrorResponse) => {
    //     //     let errorMessage = '';
    //     //     if (error.error instanceof ErrorEvent) {
    //     //     } else {
    //     //       alterify.set('notifier', 'position', 'top-left');
    //     //       alterify.error(` ${error.error.message}`);
    //     //     }
    //     //     return throwError(errorMessage);
    //     //   })

    //     // ).subscribe(

    //     //   (res) => {
    //     //     alterify.set('notifier', 'position', 'top-left');
    //     //     alterify.success("update Success Saved");
    //     //     close();
    //     //     this.clearForm();
    //     //     this.ngOnInit();
    //     //     this.check_actif = true;
    //     //     this.check_inactif = false;
    //     //   }
    //     // );


    //   }
    //   else {
    //     this.param_achat_service.PostDdeAchat(body).pipe(
    //       catchError((error: HttpErrorResponse) => {
    //         let errorMessage = '';
    //         if (error.error instanceof ErrorEvent) { } else {
    //           alterify.set('notifier', 'position', 'top-left');
    //           alterify.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + ` ${error.error.message}` + " Parametrage Failed");
    //           // this.showToast1();
    //         }
    //         return throwError(errorMessage);
    //       })
    //     ).subscribe(
    //       (res) => {
    //         alterify.set('notifier', 'position', 'top-left');
    //         alterify.success("Success Saved");

    //         this.clearForm();
    //         this.ngOnInit();
    //         this.code;
    //         this.check_actif = true;
    //         this.check_inactif = false;

    //       }
    //     )
    //   }
    // }
  }

  DeleteProduit(code: any) {

  }


  GetUnitesActif(): void {
    this.gcomercial_service.GetAllUnite().pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        } else {
          alterify.set('notifier', 'position', 'top-right');
          alterify.error(` ${error.error.message}` + " Parametrage Failed");

        }
        return throwError(errorMessage);
      })

    )
      .subscribe((data: any) => {
        this.sourceUnites = data;
        this.listUnitespushed = [];
        for (let i = 0; i < this.sourceUnites.length; i++) {
          this.listUnitespushed.push({ label: this.sourceUnites[i].designation, value: this.sourceUnites[i].code })
        }
        this.listUnitesrslt = this.listUnitespushed;
      });

  }


  GetMarquesActif(): void {
    this.gcomercial_service.GetAllMarqueActif().pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        } else {
          alterify.set('notifier', 'position', 'top-right');
          alterify.error(` ${error.error.message}` + " Parametrage Failed");

        }
        return throwError(errorMessage);
      })

    )
      .subscribe((data: any) => {
        this.sourceMarques = data;
        this.listMarquespushed = [];
        for (let i = 0; i < this.sourceMarques.length; i++) {
          this.listMarquespushed.push({ label: this.sourceMarques[i].designation, value: this.sourceMarques[i].code })
        }
        this.listMarquesrslt = this.listMarquespushed;
      });
    // this.targetProducts = [];

  }


  GetNatureProduitActif(): void {
    this.gcomercial_service.GetAllNatureProduitActif().pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        } else {
          alterify.set('notifier', 'position', 'top-right');
          alterify.error(` ${error.error.message}` + " Parametrage Failed");

        }
        return throwError(errorMessage);
      })

    )
      .subscribe((data: any) => {
        this.sourceNatureProduit = data;
        this.listNatureProduitpushed = [];
        for (let i = 0; i < this.sourceNatureProduit.length; i++) {
          this.listNatureProduitpushed.push({ label: this.sourceNatureProduit[i].designation, value: this.sourceNatureProduit[i].code })
        }
        this.listNatureProduitrslt = this.listNatureProduitpushed;
      });
    // this.targetProducts = [];

  }
  MouveToTable() {
    var exist = false;
    for (var y = 0; y < this.listDesigCompo.length; y++) {
      if (this.selectedComposant != this.listDesigCompo[y].code) {
        exist = false;
        // console.log(exist);
      } else {
        exist = true;

        alterify.set('notifier', 'position', 'top-left');
        alterify.error('Item Used');
        // console.log(exist);
        break;
      }
    }
    if ((this.selectedComposant != undefined) && (this.selectedComposant != "") && (!exist)) {
      this.gcomercial_service.GetComposantByCode(this.selectedComposant).subscribe((xxx: any) => {
        this.Compo[this.compteur] = xxx;
        this.compteur = this.compteur + 1;

        this.listDesigCompo.push(xxx);
        // console.log(xxx);
        console.log("compteur", this.compteur, "Compo", this.Compo, "DesigMouve", this.listDesigCompo, "SelectedCompo", this.selectedComposant,"CodeColoris",this.codeColoris);


      })
    }

  }
  clickDropDownUp(dropDownModUp: any) {
    if ((dropDownModUp.documentClickListener !== undefined && dropDownModUp.selectedOption !== null && dropDownModUp.itemClick) || dropDownModUp.itemClick) {
      dropDownModUp.focus();
      if (!dropDownModUp.overlayVisible) {
        dropDownModUp.show();
        event!.preventDefault();
      } else {
        dropDownModUp.hide();
        event!.preventDefault();
      }
    }

    
  }

  GetDataFromTableEditor: any;

  final = new Array<any>();

  GetCodeColoris(){
// this.codeColoris = this.listColorisrslt.code
 for (let y = 0; y < this.listColorisrslt.length; y++) {
      // this.GetDataFromTableEditor = {
         this.codeSaisie =  this.listColorisrslt[y].codeSaisie
      // }
      // this.final.push(this.GetDataFromTableEditor);
    }
    console.log(  "CodeColoris",this.codeSaisie);


  }


  deleteRow(ri: any) {

    this.listDesigCompo.splice(ri, 1);
    this.Compo.splice(ri, 1);
    this.compteur = this.compteur - 1;
    console.log("Unite", this.Compo, "Desig", this.listDesigCompo);

  }


  
  GetcomposantActif(): void {
    this.gcomercial_service.GetAllComposantActif().pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        } else {
          alterify.set('notifier', 'position', 'top-right');
          alterify.error(` ${error.error.message}` + " Parametrage Failed");

        }
        return throwError(errorMessage);
      })

    )
      .subscribe((data: any) => {
        this.sourceComposant = data;
        this.listComposantpushed = [];
        for (let i = 0; i < this.sourceComposant.length; i++) {
          this.listComposantpushed.push({ label: this.sourceComposant[i].designation, value: this.sourceComposant[i].code })
        }
        this.listComposantrslt = this.listComposantpushed;
      });
    // this.targetProducts = [];

  }


  codeColoris:any;
  GetColorisActif(): void {
    this.gcomercial_service.GeColorisActif().pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        } else {
          alterify.set('notifier', 'position', 'top-right');
          alterify.error(` ${error.error.message}` + " Parametrage Failed");

        }
        return throwError(errorMessage);
      })

    )
      .subscribe((data: any) => {
        this.sourceColoris = data;
        this.listColorispushed = [];
        for (let i = 0; i < this.sourceColoris.length; i++) {
          this.listColorispushed.push({ label: this.sourceColoris[i].designation, value: this.sourceColoris[i].codeSaisie })
        }
        this.listColorisrslt = this.listColorispushed;
      });

  }


  

}



interface Produit {
  code: string;

}

interface Unites {
  code: number;
  codeSaisieUnite: string;
  designation: string;
  actif?: boolean;

  qtedde?: number;
}


interface Marques {
  code: number;
  codeSaisie: string;
  designation?: string;
  actif?: boolean;
}

interface NatureProduit {
  code: number;
  codeSaisie: string;
  designation?: string;
  actif?: boolean;
}

interface Composant{

  code: number;
  codeSaisie: string;
  designation?: string;
  actif?: boolean;

}

interface Coloris{

  code: number;
  codeSaisie: string;
  designation: string;
  actif: boolean;

}