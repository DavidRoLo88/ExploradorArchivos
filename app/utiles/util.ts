import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Directorio } from "../interface/directorio";

@Injectable({
    providedIn : 'root'
})

export class Util {
    
    private TipoDocumento = {
        DEFAULT : "",
        MISDOCUMENTOS : "M128 512L512 512C547.3 512 576 483.3 576 448L576 208C576 172.7 547.3 144 512 144L362.7 144C355.8 144 349 141.8 343.5 137.6L305.1 108.8C294 100.5 280.5 96 266.7 96L128 96C92.7 96 64 124.7 64 160L64 448C64 483.3 92.7 512 128 512z",
        MISIMAGENES : "M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z",
        ARCHIVO : "M192 112L304 112L304 200C304 239.8 336.2 272 376 272L464 272L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 128C176 119.2 183.2 112 192 112zM352 131.9L444.1 224L376 224C362.7 224 352 213.3 352 200L352 131.9zM192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 250.5C512 233.5 505.3 217.2 493.3 205.2L370.7 82.7C358.7 70.7 342.5 64 325.5 64L192 64zM248 320C234.7 320 224 330.7 224 344C224 357.3 234.7 368 248 368L392 368C405.3 368 416 357.3 416 344C416 330.7 405.3 320 392 320L248 320zM248 416C234.7 416 224 426.7 224 440C224 453.3 234.7 464 248 464L392 464C405.3 464 416 453.3 416 440C416 426.7 405.3 416 392 416L248 416z"
      };

     public obtenerIcono(valor : Directorio[], sanitizer : DomSanitizer) {
        let valorIcono  = this.TipoDocumento.DEFAULT;

        for (let indice = 0; indice < valor.length; indice++) {
            const directorio = valor[indice];

            if (directorio.tipo == "misDocumentos") {
                valorIcono = `<path fill="rgb(166, 241, 255)" d="${ this.TipoDocumento.MISDOCUMENTOS }"/>`;
                directorio.icono = sanitizer.bypassSecurityTrustHtml(valorIcono);
            } else if (directorio.tipo == "misImagenes") {
                valorIcono = `<path fill="rgb(166, 241, 255)" d="${ this.TipoDocumento.MISIMAGENES }"/>`;
                directorio.icono = sanitizer.bypassSecurityTrustHtml(valorIcono);
            } else if(directorio.tipo == "archivo") {
                valorIcono = `<path d="${ this.TipoDocumento.ARCHIVO }"/>`;
                directorio.icono = sanitizer.bypassSecurityTrustHtml(valorIcono);
            }

            
        }
      }

}