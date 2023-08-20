import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto06Component } from './punto06.component';

describe('Punto06Component', () => {
  let component: Punto06Component;
  let fixture: ComponentFixture<Punto06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Punto06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
