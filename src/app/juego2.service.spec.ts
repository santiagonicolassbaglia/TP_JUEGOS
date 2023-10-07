import { TestBed } from '@angular/core/testing';

import { Juego2Service } from './juego2.service';

describe('Juego2Service', () => {
  let service: Juego2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Juego2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
