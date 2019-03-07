import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPage } from './patient.page';

describe('PatientPage', () => {
  let component: PatientPage;
  let fixture: ComponentFixture<PatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
