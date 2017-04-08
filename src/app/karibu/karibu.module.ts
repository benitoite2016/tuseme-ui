import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KaribuRoutingModule } from './karibu-routing.module';
import { TabsModule } from 'ngx-bootstrap';

/*the core component to */
import { AppComponent } from './app/app.component';

/*component coresponding for the featutres module*/
import { MwanzoComponent } from './mwanzo/mwanzo.component';
import { KutuhusuComponent } from './kutuhusu/kutuhusu.component';
import { WasilianaNasiComponent } from './wasiliana-nasi/wasiliana-nasi.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  imports: [
    TabsModule.forRoot(),
    CommonModule,
    KaribuRoutingModule
  ],
  declarations:
    [AppComponent,
    MwanzoComponent,
      KutuhusuComponent,
      WasilianaNasiComponent,
      HeaderComponent,
      AuthenticateComponent]
})
export class KaribuModule { }
