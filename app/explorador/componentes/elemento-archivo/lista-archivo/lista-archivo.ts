import { HttpClient } from '@angular/common/http';
import { Component, inject, input } from '@angular/core';
import { Archivo } from '../../../../interface/archivo';
import { ElementoArchivo } from '../elemento-archivo';

@Component({
  selector: 'lista-archivo',
  imports: [ElementoArchivo],
  templateUrl: './lista-archivo.html',
  styleUrl: './lista-archivo.css'
})
export class ListaArchivo {


  http = inject(HttpClient);
  archivos = input.required<Archivo[]>();
  
  constructor() {
    
    /*console.log(`Ruta activa desde lista-archivos ${ rutaActiva.snapshot.url[0] }`);//ruta activa

    const ruta = rutaActiva.snapshot.url[0];

    this.http.get<Archivo[]>(`assets/recursos/mis-documentos/${ ruta }.json`).subscribe( (valor) => {
      //El JSON tiene indexado el nombre de los documentos dentro de mis-documentos, en el caso de que al final haga la opción de crear archivos y carpetas habrá que escribirlo
      //en este JSON
      console.log(valor);

      
    });*/
  }
}
