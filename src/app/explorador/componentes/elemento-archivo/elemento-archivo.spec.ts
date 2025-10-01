import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoArchivo } from './elemento-archivo';

describe('ElementoArchivo', () => {
  let component: ElementoArchivo;
  let fixture: ComponentFixture<ElementoArchivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementoArchivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementoArchivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
