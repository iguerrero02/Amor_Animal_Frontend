import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalles6Component } from './detalles6.component';

describe('Detalles6Component', () => {
  let component: Detalles6Component;
  let fixture: ComponentFixture<Detalles6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detalles6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalles6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
