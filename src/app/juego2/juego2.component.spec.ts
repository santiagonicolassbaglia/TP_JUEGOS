import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego2Component } from './juego2.component';

describe('Juego2Component', () => {
  let component: Juego2Component;
  let fixture: ComponentFixture<Juego2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Juego2Component]
    });
    fixture = TestBed.createComponent(Juego2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
