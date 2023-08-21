import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto07Component } from './punto07.component';

describe('Punto07Component', () => {
  let component: Punto07Component;
  let fixture: ComponentFixture<Punto07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto07Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Punto07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
