import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakananPenjualPage } from './makanan-penjual.page';

describe('MakananPenjualPage', () => {
  let component: MakananPenjualPage;
  let fixture: ComponentFixture<MakananPenjualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakananPenjualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakananPenjualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
