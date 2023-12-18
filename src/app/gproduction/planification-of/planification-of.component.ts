import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { PlanificationOF } from './planification_of';
import * as alterify from 'alertifyjs';
import { ProductionService } from '../service/production.service';
import { catchError, throwError, timeout } from 'rxjs';
import { produit } from '../production';

@Component({
  selector: 'app-planification-of',
  templateUrl: './planification-of.component.html',
  // templateUrl: './index.html',
  styleUrls: ['./planification-of.component.css'],
  // styleUrls: ['./style.scss'],

  providers: [MessageService]
})
export class PlanificationOfComponent implements OnInit {



  products = new Array<Unites>();

  product!: Unites;


  constructor(private cdref: ChangeDetectorRef, private confirmationService: ConfirmationService, private param_achat_service: ProductionService, private messageService: MessageService, private http: HttpClient, private fb: FormBuilder, private cdr: ChangeDetectorRef)
   {
  }

  // deleteProduct(product: Unites) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + product.nom_Demandeur + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  //     }
  //   });
  // }

  sourceProducts!: Unites[];
  qte!: number;
  targetProducts!: Unites[];

  exportColumns!: any[];
  ngOnInit(): void {
    this.GetDdeAchat();

    this.Voids();
    this.colsAdd = [
      { field: 'codeSaisies', header: 'Code', width: '10px', filter: "true", StylePropertyMap: "CodeSaisie" },
      { field: 'designation', header: 'Designation ', width: '20px', filter: "true" },
      { field: 'qte', header: 'Quantite', width: '10px', filter: "true" },
      // { field: 'Action', header: ' ', width: '70px', filter: "true" }
    ];
    // this.exportColumns = this.colsAdd.map((col) => ({ title: col.header, dataKey: col.field }));

  };
  // exportExcel() {
  //   import('xlsx').then((xlsx) => {
  //     const worksheet = xlsx.utils.json_to_sheet(this.Unitess);
  //     const workbook = { Sheets: { data: worksheet }, SheetNames: ['listDesig'] };
  //     const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
  //     this.saveAsExcelFile(excelBuffer, 'Unitess');
  //   });
  // }
  // saveAsExcelFile(buffer: any, fileName: string): void {
  //   let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  //   let EXCEL_EXTENSION = '.xlsx';
  //   const data: Blob = new Blob([buffer], {
  //     type: EXCEL_TYPE
  //   });
  //   FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  // }

  DdeAchatWithDetails = new Array<any>();
  GetDdeAchat(): void {
    // this.param_achat_service.GetAllDdeAchat().pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) {
    //     } else {
    //       alterify.set('notifier', 'position', 'top-left');
    //       alterify.error(` ${error.error.message}` + " Parametrage Failed");
    //     }
    //     return throwError(errorMessage);
    //   })

    // )
    //   .subscribe((data: any) => {
    //     this.DdeAchatWithDetails = data
    //     this.searchTerm = '';
    //     this.check_actif = true
    //     this.check_inactif = false
    //   });
  }


  // desig: string = 'AR'
  // FormControl = new Array<FormControl>();
  // GetFormName(): void {
  //   this.param_achat_service.GetFormControlName(this.desig).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       let errorMessage = '';
  //       if (error.error instanceof ErrorEvent) {
  //       } else {
  //         alterify.set('notifier', 'position', 'top-left');
  //         alterify.error(` ${error.error.message}` + " Parametrage Failed");
  //       }
  //       return throwError(errorMessage);
  //     })

  //   )
  //     .subscribe((data: any) => {
  //       this.FormControl = data
  //       this.searchTerm = '';
  //       this.check_actif = true
  //       this.check_inactif = false
  //     });
  // }

  clear(table: Table) {
    console.log("tab", table)
    table.clear();
  }

