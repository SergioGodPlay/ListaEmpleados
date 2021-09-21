import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private ventanaEmergente:ServicioEmpleadosService){

    }

    empleados:Empleado[]=[

        new Empleado("Sergio", "Sanchez", "Programador", 1200000),
        new Empleado("Katie", "Hartmann", "Directora de Cine", 400000),
        new Empleado("Daniela", "Sanchez", "Abogada", 800000),
        new Empleado("Laura", "Torres", "Comunicadora Social", 200000),
    ];

    agregarEmpleadoServicio(empleado:Empleado){

        this.ventanaEmergente.muestraMensaje("Persona que se va a agregar: \n" + empleado.nombre
        + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);
    }
}