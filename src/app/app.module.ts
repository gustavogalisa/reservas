import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from "./login/login.module";
import {LayoutModule} from "./layout/layout.module";
import { ListingAreasComponent } from './areas/listing-areas/listing-areas.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RegistrationAreasComponent} from "./areas/registration-areas/registration-areas.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListingAreasComponent,
    RegistrationAreasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    LayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
