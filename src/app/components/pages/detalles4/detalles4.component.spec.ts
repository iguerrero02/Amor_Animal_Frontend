import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalles4Component } from './detalles4.component';

describe('Detalles4Component', () => {
  let component: Detalles4Component;
  let fixture: ComponentFixture<Detalles4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detalles4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalles4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