  clearForm(): void {
    this.code == undefined;
    this.designation = '';
    this.actif = false;
    this.codeSaisie = '';
    this.selectedUnites = [];
    this.codeFlDde = [];
    this.listDesig = [];


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
  actif!: boolean;
  // designation2!: string;
  CodeOF !: string;
  CodeCommande!: string;

  selectedddeAchat!: DDE_ACHAT;
  selectedddeAchat2!: DDE_ACHAT;
  selectedCar!: string;
  listarticlerslt = new Array<any>();


  onRowSelect(event: any) {
    this.code = event.data.code;
    this.qte = event.data.qte;
    this.codeSaisie = event.data.codeSaisie;
    this.designation = event.data.designation;

    console.log('vtData : ', event);
  }
  onRowUnselect(event: any) {
    console.log('row unselect : ', event);
    this.code = event.DAte = null;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////
  unitess!: Unites[];
  GetUnitesActif(): void {
    this.param_achat_service.GetAllUnite().pipe(
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
        this.sourceProducts = data;
        // this.cdr.markForCheck();
      });
    this.targetProducts = [];

  }



  // company = new Array<ParamsModel>();
  // DesignationCompany!: string | "Company";
  // GetCompany(): void {
  //   this.param_achat_service.GetParams(this.DesignationCompany).pipe(
  //     timeout(35000),
  //     catchError(
  //       (error: HttpErrorResponse) => {
  //         timeout(35000)
  //         let errorMessage = '';

  //         if (error.error instanceof ErrorEvent) {
  //         } else {
  //           alterify.set('notifier', 'position', 'top-left');
  //           alterify.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + `${error.error.message}` + " Parametrage Failed");
  //         }

  //         return throwError(errorMessage);
  //       })
  //   )
  //     .subscribe((data: any) => {
  //       this.company = data;

  //     })
  // }






  DeleteddeAchat(code: any) {
    // this.param_achat_service.DeleteDdeAchat(code).pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) {
    //     } else {
    //       alterify.set('notifier', 'position', 'top-left');
    //       alterify.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + ` ${error.error.message}` + " Parametrage Failed");
    //     }
    //     return throwError(errorMessage);
    //   })

    // ).subscribe(
    //   (res) => {
    //     alterify.set('notifier', 'position', 'top-left');
    //     alterify.success("Success Deleted");
    //     this.ngOnInit();
    //     this.check_actif = true;
    //     this.check_inactif = false;

    //   }
    // )
  }
  clearSelected(): void {
    this.code == undefined;
    this.codeSaisie = '';
    this.designation = '';
    this.actif = false;
    this.selectedUnites = [];
    this.codeFlDde = [];
    this.listDesig = [];
  }

  public onOpenModal(mode: string) {
    this.visibleModal = false;
    this.visDelete = false;
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#Modal');
      this.formHeader = "Nouveau Order Fabrication"
      // this.codeSaisie = this.compteurs;
      this.onRowUnselect(event);
      this.getAllUnitesModal();
      // this.GelAllFlActif();
      // this.code ==null;
      this.clearSelected();
      this.actif = false;
      this.visibleModal = true;
      this.code == undefined;
      // this.codeFilialle = [];
      // this.getAllFournModalModifier();


    }
    if (mode === 'edit') {


      if (this.code == undefined) {
        // alert("Choise A row Please");

        //  
        this.onRowUnselect(event);
        alterify.set('notifier', 'position', 'top-left');
        alterify.error("Choise A row Please");
        this.visDelete == false && this.visibleModal == false
      } else {

        button.setAttribute('data-target', '#Modal');
        this.formHeader = "تعديل طلب شراء "
        this.visibleModal = true;
        this.onRowSelect;

      }

    }
    // if (mode === 'Voir') {
    //   button.setAttribute('data-target', '#voirPL');
    //   this.formHeader = "عرض فرع "

    // }

    if (mode === 'Delete') {

      if (this.code == undefined) {
        // alert("Choise A row Please");

        // 
        this.onRowUnselect;
        alterify.set('notifier', 'position', 'top-left');
        alterify.error("Choise A row Please");
        this.visDelete == false && this.visibleModal == false
      } else {

        {
          button.setAttribute('data-target', '#ModalDelete');
          this.formHeader = "حذف طلب شراء "
          this.visDelete = true;

        }
      }

    }

  }

  coutdemande!: string;
  codeDemandeur !: number;
  userCreate!: string | "soufisssen";
  nomddeur: string = "FL";
  // event :any;
  qtedetails: any;
  // 
  art = new Array<Unites>();
  GetDataFromTableEditor: any;
  final = new Array<any>();

