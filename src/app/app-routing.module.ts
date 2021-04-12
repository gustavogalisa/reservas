import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login/login.component";
import {ListingAreasComponent} from "./areas/listing-areas/listing-areas.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'listar-areas',
    component: ListingAreasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
