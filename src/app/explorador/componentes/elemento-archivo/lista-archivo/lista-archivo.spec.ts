import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArchivo } from './lista-archivo';

describe('ListaArchivo', () => {
  let component: ListaArchivo;
  let fixture: ComponentFixture<ListaArchivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaArchivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaArchivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
