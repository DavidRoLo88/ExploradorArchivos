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

  archivo : Archivo;
  texto = signal<string>('');
  textoAntiguo = signal<string>('');
  urlImagen = signal<string>('');
  
  constructor(@Inject(MAT_DIALOG_DATA) data : Archivo) {
    this.archivo = data;
  }
  ngOnInit(): void {
    console.log(`texto nuevo: ${ this.archivo.texto } \n texto antiguo: ${ this.archivo.textoAntiguo }`);
    if (this.archivo.tipo == 'documento' && this.archivo.texto != null && this.archivo.texto != undefined) {
        this.texto.set(this.archivo.texto);
    } else if(this.archivo.tipo == 'documento') {

      if (this.archivo.textoAntiguo != null && this.textoAntiguo != undefined) {
        this.texto.set(this.archivo.textoAntiguo!);
      } else {
        this.http.get(`assets/recursos/mis-documentos/${ this.archivo.nombre }`, { responseType : 'text'}).subscribe( (valor) => {
          //Buscamos en los assets el documento .txt y además indicamos que nos devuelva la respuesta en formato text(por defecto es JSON)
          this.texto.set(valor);
        });
      }
    } else if(this.archivo.tipo == 'imagen') {
       this.urlImagen.set(`assets/recursos/mis-documentos/${ this.archivo.nombre }`);
      }
  }

  guardarArchivo() {
    const confirmar = confirm('¿Estás seguro de que quieres guardar?');

    if (confirmar) {
      this.archivo.texto = this.texto().toString();
      this.archivo.textoAntiguo = this.texto().toString();
      this.dialog.close(this.texto());
    } 
  }

  salir() {
    const confirmar = confirm('¿Estás seguro de que quieres salir sin guardar?');
    
    if (confirmar) {
      
      
      if (this.archivo.texto != this.archivo.textoAntiguo) {
        this.archivo.texto = this.archivo.textoAntiguo;
      }
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
