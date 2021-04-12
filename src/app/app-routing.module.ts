import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login/login.component";
import {ListagemAreasComponent} from "./areas/listagem-areas/listagem-areas.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'listar-areas',
    component: ListagemAreasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
