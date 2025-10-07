import { Component, input } from '@angular/core';

@Component({
  selector: 'elemento-archivo',
  imports: [],
  templateUrl: './elemento-archivo.html',
  styleUrl: './elemento-archivo.css'
})
export class ElementoArchivo {

  tipoArchivo = input.required<string>();

  constructor() {
    console.log('Constructor ElementoArchivo',this.tipoArchivo);
    //aqui es donde abrimos la ventana con el archivo
  }
}
