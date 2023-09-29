import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAhorcadoComponent } from './juego-ahorcado.component';

describe('JuegoAhorcadoComponent', () => {
  let component: JuegoAhorcadoComponent;
  let fixture: ComponentFixture<JuegoAhorcadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoAhorcadoComponent]
    });
    fixture = TestBed.createComponent(JuegoAhorcadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
