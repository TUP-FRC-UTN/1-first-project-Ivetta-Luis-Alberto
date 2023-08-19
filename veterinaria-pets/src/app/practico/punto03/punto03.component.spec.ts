import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto03Component } from './punto03.component';

describe('Punto03Component', () => {
  let component: Punto03Component;
  let fixture: ComponentFixture<Punto03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Punto03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
