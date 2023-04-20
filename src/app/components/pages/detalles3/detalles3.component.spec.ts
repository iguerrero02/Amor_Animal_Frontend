import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalles3Component } from './detalles3.component';

describe('Detalles3Component', () => {
  let component: Detalles3Component;
  let fixture: ComponentFixture<Detalles3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detalles3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalles3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
