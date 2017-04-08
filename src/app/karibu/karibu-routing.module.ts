import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components to be Routed */
import { AppComponent } from './app/app.component';
import {MwanzoComponent} from "./mwanzo/mwanzo.component";
import {KutuhusuComponent} from "./kutuhusu/kutuhusu.component";
import {WasilianaNasiComponent} from "./wasiliana-nasi/wasiliana-nasi.component";


const routes: Routes = [
   { path: 'karibu', component: AppComponent ,
   children:[
     {path: '', redirectTo:'mwanzo',pathMatch:'full' },
     {path:'mwanzo', component:MwanzoComponent},
     {path:'kutuhusu', component:KutuhusuComponent},
     {path:'wasiliana', component:WasilianaNasiComponent}
   ]
   }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class KaribuRoutingModule { }
