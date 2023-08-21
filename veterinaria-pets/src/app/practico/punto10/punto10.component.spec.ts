import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto10Component } from './punto10.component';

describe('Punto10Component', () => {
  let component: Punto10Component;
  let fixture: ComponentFixture<Punto10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Punto10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
