import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto11Component } from './punto11.component';

describe('Punto11Component', () => {
  let component: Punto11Component;
  let fixture: ComponentFixture<Punto11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Punto11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
