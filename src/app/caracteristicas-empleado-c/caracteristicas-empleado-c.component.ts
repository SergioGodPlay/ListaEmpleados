import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  input_caracteristica:string = "";

  //constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregaCaracteristicas(value: string) {

    //this.miServicio.muestraMensaje("Característica: " + value);

    this.caracteristicasEmpleado.emit(value);

    this.input_caracteristica = "";
  }

}
