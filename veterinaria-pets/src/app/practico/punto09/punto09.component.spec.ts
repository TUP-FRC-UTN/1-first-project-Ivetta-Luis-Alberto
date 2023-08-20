import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto09Component } from './punto09.component';

describe('Punto09Component', () => {
  let component: Punto09Component;
  let fixture: ComponentFixture<Punto09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto09Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Punto09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
