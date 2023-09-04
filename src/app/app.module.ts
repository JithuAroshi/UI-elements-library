import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './core/angular.material/angular.material.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { InputsComponent } from './components/UI-elements/inputs/inputs.component';
import { ButtonsComponent } from './components/UI-elements/buttons/buttons.component';

import { FormsModule } from '@angular/forms';
import { DropDownComponent } from './components/UI-elements/drop-down/drop-down.component';




@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InputsComponent,
    ButtonsComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
