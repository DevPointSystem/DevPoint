
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import * as alterify from 'alertifyjs';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { GcomercialService } from '../../Service/gcomercial.service';
 
@Component({
  selector: 'app-coloris',
  templateUrl: './coloris.component.html',
  styleUrls: ['./coloris.component.css']
})
export class ColorisComponent implements OnInit {
  
 

  constructor(private gcomercial_service: GcomercialService ) { 

  
    // yourControl:AnalyserNode
  }
  
 
  // input2:Any
  ngOnInit(): void {
    this.GetAllColorisActif();  
    // this.actif = false;
    // this.ResteCheckboxValue();
  }

  selectedValue: boolean = true; // Set the default value
  // ResteCheckboxValue() {
  //   this.check_actif = true;
  //   this.check_inactif = false;

  // }
  clear(table: Table) {
    console.log("tab", table)
    table.clear();
  }

  coloris = new Array<Coloris>();
  GetAllColorisActif(): void {
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
        this.coloris = data
        this.searchTerm = '';

        // this.check_actif = true;
        this.check_inactif = false;

        this.onRowUnselect(event);
      });
  }
  GetAllColorisInActif(): void {
    this.gcomercial_service.GeColorisInActif().pipe(
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
        this.coloris = data
        this.searchTerm = '';
        // this.check_actif = true
        // this.check_inactif = false
        this.onRowUnselect(event);
      });
  }
  check_actif = false;
  check_inactif = false;

  formHeader = "";

  searchTerm = '';

  visibleModal: boolean = false;
  visDelete: boolean = false;
  code!: number | null;
  codeSaisie?: string;
  designation!: string;
  userCreate!: string; 
  actif!: boolean; 
  codeColoris!: number;
  codeInst: any;

  sourceColoris!: Coloris[];
  listColorispushed = new Array<any>();
  listColorisrslt = new Array<any>();


  onRowUnselect(event: any) {
    console.log('row unselect : ', event);
    // this.code = event.data = null;
    event.data = new Array<any>();
    event.data.code == null;
    // this.clearForm(event);
    this.selectedRow = null;
  }
  selectedRow: any;
  removeSelection() {
    this.selectedRow = null;
    console.log(this.selectedRow);
  }


  public GetColorisByCode(code: any) {
    this.gcomercial_service.GeColorisByCode(code).pipe(
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
        this.listColorisrslt = data;
        // this.searchTerm = '';
        // this.check_actif = true
        // this.check_inactif = false
        // this.onRowUnselect(event);
      });


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
    // const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode == 'add') {
      button.setAttribute('data-target', 'modal');

      this.code = null;
      console.log('codddeee', this.code);
      this.formHeader = "Nouveau Coloris"
      this.clearForm();


      // this.check_actif = true;
      // this.check_inactif = false;
      this.visibleModal = true;


      this.onRowUnselect(event);


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
        this.formHeader = "Modifier Coloris"
        this.visibleModal = true;
        this.onRowSelect;
        // console.log();
        this.GetColorisByCode(this.selectedRow.code);
        // this.GetUnitesActif();
        // this.GetColorisActif();

        // this.onRowUnselect(event);
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
            this.formHeader = "Delete Coloris"
            this.visDelete = true;
            this.onRowUnselect(event);
            // this.check_actif = true;
            // this.check_inactif = false;
          }
        }

      }

  }


  clearForm(): void {
    this.code == null;
    this.designation = '';
    this.actif = false;
    this.codeSaisie = '';



    // this.onRowUnselect(event);


  }


  PostColoris() {

    // // for (let y = 0; y < this.Compo.length; y++) {
    // //   this.GetDataFromTableEditor = {
    // //     codeUnites: this.listDesig[y].code, nomdemandeur: this.nomddeur, qtedde: this.listDesig[y].qtedde, designationarUnites: this.listDesig[y].designation,
    // //     designationenUnites: this.listDesig[y].designation, usercreate: this.userCreate, codedemandeur: this.codeFlDde
    // //   }
    // //   this.final.push(this.GetDataFromTableEditor);
    // // }

    let body = {
      code: this.code,
      codeSaisie: this.codeSaisie,
      designation: this.designation,
      actif: this.actif,
      userCreate: "soufien"


    }
    // if(this.coloris.length == 0){
    //   alterify.set('notifier', 'position', 'top-left');
    //         alterify.error('Please Select Any Items');
    // }else{
    console.log('body', body);
    if (this.code != null) {
      body['code'] = this.code;

      // console.log('code',this.code);
      this.gcomercial_service.PutColoris(body).pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
          } else {
            alterify.set('notifier', 'position', 'top-right');
            alterify.error(` ${error.error.message}`);
          }
          return throwError(errorMessage);
        })

      ).subscribe(

        (res: any) => {
          alterify.set('notifier', 'position', 'top-right');
          alterify.success("update Success Saved");
          // close();
          // this.check_actif = true;
          this.selectedValue = true;

          this.clearForm();
          this.GetAllColorisActif();

          // this.onRowUnselect(event);

        }
      );


    }
    else {
      console.log('body', body);
      this.gcomercial_service.PostColoris(body).pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) { } else {
            alterify.set('notifier', 'position', 'top-left');
            alterify.error('<i class="error fa fa-exclamation-circle" aria-hidden="true" style="margin: 5px 5px 5px;"></i>' + ` ${error.error.message}` + " Parametrage Failed");
            // this.showToast1();
          }
          return throwError(errorMessage);
        })
      ).subscribe(
        (res: any) => {
          alterify.set('notifier', 'position', 'top-right');
          alterify.success("Success Saved");
          this.selectedValue = true;
          this.clearForm();
          this.GetAllColorisActif();
          this.code;

          this.onRowUnselect(event);

        }
      )
    }
    // }
  }

  DeleteColoris(code: any) {
    this.gcomercial_service.DeleteColoris(code).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) { } else {
          alterify.set('notifier', 'position', 'top-right');
          alterify.error(` ${error.error.message}`);
        }
        return throwError(errorMessage);
      })

    ).subscribe(
      (res) => {
        alterify.set('notifier', 'position', 'top-right');
        alterify.success("Success Deleted");
        this.GetAllColorisActif();
        this.selectedValue = true;
        this.onRowUnselect(event);
        this.clearForm();

      }
    )
  }



}



interface Coloris {

  code: number;
  codeSaisie: string;
  designation: string;
  actif: boolean;

}