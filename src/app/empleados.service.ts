import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{
    
    constructor(private ventanaEmergente:ServicioEmpleadosService){

    }

    empleados:Empleado[]=[

        new Empleado("Sergio", "Sanchez", "Programador", "900.000"),
        new Empleado("Katie", "Hartmann", "Directora de Cine", "400.000"),
        new Empleado("Daniela", "Sanchez", "Abogada", "800.000"),
        new Empleado("Laura", "Torres", "Comunicadora Social", "200.000"),
    ];

    agregarEmpleadoServicio(empleado:Empleado){

        this.ventanaEmergente.muestraMensaje("Persona que se va a agregar: \n" + empleado.nombre
        + " " + empleado.apellido + "\n" + "Cargo: " + empleado.cargo + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);
    }

    actualizarEmpleado(indice: number, empleado: Empleado) {
        
        let empleadoModificado = this.empleados[indice];

        empleadoModificado.nombre = empleado.nombre;

        empleadoModificado.apellido = empleado.apellido;

        empleadoModificado.cargo = empleado.cargo;

        empleadoModificado.salario = empleado.salario;
    }

    encontrarEmpleado(indice: number): Empleado {
        
        let empleado:Empleado = this.empleados[indice];

        return empleado;
    }
}