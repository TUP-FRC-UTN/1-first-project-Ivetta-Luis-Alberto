import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto08Component } from './punto08.component';

describe('Punto08Component', () => {
  let component: Punto08Component;
  let fixture: ComponentFixture<Punto08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto08Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Punto08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
