import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }