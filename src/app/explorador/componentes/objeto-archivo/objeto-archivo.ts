import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit, signal } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Archivo } from '../../../interface/archivo';

export interface DialogData {
  archivo : Archivo
}

@Component({
  selector: 'objeto-archivo',
  imports: [],
  templateUrl: './objeto-archivo.html',
  styleUrl: './objeto-archivo.css'
})
export class ObjetoArchivo implements OnInit{

  dialog : MatDialogRef<ObjetoArchivo> = inject(MatDialogRef);
  http = inject(HttpClient);

  archivo : string;
  texto = signal<string>('');
  
  constructor(@Inject(MAT_DIALOG_DATA) data : string) {
    this.archivo = data;
  }
  ngOnInit(): void {

    this.http.get(`assets/recursos/mis-documentos/${ this.archivo }`, { responseType : 'text'}).subscribe( (valor) => {
      //Buscamos en los assets el documento .txt y además indicamos que nos devuelva la respuesta en formato text(por defecto es JSON)
      this.texto.set(valor);
    });
  }


  guardarArchivo() {
    const confirmar = confirm('¿Estás seguro de que quieres guardar?');

    if (confirmar) {
      this.dialog.close(this.texto());
    } 
  }

  salir() {
    const confirmar = confirm('¿Estás seguro de que quieres salir sin guardar?');

    if (confirmar) {
      this.dialog.close();
    } 
  }

  actualizarTexto(event : Event) {
    const textArea = event.currentTarget as HTMLTextAreaElement | null;
      
    if (textArea != null) {
        this.texto.set(textArea.value);
      }
  }
}
