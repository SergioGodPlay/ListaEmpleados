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

  //Como estamos pasando el id a travez de la URL el constructor debe estar preparado para recibir un parametro
  //en este caso lo llamamos link y de tipo ActivatedRoute
  constructor(private router:Router, private link:ActivatedRoute ,private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }

  empleados:Empleado[]=[];

  accion:number;

  //Al colocar las instrucciones en el metodo ngOnInit() los cuadros de texto aparecen con la informacion
  //del empleado al cargar la pagina
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

  }

  volverHome(){

      this.router.navigate([""]);
  }

  /*actualizarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //Utilizamos el parametro de la clase EmpleadosServices para llamar al metodo agregarEmpleadosServicio 
    //que recibe el campo miEmpleado y lo agrega al arreglo
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

    //const miForm = document.getElementById("miForm");

    //(<HTMLFormElement> miForm).reset();

    this.router.navigate([""]);

  }

  eliminarEmpleado(){

    this.empleadosService.eliminarEmpleado(this.indice);

    this.router.navigate([""]);
  }*/

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

}
