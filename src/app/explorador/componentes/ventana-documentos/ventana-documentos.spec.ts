import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaDocumentos } from './ventana-documentos';

describe('VentanaDocumentos', () => {
  let component: VentanaDocumentos;
  let fixture: ComponentFixture<VentanaDocumentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaDocumentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaDocumentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
