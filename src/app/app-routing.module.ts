import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { AppelOffreComponent } from './gcommercial/appel-offre/appel-offre.component';
import { CategProduitComponent } from './gcommercial/categ-produit/categ-produit.component';
import { CbnComponent } from './gcommercial/cbn/cbn.component';
import { CircuitValidationComponent } from './gcommercial/circuit-validation/circuit-validation.component';
import { CltComponent } from './gcommercial/clt/clt.component'; 
import { DdeAchatComponent } from './gcommercial/dde-achat/dde-achat.component';
import { DevisComponent } from './gcommercial/devis/devis.component';
import { FactureVteComponent } from './gcommercial/facture-vte/facture-vte.component';
import { FamProduitComponent } from './gcommercial/fam-produit/fam-produit.component';
import { FicheTechniqueComponent } from './gcommercial/fiche-technique/fiche-technique.component';
import { FournitureComponent } from './gcommercial/fourniture/fourniture.component';
import { FrsComponent } from './gcommercial/frs/frs.component';
import { GcommercialComponent } from './gcommercial/gcommercial.component';
import { OrderAchatComponent } from './gcommercial/order-achat/order-achat.component';
import { ParamProduitComponent } from './gcommercial/param-produit/param-produit.component';
import { GproductionComponent } from './gproduction/gproduction.component';
import { JalonnementComponent } from './gproduction/jalonnement/jalonnement.component';
import { NomenclatureComponent } from './gproduction/nomenclature/nomenclature.component';
import { PlanificationOfComponent } from './gproduction/planification-of/planification-of.component';
import { RepartitionOfComponent } from './gproduction/repartition-of/repartition-of.component';
import { HomeComponent } from './home/home.component';
import { ManagmentComponent } from './managment/managment.component';
import { ParamComponent } from './param/param.component';
import { InventaireComponent } from './stock-logistique/inventaire/inventaire.component';
import { MvtAvoirTransfertComponent } from './stock-logistique/mvt-avoir-transfert/mvt-avoir-transfert.component';
import { MvtDdeTransfertComponent } from './stock-logistique/mvt-dde-transfert/mvt-dde-transfert.component';
import { MvtReceptionComponent } from './stock-logistique/mvt-reception/mvt-reception.component';
import { MvtTransfertComponent } from './stock-logistique/mvt-transfert/mvt-transfert.component';
import { RetourCltComponent } from './stock-logistique/retour-clt/retour-clt.component';
import { RetourFrsComponent } from './stock-logistique/retour-frs/retour-frs.component';
import { StockLogistiqueComponent } from './stock-logistique/stock-logistique.component';
import { ColorisComponent } from './gcommercial/param-compo/coloris/coloris.component';
import { TailleComponent } from './gcommercial/param-compo/taille/taille.component';
import { CategCompoComponent } from './gcommercial/param-compo/categ-compo/categ-compo.component';
import { CompositionComponent } from './gcommercial/param-compo/composition/composition.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' , redirectTo: ''},
  {path: 'stock_logistique', component: StockLogistiqueComponent},
  {path: 'gcommercial', component: GcommercialComponent},
  {path: 'gproduction', component: GproductionComponent},
  {path: 'managment', component: ManagmentComponent},
  {path: 'comptabilite', component: ComptabiliteComponent},
  {path: 'cbn', component: CbnComponent},
  {path: 'devis', component: DevisComponent},
  {path: 'demande_achat', component: DdeAchatComponent},
  {path: 'appel_offre', component: AppelOffreComponent},
  {path: 'order_achat', component: OrderAchatComponent},
  {path: 'circuit_validation', component: CircuitValidationComponent},
  {path: 'fiche_technique', component: FicheTechniqueComponent},
  {path: 'facture_vente', component: FactureVteComponent},
  {path: 'parametrage_produit', component: ParamProduitComponent},
  {path: 'composition', component: CompositionComponent},
  {path: 'fourniture', component: FournitureComponent},
  {path: 'categorie_produit', component: CategProduitComponent},
  {path: 'famille_produit', component: FamProduitComponent},
  {path: 'client', component: CltComponent},
  {path: 'fournisseur', component: FrsComponent},
  {path: 'reception', component: MvtReceptionComponent},
  {path: 'demande_transfert', component: MvtDdeTransfertComponent},
  {path: 'transfert', component: MvtTransfertComponent},
  {path: 'avoir_transfert', component: MvtAvoirTransfertComponent},
  {path: 'inventaire', component: InventaireComponent},
  {path: 'retour_fournisseur', component: RetourFrsComponent},
  {path: 'retour_client', component: RetourCltComponent},
  {path: 'planification_of', component: PlanificationOfComponent},
  {path: 'nomenclature', component: NomenclatureComponent},
  {path: 'repartition_of', component: RepartitionOfComponent},
  {path: 'jolonnement', component: JalonnementComponent},
  {path: 'param', component: ParamComponent},
  {path: 'coloris', component: ColorisComponent},
  {path: 'taille', component: TailleComponent},
  {path: 'categorie_composant', component: CategCompoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
