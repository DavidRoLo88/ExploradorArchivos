import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaMaestra } from './ventana-maestra';

describe('VentanaMaestra', () => {
  let component: VentanaMaestra;
  let fixture: ComponentFixture<VentanaMaestra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaMaestra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaMaestra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
