import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {TumaHomeComponent} from "../tuma-home/tuma-home.component";
// import {TumaTaarifaComponent} from "./tuma-taarifa/tuma-taarifa.component";
// import {TumaRipotiComponent} from "./tuma-ripoti/tuma-ripoti.component";
// import {TumaUjumbeComponent} from "./tuma-ujumbe/tuma-ujumbe.component";
// import {TumaMapendekezoComponent} from "./tuma-mapendekezo/tuma-mapendekezo.component";
// import {RipotiComponent} from "./ripoti/ripoti.component";


const routes: Routes = [
//   {
//     path: '', component:TumaHomeComponent,
//   children: [
//   {path: 'taarifa', component:TumaTaarifaComponent},
//     {path: 'ripoti', component:TumaRipotiComponent},
//     {path: 'ujumbe', component:TumaUjumbeComponent},
//     {path: 'mapendekezo', component:TumaMapendekezoComponent},
//     {path:'available', component:RipotiComponent }
//
//   ]
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TumaRoutingModule { }
