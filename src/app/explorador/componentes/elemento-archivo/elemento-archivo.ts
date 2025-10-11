import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjetoArchivo } from '../objeto-archivo/objeto-archivo';
import { Archivo } from '../../../interface/archivo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'elemento-archivo',
  imports: [],
  templateUrl: './elemento-archivo.html',
  styleUrl: './elemento-archivo.css'
})
export class ElementoArchivo {

  http = inject(HttpClient);
  
  archivo = input.required<Archivo>();
  readonly elementoAbrirVentana;

  constructor( elementoAbrirVentana : MatDialog) {
    this.elementoAbrirVentana = elementoAbrirVentana;//para abrir una nueva ventana
  }

  
  abrirVentana() {

    const dialog = this.elementoAbrirVentana.open(ObjetoArchivo, {
        width : '1440px',
        height : '700px',
        disableClose : this.archivo().tipo == 'documento' ? true : false,
        data : this.archivo()
      });

      if (this.archivo().tipo == 'documento') {
        dialog.afterClosed().subscribe( resultado => {
        
          this.archivo().texto = resultado;
  
          //Escribimos el documento con los nuevos cambios
          this.http.post( `assets/recursos/mis-documentos/${ this.archivo().nombre }`, { //Aquí habría que llamar a un servicio backend que se encargue de guardar pero me da pereza
            nombreArchivo: this.archivo().nombre,
            contenido: resultado,
        }, {responseType : 'text'}).subscribe({
            next: () => console.log(`[Servidor]: Archivo ${this.archivo().nombre} guardado con éxito.`),
            error: (err) => console.error('[Servidor]: Error al guardar el archivo', err)
        });
  
        });
      }
  }

}
