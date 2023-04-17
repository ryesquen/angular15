import { Component, Input } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  @Input()
  empleados: IEmpleado[] = []

  eliminar(empleado: IEmpleado) {
    let position = this.empleados.findIndex(p => p.nombres === empleado.nombres)
    console.log(position)
    this.empleados.splice(position, 1)
    console.log(empleado.nombres)
  }
}
