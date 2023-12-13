import { Component, OnInit } from '@angular/core';
import * as alterify from 'alertifyjs';
import { repartition } from './repart-of';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-repartition-of',
  templateUrl: './repartition-of.component.html',
  styleUrls: ['./repartition-of.component.css'],

  providers: [MessageService]
})
export class RepartitionOfComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private http: HttpClient, private fb: FormBuilder) {
  }
  ngOnInit(): void {
  }

  visible!: boolean;
  visDelete !: boolean;
  code!: number | null;
  formHeader = "Nouveau Article";
  designation!: string;
  ville!: string;
  adress!: string;
  actif!: boolean;
  numTlf!: any;
  codeSaisie!: string;

  filaille: repartition[] = [];

  ActifFilaille = new Array<repartition>();
  selectedProduct!: repartition;

  check_actif = false;
  check_inactif = false;


  public onOpenmodal(mode: string) {
    // this.showForm = true;
    this.visible = false;
    this.visDelete = false;

    const container = document.getElementById('main-container');

    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'addPL') {
      this.clearForm();
      this.visible = true;
      this.visDelete = false;

      // new Array<Filialle>();
      this.code === null;
 
      button.setAttribute('data-target', '#Modal');
      this.formHeader = "Nouveau Article" 
      this.ngOnInit();
      console.log(this.code); 



    }
    if (mode === 'edit') {
      if (this.code == undefined) { 
        this.onRowUnselect; 
        alterify.set('notifier', 'position', 'top-right');
        alterify.error("Choise A row Please"); 



      } else {

        this.visible = true;
        this.visDelete = false;

        button.setAttribute('data-target', '#Modal');
        this.formHeader = "تعديل فرع "
        this.onRowSelect;
        console.log(this.designation);
      }
    }
    // if (mode === 'Voir') {
    //   button.setAttribute('data-target', '#Modal');
    //   this.formHeader = "عرض فرع "
    // }
    if (mode === 'delete') {
      if (this.code == undefined) {
        // alert("Choise A row Please");

        //  
        const box = document.getElementById('Modal');
        const box2 = document.getElementById('ModalDelete');

        if (box != null && box2 != null) {

          box.style.setProperty('display', 'none');
          box2.style.setProperty('display', 'none');
        }


        this.visible = false;
        this.visDelete = false;

        this.onRowUnselect(event);
        alterify.set('notifier', 'position', 'top-left');
        alterify.error("Choise A row Please");
        // this.visDelete == false && this.visible == false
      } else {

        {
          this.visible = false;

          this.visDelete = true;
          button.setAttribute('data-target', '#ModalDelete');
          this.formHeader = "حذف فرع "
        }


      }
    }

    // button.click();
  }

  clearForm() {
    this.code = null;
    this.designation = '';
    this.actif = false;
    this.ville = '';
    this.adress = '';
    this.numTlf = null;
    this.codeSaisie = '';

  }
  onRowUnselect(event: any) {
    // simply logging the event
    console.log('row unselect : ', event);
    this.code = event.data = null;

  }

  onRowSelect(event: any) {
    console.log(event)
    this.code = event.data.code;
    this.designation = event.data.designation;
    this.ville = event.data.ville;
    this.adress = event.data.adress;
    this.actif = event.data.actif;
    this.numTlf = event.data.numTlf;
    this.codeSaisie = event.data.codeSaisie;
    // this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.designation });
  }

  GetFilialleActif(): void {
    // this.servicefilialle.getFilialeActif().pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) {} else {
    //       alterify.set('notifier', 'position', 'top-left');
    //       alterify.error(` ${error.error.message}`);
    //     }
    //     return throwError(errorMessage);
    //   })

    // )
    //   .subscribe((data: any) => {
    //     this.ActifFilaille = data;
    //     this.searchTerm = '';
    //     this.check_actif = true;
    //     this.check_inactif = false;
    //   });
  }

  GetFilialeInActif(): void {
    // this.servicefilialle.getFilialeInActif().pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) {} else {
    //       alterify.set('notifier', 'position', 'top-left');
    //       alterify.error(` ${error.error.message}`);
    //     }
    //     return throwError(errorMessage);
    //   })

    // )
    //   .subscribe((data: any) => {
    //     this.ActifFilaille = data;
    //     this.searchTerm = '';
    //     this.check_actif = false;
    //     this.check_inactif = true;
     

    //   });
  }


  clear(table: Table) {
    table.clear();
  }
  searchTerm = '';

  savePriceListe() {
    // let body = {
    //   codeSaisie: this.codeSaisie,
    //   designation: this.designation,
    //   ville: this.ville,
    //   numTlf: this.numTlf,
    //   actif: this.actif,
    //   code: this.code,
    //   adress: this.adress
    // }
    // if (this.code != undefined) {
    //   body['code'] = this.code;
    //   // body['codeSaisie'] = this.codeSaisie;
    //   this.servicefilialle.updateFilialle(body).pipe(
    //     catchError((error: HttpErrorResponse) => {
    //       let errorMessage = '';
    //       if (error.error instanceof ErrorEvent) {} else {
    //         alterify.set('notifier', 'position', 'top-left');
    //         alterify.error(` ${error.error.message}`);
    //       }
    //       return throwError(errorMessage);
    //     })
  
    //   ).subscribe(
    //     (res) => {
    //       alterify.set('notifier', 'position', 'top-left');
    //       alterify.success("update Success Saved");
    //       this.ngOnInit();
    //       this.check_actif = true;
    //       this.check_inactif = false;
    //       close();
    //       this.clearForm();
    //     }
    //   );
    // }

    // else {

    //   this.servicefilialle.createFilialleList(body).pipe(
    //     catchError((error: HttpErrorResponse) => {
    //       let errorMessage = '';
    //       if (error.error instanceof ErrorEvent) {} else {
    //         alterify.set('notifier', 'position', 'top-left');
    //         alterify.error(` ${error.error.message}`);
    //       }
    //       return throwError(errorMessage);
    //     })
  
    //   ).subscribe(
    //     (res) => {
    //       alterify.set('notifier', 'position', 'top-left');
    //       alterify.success("Success Saved");
    //       this.clearForm();
    //       this.check_actif = true;
    //       this.check_inactif = false;
    //       close();
    //       this.ngOnInit();
    //       this.code;
    //     }
    //   );
    // } 
  }


  DeleteFilialle(code: any) {

    // this.servicefilialle.DeleteFilialeByCode(code).pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) {} else {
    //       alterify.set('notifier', 'position', 'top-left');
    //       alterify.error(` ${error.error.message}`);
    //     }
    //     return throwError(errorMessage);
    //   })

    // ).subscribe(response => {
    //   // this.GetFilialleActif();
    //   this.ngOnInit();
    //   this.check_actif = true;
    //   this.check_inactif = false;
    //   alterify.set('notifier', 'position', 'top-left');
    //   // alterify.formHeader();
    //   alterify.success("Success Deleted");
    // });

  }

}
