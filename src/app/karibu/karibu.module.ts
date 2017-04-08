import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaribuRoutingModule } from './karibu-routing.module';
import { AppComponent } from './app/app.component';
import { MwanzoComponent } from './mwanzo/mwanzo.component';
import { KutuhusuComponent } from './kutuhusu/kutuhusu.component';
import { WasilianaNasiComponent } from './wasiliana-nasi/wasiliana-nasi.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    KaribuRoutingModule
  ],
  declarations: [AppComponent, MwanzoComponent, KutuhusuComponent, WasilianaNasiComponent, HeaderComponent]
})
export class KaribuModule { }
