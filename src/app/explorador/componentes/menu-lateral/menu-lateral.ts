import { Util } from './../../../utiles/util';
import { Component, inject, output, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Directorio } from '../../../interface/directorio'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'menu-lateral',
  imports: [RouterLink],
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.css'
})
export class MenuLateral {

  activo = signal<boolean>(false);
  directorios = signal<Directorio[]>([]);
  directorioActivo = output<Directorio>();
  iconoContraer : SafeHtml | null = null;
  util = inject(Util)

  //private archivoFirestoreDoc: AngularFirestoreDocument<Directorio>;
  //archivo: Observable<Directorio | undefined>;
  archivoId = 'ID';

  constructor(firestore : AngularFirestore, sanitizer: DomSanitizer) {
  
  
  this.iconoContraer = sanitizer.bypassSecurityTrustHtml(`<path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/>`);

    //this.archivoFirestoreDoc = firestore.doc<Directorio>(`ARCHIVO/${this.archivoId}`);//Esto apunta ala Colección/Documento 
   
    firestore.collectionGroup<Directorio>('ARCHIVO').valueChanges().subscribe( (valor) => {//Esto apunta a la Colección y te devuelve todos los Documentos junto a sus valores(ideal)
      
     this.util.obtenerIcono(valor, sanitizer);
     
      
      this.directorios.set(valor);
    });    

    // Obtener el documento como un Observable
    /*this.archivo = this.archivoFirestoreDoc.valueChanges();
    this.archivo.subscribe((value) => {
      console.log('Valor suscrito',value);
      
    });*/
    
  } //Fin constructor

  cambiarEvento() {
    console.log("Es valor anterior es ", this.activo());
    this.activo.update((valor) => !valor);
    console.log("Es valor actual es ", this.activo());
  }

}
