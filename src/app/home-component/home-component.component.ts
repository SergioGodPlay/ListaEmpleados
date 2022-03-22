import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  titulo = 'Listado de Empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){

      //Almacenamos lo que hay en el arreglo del servicio EmpleadosService dentro del arreglo de este clase
      //this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void {
    
    //this.empleados = this.empleadosService.empleados;

    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{

        console.log(misEmpleados);
    });
    
  }

  //Este array se rellena desde el servicio EmpleadosService gracias a que lo inyectamos con el parametro
  //empleadosService del constructor
  empleados:Empleado[]=[

  ];

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:string = "";

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    //this.miServicio.muestraMensaje("Nombre del Empleado: " + miEmpleado.nombre);

    //Utilizamos el parametro de la clase EmpleadosServices para llamar al metodo agregarEmpleadosServicio 
    //que recibe el campo miEmpleado y lo agrega al arreglo
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

    const miForm = document.getElementById("miForm");

    (<HTMLFormElement> miForm).reset();

  }
}
