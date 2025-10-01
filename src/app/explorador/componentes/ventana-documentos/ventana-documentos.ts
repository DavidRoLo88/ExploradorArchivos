import { ElementoArchivo } from './../elemento-archivo/elemento-archivo';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';//¿Se requiere de ng add @angular/material en la terminal?
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ventana-documentos',
  imports: [],
  templateUrl: './ventana-documentos.html',
  styleUrl: './ventana-documentos.css'
})
export default class VentanaDocumentos {

  readonly elementoAbrirVentana;
  http = inject(HttpClient);

  constructor(rutaActiva : ActivatedRoute, elementoAbrirVentana : MatDialog, http2 : HttpClient){
    console.log(rutaActiva.snapshot.url[0]);//ruta activa
    this.elementoAbrirVentana = elementoAbrirVentana;
  }

  abrirVentana() {
    this.http.get<string[]>('assets/recursos/mis-documentos/mis-documentos.json').subscribe( (valor) => {
      //El JSON tiene indexado el nombre de los documentos dentro de mis-documentos, en el caso de que al final haga la opción de crear archivos y carpetas habrá que escribirlo
      //en este JSON
      console.log(valor);
      
    });
    this.elementoAbrirVentana.open(ElementoArchivo);
  }

}
