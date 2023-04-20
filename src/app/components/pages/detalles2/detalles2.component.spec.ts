import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalles2Component } from './detalles2.component';

describe('Detalles2Component', () => {
  let component: Detalles2Component;
  let fixture: ComponentFixture<Detalles2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detalles2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalles2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
