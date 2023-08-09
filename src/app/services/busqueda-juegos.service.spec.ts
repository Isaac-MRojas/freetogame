import { TestBed } from '@angular/core/testing';

import { BusquedaJuegosService } from './busqueda-juegos.service';

describe('BusquedaJuegosService', () => {
  let service: BusquedaJuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaJuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
