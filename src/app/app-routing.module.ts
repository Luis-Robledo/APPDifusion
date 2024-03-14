import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from '../app/componentes/inicio/inicio.component';
import {PageNotFoundComponent} from '../app/componentes/page-not-found/page-not-found.component';
import {GaleriaComponent} from '../app/componentes/galeria/galeria.component';
import {ContactoComponent} from '../app/componentes/contacto/contacto.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'galeria',component:GaleriaComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
