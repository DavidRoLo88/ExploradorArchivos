import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetoArchivo } from './objeto-archivo';

describe('ObjetoArchivo', () => {
  let component: ObjetoArchivo;
  let fixture: ComponentFixture<ObjetoArchivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetoArchivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetoArchivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
