import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalles5Component } from './detalles5.component';

describe('Detalles5Component', () => {
  let component: Detalles5Component;
  let fixture: ComponentFixture<Detalles5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detalles5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalles5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
