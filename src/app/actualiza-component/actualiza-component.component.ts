import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:string = "";
  indice:number;

  constructor(private router:Router, private link:ActivatedRoute ,private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }

  empleados:Empleado[]=[];

  ngOnInit(): void {

    this.empleados = this.empleadosService.empleados;

    this.indice = this.link.snapshot.params["id"];

    let empleado:Empleado = this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;

    this.cuadroApellido = empleado.apellido;

    this.cuadroCargo = empleado.cargo;

    this.cuadroSalario = empleado.salario;

  }

  volverHome(){

      this.router.navigate([""]);
  }

  actualizarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.miServicio.muestraMensaje("Nombre del Empleado: " + miEmpleado.nombre);

    //Utilizamos el parametro de la clase EmpleadosServices para llamar al metodo agregarEmpleadosServicio 
    //que recibe el campo miEmpleado y lo agrega al arreglo
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

    const miForm = document.getElementById("miForm");

    (<HTMLFormElement> miForm).reset();

    this.router.navigate([""]);

  }

}
