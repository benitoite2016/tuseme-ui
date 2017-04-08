import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasilianaNasiComponent } from './wasiliana-nasi.component';

describe('WasilianaNasiComponent', () => {
  let component: WasilianaNasiComponent;
  let fixture: ComponentFixture<WasilianaNasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasilianaNasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasilianaNasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
