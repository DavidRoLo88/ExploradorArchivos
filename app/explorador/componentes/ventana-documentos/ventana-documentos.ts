import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Archivo } from '../../../interface/archivo';
import { ListaArchivo } from '../elemento-archivo/lista-archivo/lista-archivo';

@Component({
  selector: 'ventana-documentos',
  imports: [ListaArchivo],
  templateUrl: './ventana-documentos.html',
  styleUrl: './ventana-documentos.css'
})
export default class VentanaDocumentos {

  http = inject(HttpClient);//Clase que se usa para hacer peticiones http tanto para servicios REST por ejemplo como para archivos locales del proyecto.
  archivos = signal<Archivo[]>([]);//Array de archivos obtenidos con la variable http para buscar en local

  constructor(rutaActiva : ActivatedRoute){

    const ruta = rutaActiva.snapshot.url[0];
    this.http.get<Archivo[]>(`assets/recursos/mis-documentos/${ ruta }.json`).subscribe( (valor) => {
      //El JSON tiene indexado el nombre de los documentos dentro de mis-documentos, en el caso de que al final haga la opción de crear archivos y carpetas habrá que escribirlo
      //en este JSON
      
      this.archivos.set(valor);
      
    });
  }

}
