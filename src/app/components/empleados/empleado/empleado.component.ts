import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleadosAntiguos: IEmpleado[] = [
    {
      nombres: 'Renzo',
      apellidos: 'Yesquen',
      direccion: 'Los Olivos',
      sueldo: 111
    },
    {
      nombres: 'Renzo2',
      apellidos: 'Yesquen2',
      direccion: 'Los Olivos2',
      sueldo: 222
    },
    {
      nombres: 'Renzo3',
      apellidos: 'Yesquen3',
      direccion: 'Los Olivos3',
      sueldo: 333
    }
  ]
}
