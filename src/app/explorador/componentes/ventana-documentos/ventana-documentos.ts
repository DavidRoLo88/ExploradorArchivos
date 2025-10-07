import { ElementoArchivo } from './../elemento-archivo/elemento-archivo';
import { Component, inject, output, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';//¿Se requiere de ng add @angular/material en la terminal?
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

  readonly elementoAbrirVentana;
  http = inject(HttpClient);
  archivos = signal<Archivo[]>([]);//Array de archivos obtenidos con la variable http para buscar en local

  constructor(rutaActiva : ActivatedRoute, elementoAbrirVentana : MatDialog){

    console.log(rutaActiva.snapshot.url[0]);//ruta activa
    
    this.elementoAbrirVentana = elementoAbrirVentana;//para abrir una nueva ventana
    
    const ruta = rutaActiva.snapshot.url[0];
    this.http.get<Archivo[]>(`assets/recursos/mis-documentos/${ ruta }.json`).subscribe( (valor) => {
      //El JSON tiene indexado el nombre de los documentos dentro de mis-documentos, en el caso de que al final haga la opción de crear archivos y carpetas habrá que escribirlo
      //en este JSON
      
      this.archivos.set(valor);
      console.log(`Valor nuevo de archivos ${ this.archivos }`);
      
    });

    console.log(`Constructor VentanaDocumentos ${ this.archivos }`);
    
    //this.elementoAbrirVentana.open(ElementoArchivo);

  }

  abrirVentana() {
   
  }

}
