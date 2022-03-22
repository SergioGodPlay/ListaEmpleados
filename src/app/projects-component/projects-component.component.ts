import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.component.html',
  styleUrls: ['./projects-component.component.css']
})
export class ProjectsComponentComponent implements OnInit {

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:string = "";

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }

  empleados:Empleado[]=[

  ];

  ngOnInit(): void {

    this.empleados = this.empleadosService.empleados;
  }

  volverHome(){

      this.router.navigate([""]);
  }

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.miServicio.muestraMensaje("Nombre del Empleado: " + miEmpleado.nombre);

    //Utilizamos el parametro de la clase EmpleadosServices para llamar al metodo agregarEmpleadosServicio 
    //que recibe el campo miEmpleado y lo agrega al arreglo
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

    const miForm = document.getElementById("miForm");

    (<HTMLFormElement> miForm).reset();

    this.router.navigate([""]);

  }

}