  PostDdeAchat() {


    // for (let y = 0; y < this.listDesig.length; y++) {
    //   this.GetDataFromTableEditor = {
    //     codeUnites: this.listDesig[y].code, nomdemandeur: this.nomddeur, qtedde: this.listDesig[y].qtedde, designationarUnites: this.listDesig[y].designation,
    //     designationenUnites: this.listDesig[y].designation, usercreate: this.userCreate, codedemandeur: this.codeFlDde
    //   }
    //   this.final.push(this.GetDataFromTableEditor);
    // }

    // let body = {
    //   coutdemande: this.codeSaisie,
    //   codedemandeur: this.codeFlDde,
    //   etatdemande: "PRL",
    //   usercreate: this.userCreate,
    //   dateCreate: Date.now,
    //   code: this.code,
    //   nomdemandeur: this.nomddeur,
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

  ListFlData = new Array<any>();
  ListFlPushed = new Array<any>();
  ListFlRslt = new Array<any>();
  codeFlDde: {}[] = [];

  GelAllFlActif() {
    // this.param_achat_service.GetFlActif().pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) { } else {
    //       alterify.set('notifier', 'position', 'top-left');
    //       alterify.error(` ${error.error.message}`);
    //     }
    //     return throwError(errorMessage);
    //   })
    // ).subscribe((data: any) => {
    //   this.ListFlData = data;
    //   this.ListFlPushed = [];
    //   for (let i = 0; i < this.ListFlData.length; i++) {
    //     this.ListFlPushed.push({ label: this.ListFlData[i].designation, value: this.ListFlData[i].code })
    //   }
    //   this.ListFlRslt = this.ListFlPushed;
    // })
  }
  dataUnites = new Array<Unites>();
  listUnitespushed = new Array<any>();
  listUnitesrslt = new Array<any>();
  getAllUnitesModal() {
    this.param_achat_service.GetAllUnite().pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) { } else {
          alterify.set('notifier', 'position', 'top-left');
          alterify.error(` ${error.error.message}`);
        }
        return throwError(errorMessage);
      })

    ).subscribe((data: any) => {
      this.dataUnites = data;
      this.listUnitespushed = [];
      for (let i = 0; i < this.dataUnites.length; i++) {
        this.listUnitespushed.push({ label: this.dataUnites[i].designation, value: this.dataUnites[i].code })
      }
      this.listUnitesrslt = this.listUnitespushed;
    })
  }
  Unitess!: Unites[];
  selectedUnites: any;
  xxx: any;
  compteur: number = 0;
  listDesig = new Array<any>();
  DAte: any;
  MouveToTable() {
    var exist = false;
    for (var y = 0; y < this.Unitess.length; y++) {
      if (this.selectedUnites != this.Unitess[y].code) {
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
    if ((this.selectedUnites != undefined) && (this.selectedUnites != "") && (!exist)) {
      this.param_achat_service.GetUniteByCode(this.selectedUnites).subscribe((xxx: any) => {
        this.Unitess[this.compteur] = xxx;
        this.compteur = this.compteur + 1;
        this.listDesig.push(xxx);
        // console.log(xxx);
        console.log("compteur",this.compteur , "unite" ,this.Unitess  , "Desig",this.listDesig);
         

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
  colsAdd!: any[];
  clonedUnites: { [s: string]: Unites } = {};
  Voids(): void {
    this.Unitess = [

    ].sort((car1, car2) => {
      return 0;
    });

  }


  public remove(index: number): void {
    // this.unitess.splice(index,1);
    this.listDesig.splice(index, this.selectedUnites);
    this.Unitess.splice(index, this.selectedUnites);
    this.selectedUnites = null;
    console.log(index, "List Unites", this.Unitess, "List Desig", this.listDesig);


    // 
  }
  selectedIndex!: number;
  removeSelectedRows() {
    let index: number = this.selectedIndex;
    this.Unitess = [...this.Unitess.slice(0, index), ...this.Unitess.slice(index + 1)];
    this.Unitess.fill;
    this.selectedIndex == null; // This will not be required when position is used to delete element
  }
  deleteRow(ri: any) {
  
        this.listDesig.splice(ri, 1);
        this.Unitess.splice(ri, 1);
        this.compteur = this.compteur-1; 
        console.log("Unite",this.Unitess,"Desig",this.listDesig);
        
  }


  // selectedIndex!:number;
  // RemouveSelected(){
  //   let index :number = this.selectedIndex;
  //   this.listDesig  = [...this.listDesig.splice(index,0)];
  //   this.selectedIndex==null;
  // }

  public GetFilialleActif() {

  }
  
  public GetFilialeInActif() {

  }
  selectedProducts?: Unites[];
  deleteProduct(product: Unites) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.designation + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.code !== product.code);
        this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }
  // }


}


export interface Unites {
  code?: number;
  codeSaisie?: string;
  designation?: string;
  actif?: boolean;

  qtedde?: number;
}

export interface DDE_ACHAT {
  designation: string,
}