import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/UI-elements/buttons/buttons.component';
import { DropDownComponent } from './components/UI-elements/drop-down/drop-down.component';
import { InputsComponent } from './components/UI-elements/inputs/inputs.component';

const routes: Routes = [
{path:'',component:InputsComponent},
{path:'inputs',component:InputsComponent},
{path:'buttons',component:ButtonsComponent},
{path:'dropDown',component:DropDownComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
