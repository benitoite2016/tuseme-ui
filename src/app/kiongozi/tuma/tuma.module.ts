import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TumaRoutingModule } from './tuma-routing.module';
import { ContentsComponent } from './contents/contents.component';
import { TumaTaarifaComponent } from './tuma-taarifa/tuma-taarifa.component';
import { TumaRipotiComponent } from './tuma-ripoti/tuma-ripoti.component';
import { TumaUjumbeComponent } from './tuma-ujumbe/tuma-ujumbe.component';
import { TumaMapendekezoComponent } from './tuma-mapendekezo/tuma-mapendekezo.component';
import { RipotiComponent } from './ripoti/ripoti.component';

@NgModule({
  imports: [
    CommonModule,
    TumaRoutingModule
  ],
  declarations: [ContentsComponent, TumaTaarifaComponent, TumaRipotiComponent, TumaUjumbeComponent, TumaMapendekezoComponent, RipotiComponent],
  exports: [ContentsComponent]
})
export class TumaModule { }
