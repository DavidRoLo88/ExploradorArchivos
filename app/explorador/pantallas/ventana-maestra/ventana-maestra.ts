import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateral } from '../../componentes/menu-lateral/menu-lateral';

@Component({
  selector: 'app-ventana-maestra',
  imports: [RouterOutlet,MenuLateral],
  templateUrl: './ventana-maestra.html',
  styleUrl: './ventana-maestra.css'
})
export default class VentanaMaestra {
 

}
