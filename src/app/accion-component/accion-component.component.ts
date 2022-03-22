import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-accion-component',
  templateUrl: './accion-component.component.html',
  styleUrls: ['./accion-component.component.css']
})
export class AccionComponentComponent implements OnInit {

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:string = "";
  nombreBoton:string = "";
  indice:number;
  

  //Como estamos pasando el id a travez de la URL el constructor debe estar preparado para recibir un parametro
  //en este caso lo llamamos link y de tipo ActivatedRoute
  constructor(private router:Router, private link:ActivatedRoute ,private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }

  empleados:Empleado[]=[];

  accion:number;

  ngOnInit(): void {
  
      this.accion = parseInt(this.link.snapshot.queryParams['accion']);

      this.empleados = this.empleadosService.empleados;

      //Utilizamos la propiedad params con el nombre del parametro que le pasamos por la URL
      //en este caso "id", * Tiene que ser el mismo nombre que le pasamos a traves de la URL o no funciona *
      this.indice = this.link.snapshot.params["id"];

      let empleado:Empleado = this.empleadosService.encontrarEmpleado(this.indice);

      this.cuadroNombre = empleado.nombre;

      this.cuadroApellido = empleado.apellido;

      this.cuadroCargo = empleado.cargo;

      this.cuadroSalario = empleado.salario;

      if(this.accion == 1){

          this.nombreBoton = "Actualizar";

      }else{

          this.nombreBoton = "Eliminar";
      }
  }

  accionEmpleado(){

    if(this.accion == 1){

        let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

        //Utilizamos el parametro de la clase EmpleadosServices para llamar al metodo agregarEmpleadosServicio 
        //que recibe el campo miEmpleado y lo agrega al arreglo
        this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

    }else{

        this.empleadosService.eliminarEmpleado(this.indice);

      
    }

    this.router.navigate([""]);


  }

  volverHome(){

      this.router.navigate([""]);
  }

}
