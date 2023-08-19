import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto05Component } from './punto05.component';

describe('Punto05Component', () => {
  let component: Punto05Component;
  let fixture: ComponentFixture<Punto05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Punto05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
