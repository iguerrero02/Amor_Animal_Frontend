import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercitaComponent } from './vercita.component';

describe('VercitaComponent', () => {
  let component: VercitaComponent;
  let fixture: ComponentFixture<VercitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VercitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
