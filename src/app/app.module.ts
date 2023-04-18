import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosModule } from './components/empleados/empleados.module';
import { ClientesModule } from './components/clientes/clientes.module';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    EmpleadosModule,
    ClientesModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
