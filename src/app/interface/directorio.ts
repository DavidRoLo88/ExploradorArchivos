import { SafeHtml } from "@angular/platform-browser";
import { Timestamp } from "rxjs";

export interface Directorio {//Estos nombres tienen que ser los mismos que haya en la base de datos
    id : number,
    nombre : string,
    url : string,
    fechaCreacion : Timestamp<1>,
    fechaModificacion : Timestamp<1>,
    tipo : string,
    icono? : SafeHtml
  };