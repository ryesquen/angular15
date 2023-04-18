import { Component } from '@angular/core';
import { ICliente } from '../interfaces/cliente';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  listaClientes: ICliente[] = [
    {
      nombre: 'Renzo',
      credito: 23.86
    }
  ]
  agregar() {
  }
}
