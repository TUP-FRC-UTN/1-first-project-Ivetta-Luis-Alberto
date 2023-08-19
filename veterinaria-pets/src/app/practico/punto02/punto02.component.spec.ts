import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto02Component } from './punto02.component';

describe('Punto02Component', () => {
  let component: Punto02Component;
  let fixture: ComponentFixture<Punto02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Punto02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
