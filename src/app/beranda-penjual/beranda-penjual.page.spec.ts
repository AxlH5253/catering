import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaPenjualPage } from './beranda-penjual.page';

describe('BerandaPenjualPage', () => {
  let component: BerandaPenjualPage;
  let fixture: ComponentFixture<BerandaPenjualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerandaPenjualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerandaPenjualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
