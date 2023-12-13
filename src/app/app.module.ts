import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


/// tools//
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
// import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import {MatRadioModule} from '@angular/material/radio';

import {MatMenuModule} from '@angular/material/menu';

import { DialogModule } from 'primeng/dialog';
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'
import { FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ParamComponent } from './param/param.component';
import { GcommercialComponent } from './gcommercial/gcommercial.component';
import { GproductionComponent } from './gproduction/gproduction.component';
import { ManagmentComponent } from './managment/managment.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { BiReportingComponent } from './bi-reporting/bi-reporting.component';
import { StockLogistiqueComponent } from './stock-logistique/stock-logistique.component';
import { CbnComponent } from './gcommercial/cbn/cbn.component';
import { DevisComponent } from './gcommercial/devis/devis.component';
import { DdeAchatComponent } from './gcommercial/dde-achat/dde-achat.component';
import { AppelOffreComponent } from './gcommercial/appel-offre/appel-offre.component';
import { OrderAchatComponent } from './gcommercial/order-achat/order-achat.component';
import { CircuitValidationComponent } from './gcommercial/circuit-validation/circuit-validation.component';
import { FicheTechniqueComponent } from './gcommercial/fiche-technique/fiche-technique.component';
import { FactureVteComponent } from './gcommercial/facture-vte/facture-vte.component';
import { ParamProduitComponent } from './gcommercial/param-produit/param-produit.component';
import { CompositionComponent } from './gcommercial/composition/composition.component';
import { FournitureComponent } from './gcommercial/fourniture/fourniture.component';
import { CategProduitComponent } from './gcommercial/categ-produit/categ-produit.component';
import { FamProduitComponent } from './gcommercial/fam-produit/fam-produit.component';
import { CltComponent } from './gcommercial/clt/clt.component';
import { FrsComponent } from './gcommercial/frs/frs.component';
import { DepotComponent } from './stock-logistique/depot/depot.component';
import { MvtReceptionComponent } from './stock-logistique/mvt-reception/mvt-reception.component';
import { MvtDdeTransfertComponent } from './stock-logistique/mvt-dde-transfert/mvt-dde-transfert.component';
import { MvtTransfertComponent } from './stock-logistique/mvt-transfert/mvt-transfert.component';
import { MvtAvoirTransfertComponent } from './stock-logistique/mvt-avoir-transfert/mvt-avoir-transfert.component';
import { InventaireComponent } from './stock-logistique/inventaire/inventaire.component';
import { RetourFrsComponent } from './stock-logistique/retour-frs/retour-frs.component';
import { RetourCltComponent } from './stock-logistique/retour-clt/retour-clt.component';
import { PlanificationOfComponent } from './gproduction/planification-of/planification-of.component';
import { NomenclatureComponent } from './gproduction/nomenclature/nomenclature.component';
import { RepartitionOfComponent } from './gproduction/repartition-of/repartition-of.component';
import { JalonnementComponent } from './gproduction/jalonnement/jalonnement.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ParamComponent,
    GcommercialComponent,
    GproductionComponent,
    ManagmentComponent,
    ComptabiliteComponent,
    BiReportingComponent,
    StockLogistiqueComponent,
    CbnComponent,
    DevisComponent,
    DdeAchatComponent,
    AppelOffreComponent,
    OrderAchatComponent,
    CircuitValidationComponent,
    FicheTechniqueComponent,
    FactureVteComponent,
    ParamProduitComponent,
    CompositionComponent,
    FournitureComponent,
    CategProduitComponent,
    FamProduitComponent,
    CltComponent,
    FrsComponent,
    DepotComponent,
    MvtReceptionComponent,
    MvtDdeTransfertComponent,
    MvtTransfertComponent,
    MvtAvoirTransfertComponent,
    InventaireComponent,
    RetourFrsComponent,
    RetourCltComponent,
    PlanificationOfComponent,
    NomenclatureComponent,
    RepartitionOfComponent,
    JalonnementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,
    FontAwesomeModule,
    MatInputModule, MatTableModule,
    FormsModule, HttpClientModule, MatIconModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule
    , MatNativeDateModule, ReactiveFormsModule, MatSelectModule, MatAutocompleteModule, MatSidenavModule

    , MatToolbarModule, MatListModule, MatDialogModule,MatMenuModule,MatRadioModule
    ,TableModule,DialogModule,MessagesModule,ToastModule,CheckboxModule,MessageModule
,DropdownModule,AutoCompleteModule,CalendarModule,MatDialogModule,MatFormFieldModule,
ConfirmDialogModule,RadioButtonModule,SpeedDialModule,SplitButtonModule,MenuModule
  ],
  providers: [
    ConfirmationService,{ provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
